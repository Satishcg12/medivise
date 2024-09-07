import { Button } from "@/components/ui/button";
import Image from "next/image";
import TabMenus from "./TabMenus";
import { Badge } from "@/components/ui/badge";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const session = await auth();
  if (!session || session.user.role !== "admin") redirect("/");
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 mb-2.5">
        <Image
          src={`${session.user.image}`}
          alt="user-avatar-image"
          width={100}
          height={100}
          className="size-40 border-4 border-solid border-white rounded-full"
        />
        <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900">
          {session.user.name}
        </h3>
        <Badge>Admin Account</Badge>
      </div>
      <div>
        <TabMenus />
      </div>
    </>
  );
}

export default DashboardPage;
