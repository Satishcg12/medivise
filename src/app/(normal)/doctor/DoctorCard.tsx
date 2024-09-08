"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Dot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageTitle from "@/components/PageTitle";
import { doctors } from "./data.json"; // Replace with actual data import

type Doctor = {
  id: number;
  name: string;
  email: string;
  password: string;
  description: string;
  specialization: string;
  qualification: string;
  experience_years: number;
  consultation_fee: number;
  image: string;
};

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

function DoctorCard({data} : {data: any}) {
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>("");

  // Filter doctors based on selected specialization
  const filteredDoctors = selectedSpecialization
    ? doctors.filter((doctor) => doctor.specialization === selectedSpecialization)
    : doctors; // Show all if no specialization is selected

  if (filteredDoctors.length === 0) {
    return (
      <div className="flex-1 flex justify-center items-center min-h-screen">
        No doctors found.
      </div>
    );
  }

  return (
    <>
      <PageTitle title="Doctors">
        <Select onValueChange={(value) => setSelectedSpecialization(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Specialization" />
          </SelectTrigger>
          <SelectContent>
            {doctorCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PageTitle>

      <div className="ml-auto grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
      {filteredDoctors.map((doctor, index) => (
        <Card
          key={index}
          className="border-none overflow-hidden bg-muted p-0.5 hover:bg-primary transition-all duration-500 rounded-xl h-fit shadow-md hover:shadow-lg"
        >
          <div className="relative overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={500}
              height={400}
              className="h-full w-full object-cover aspect-square rounded-[0.65rem]"
              priority
            />
            <CardContent className="p-1.5 absolute bottom-0 left-0 right-0 space-y-2">
              <div className="flex items-center gap-2">
                <Badge className="gap-1.5 border border-yellow-500 bg-yellow-100 text-yellow-900 hover:bg-yellow-200 shadow-sm">
                  <span>{4.5}</span>
                  <Star className="size-3.5" />
                </Badge>
                <Badge className="gap-2 shadow-sm border border-green-500 bg-green-100 text-green-900 hover:bg-primary">
                  <span>Available</span>
                  <Dot className="size-2 bg-green-500 rounded-full" />
                </Badge>
              </div>
              <div className="py-1 px-2 rounded-sm flex items-center justify-between bg-secondary/80 backdrop-blur-sm">
                <div className="space-y-1">
                  <h3 className="font-medium">{doctor.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {doctor.specialization}
                  </p>
                </div>
                <div>
                  <p className="text-sm">{doctor.experience_years} yrs</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="secondary"
                  className="bg-secondary/70 backdrop-blur-sm rounded-sm"
                >
                  Rs {(doctor.consultation_fee * 1.13).toFixed(2)}
                </Button>
                <Button className="flex-1" asChild>
                  <Link href={`/doctor/booking`}>
                    <span>Book Now</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
      </div>
    </>
  );
}

export default DoctorCard;
