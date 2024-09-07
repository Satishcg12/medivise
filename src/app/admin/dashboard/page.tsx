import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <div className="flex items-center gap-4">
          <Button variant="outline">Edit Profile</Button>
          <Button variant="outline">Report</Button>
          <Button>Book a Session</Button>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
