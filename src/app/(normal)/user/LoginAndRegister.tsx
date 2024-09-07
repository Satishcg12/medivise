import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { login } from "./action";
import { Button } from "@/components/ui/button";

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      className="size-3.5 text-inherit"
    >
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  );
}

async function LoginAndRegister() {
async function LoginAndRegister() {
  const session = await auth();
  const user = session?.user;
  if (user?.email) return <></>;
  else
    return (
      <>
        <form
          action={async () => {
            "use server";
  if (user?.email) return <></>;
  else
    return (
      <>
        <form
          action={async () => {
            "use server";

            try {
              await signIn("google");
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`/?error=${error.type}`);
              }
            try {
              await signIn("google");
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`/?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <Button variant="secondary" className="gap-2">
            <GoogleIcon />
            Login / Register
          </Button>
        </form>
      </>
    );
}

export default LoginAndRegister;
