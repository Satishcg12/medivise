import exp from "constants";
import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    role: string;
    verified: boolean;
  }
  interface Session {
    user: {
      role?: string;
        verified?: boolean;
    } & DefaultSession["user"];
  }
  interface JWT {
    role?: string;
  }
}
