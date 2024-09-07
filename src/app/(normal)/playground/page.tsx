import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Dot } from "lucide-react";

function PlaygroundPage() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-none overflow-hidden bg-muted p-0.5 hover:bg-primary transition-all duration-500 rounded-xl">
        <div className="relative overflow-hidden">
          <Image
            src="/images/doctor_pic.png"
            alt="Dr. Jane Doe"
            width={500}
            height={400}
            className="h-full w-full object-cover aspect-[3/4] rounded-[0.65rem]"
            priority // Correctly applying the priority property
          />
          <CardContent className="p-2 absolute bottom-0 left-0 right-0 space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="gap-1.5 bg-yellow-200 text-yellow-900 hover:bg-yellow-200 shadow-sm">
                <span>4.5</span>
                <Star className="size-3.5" />
                </Badge>
                <Badge className="gap-2 shadow-sm  hover:bg-primary">
                <span>Available</span>
                <span className="size-2 bg-background rounded-full"></span>
                </Badge>
            </div>
            <div className="p-4 rounded-sm flex items-center justify-between  bg-secondary/80 backdrop-blur-sm">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Dr. Jane Doe</h3>
                <p className="text-sm text-muted-foreground">Cardiologist</p>
                <p className="text-sm text-muted-foreground">
                  Associated with:{" "}
                  <span className="text-primary">XYZ Hospital</span>
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap space-x-2">
              <Button
                variant="secondary"
                className="bg-secondary/70 backdrop-blur-sm rounded-sm"
              >
                See Profile
              </Button>
              <Button className="flex-1"
              >Book Appointment</Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  );
}

export default PlaygroundPage;
