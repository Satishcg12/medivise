import { redirect } from "next/navigation";
import { signIn, auth, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import EsewaPayButton from "@/components/EsewaPayButton";

const SIGNIN_ERROR_URL = "/signin/error";

export default async function SignInPage() {
  const session = await auth();
  console.log(session);
  if (session && session.user.role === "doctor") {
    redirect("/");
  }
  return (
    <>
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <label htmlFor="email">
          Email
          <input name="email" id="email" type="email" className="border" />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            type="password"
            className="border"
          />
        </label>
        <input type="submit" value="Sign In" />
      </form>
      
    </>
  );
}
