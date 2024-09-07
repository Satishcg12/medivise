import { auth, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/signin");
  }
  const { email,image,role } = session.user;
  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <Image
        src={`${image}`}
        alt="Vercel Logo"
        width={72}
        height={16}
      />
{role}
      <form
        action={async () => {
          "use server";
          try {
            await signOut();
          } catch (error) {
            throw error;
          }
        }}
      >
        <input type="submit" value="Sign Out" />
      </form>
    </div>
  );
};

export default page;
