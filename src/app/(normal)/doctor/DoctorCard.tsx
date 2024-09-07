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

export const doctorCategories = [
  "General Physician",
  "Cardiologist",
  "Gastroenterologist",
  "Dermatologist",
  "Neurologist",
  "Ophthalmologist",
  "Orthopedist",
  "Pediatrician",
  "Psychiatrist",
  "Urologist",
  "Endocrinologist",
  "Pulmonologist",
  "Rheumatologist",
  "Nephrologist",
  "Hematologist",
  "Oncologist",
  "Gynecologist",
];

function DoctorCard({data}) {
  return (
    <Card className="border-none overflow-hidden bg-muted p-0.5 hover:bg-primary transition-all duration-500 rounded-xl h-fit shadow-md hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src="/images/doctor_pic.png"
          alt="Dr. Jane Doe"
          width={500}
          height={400}
          className="h-full w-full object-cover aspect-square rounded-[0.65rem]"
          priority
        />
        <CardContent className="p-1.5 absolute bottom-0 left-0 right-0 space-y-2">
          <div className="flex items-center gap-2">
            <Badge className="gap-1.5 border border-yellow-500 bg-yellow-100 text-yellow-900 hover:bg-yellow-200 shadow-sm">
              <span>4.5</span>
              <Star className="size-3.5" />
            </Badge>
            <Badge className="gap-2 shadow-sm border border-green-500 bg-green-100 text-green-900 hover:bg-primary">
              <span>Available</span>
              <span className="size-2 bg-green-500 rounded-full"></span>
            </Badge>
            <Badge className="gap-2 shadow-sm  hover:bg-primary">
              <span>Available</span>
              <span className="size-2 bg-green-500 rounded-full"></span>
            </Badge>
          </div>
          <div className="py-1 px-2 rounded-sm flex items-center justify-between bg-secondary/80 backdrop-blur-sm">
            <div className="space-y-1">
              <h3 className="font-medium">Dr. Jane Doe</h3>
              <p className="text-xs text-muted-foreground">Cardiologist</p>
            </div>
            <div>
              <p className="text-sm">5 yrs</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              className="bg-secondary/70 backdrop-blur-sm rounded-sm"
            >
              Rs 500
            </Button>
            <Button className="flex-1" asChild>
              <Link href={`/doctor/booking/${data.id}`}>
                <span>Book Now</span>
              </Link>
            </Button>
          </div>
          
        </CardContent>
      </div>
    </Card>
  );
}

export default DoctorCard;
