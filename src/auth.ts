import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";
import dbConnect from "./lib/dbConnect";
import UserModel from "./models/UserModel";
import { User } from "lucide-react";
import { doctorLoginSchema } from "./schema/doctorLoginSchema";

const ADMIN_EMAILS = ["sung20700@gmail.com","draxdrey99@gmail.com"];

const providers: Provider[] = [
  Credentials({
    id: "credentials",
    name: "Credentials",
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      try {
        let user = null;
        const { email, password } = await doctorLoginSchema.parseAsync(credentials);
        await dbConnect();
        user = await UserModel.findOne({
          email,
          password,
          role: "doctor",
        });
        if (!user) {
          throw new Error("No user found");
        }
        return user
      } catch (error) {
        throw new Error("Error logging in");
      }
    },
  }),
  google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
    authorization: {
      params: {
        access_type: "offline",
        prompt: "consent",
        response_type: "code",
      },
    },
    allowDangerousEmailAccountLinking: true,
    profile(profile) {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        role: ADMIN_EMAILS.includes(profile.email) ? "admin" : "user",
        password: null,
        verified: true,
      };
    },
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  theme: {
    logo: "/images/medivise-logo.png",
    brandColor: "#fff",
  },
  pages: {
    // signIn: "/doctor/login",
  },
  adapter: MongoDBAdapter(client),
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, user }) {
      if (user) {
        session.user = user;
        session.user.role = user.role;
      }
      return session;
    },
  },
  session: {  
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
