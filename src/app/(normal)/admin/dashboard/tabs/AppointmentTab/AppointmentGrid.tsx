import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AppointmentGrid() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="grid gap-4 p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid place-content-center row-span-2">
            <Image
              src="/images/doctor_pic.png"
              alt="Dr. Jane Doe"
              width={500}
              height={400}
              className="size-28 object-cover aspect-square rounded-full"
              priority
            />
          </div>
          <div>
            <Label>Appointment Time</Label>
            <p className="font-medium">2:30 PM</p>
          </div>
          <div>
            <Label>Appointment Date</Label>
            <p className="font-medium">June 23, 2024</p>
          </div>
          <div>
            <Label>Reason</Label>
            <p className="font-medium">Routine checkup</p>
          </div>
          <div>
            <Label>Patient Name</Label>
            <p className="font-medium">Sophia Anderson</p>
          </div>
          
        </div>
        
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Reschedule</Button>
        <Button className="">Confirm</Button>
      </CardFooter>
    </Card>
  );
}
