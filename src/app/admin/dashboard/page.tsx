import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TabMenus from "./TabMenus";

function DashboardPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 mb-2.5">
        <Image
          src="/images/doctor_pic.png"
          alt="user-avatar-image"
          width={100}
          height={100}
          className="size-40 border-4 border-solid border-white rounded-full"
        />
        <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900">
          Jenny Wilson
        </h3>
        <p className="font-normal text-base leading-7 text-gray-500 text-center">
          A social media influencers and singer
        </p>
      </div>
      <div>
        <TabMenus>
        <div className="flex items-center gap-4">
          <Button variant="outline">Edit Profile</Button>
          <Button variant="outline">Report</Button>
          <Button>Book a Session</Button>
        </div>
          </TabMenus>
      </div>
    </>
  );
}

export default DashboardPage;
