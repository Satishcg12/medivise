"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import doctorsData from "../data.json";
import { toast } from "sonner";
import router from "next/router";

// Define types for doctor and slots
type Slot = {
  start: string;
  end: string;
};

type AvailableSlot = {
  day: string;
  slots: Slot[];
};

type Doctor = {
  name: string;
  email: string;
  password: string;
  description: string;
  specialization: string;
  qualification: string;
  experience_years: number;
  consultation_fee: number;
  image: string;
  availableSlots?: AvailableSlot[]; // Optional, handle default value
};

// Define props type
interface BookAppointmentProps {
  searchParams?: { [key: string]: string | undefined };
}

// Dummy data for available slots
const defaultAvailableSlots: AvailableSlot[] = [
  {
    day: "Monday",
    slots: [
      { start: "09:00", end: "10:00" },
      { start: "10:30", end: "11:30" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { start: "09:00", end: "11:00" },
    ],
  },
];

export default function BookAppointment() {
const router = useRouter();
  console.log(doctorsData);

  // Access doctor based on ID, default to the first doctor if not found
  const doctor: Doctor = {
    ...doctorsData.doctors[0],
    availableSlots: defaultAvailableSlots, // Use dummy data if availableSlots is missing
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      timeSlot: "",
      problem: "",
    },
  });

  const onSubmit = () => {
    toast.success("Appointment booked successfully!");
    router.push("/room/123");
  };

  return (
    <Card className="mx-auto grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg flex-1 shadow-lg border border-gray-200">
      {/* Doctor's image and details */}
      <Card className="border-none h-full overflow-hidden bg-muted hover:bg-primary transition-all duration-500 rounded-xl shadow-md hover:shadow-lg">
        <div className="relative overflow-hidden h-full">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={500}
            height={400}
            className="h-full w-full object-cover object-center rounded-[0.65rem]"
            priority
          />
          <CardContent className="absolute bottom-0 left-0 right-0 space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="gap-1.5 border border-yellow-500 bg-yellow-100 text-yellow-900 hover:bg-yellow-200 shadow-sm">
                <span>4.5</span>
                <Star className="size-3.5" />
              </Badge>
              <Badge className="gap-2 shadow-sm border border-green-500 bg-green-100 text-green-900 hover:bg-primary">
                <span>Available</span>
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
          </CardContent>
        </div>
      </Card>

      {/* Form to book an appointment */}
      <div>
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-semibold">
            Book an Appointment with {doctor.name}
          </CardTitle>
          <CardDescription className="text-gray-500 mt-2">
            Fill out the form below to schedule your appointment with Dr. {doctor.name}.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 gap-6">
          <CardContent className="gap-6 p-0 flex-grow flex- flex-col">
            <div className="flex flex-col gap-4 flex-1">
              <Label htmlFor="problem" className="text-base font-medium">
                Problem Description
              </Label>
              <Controller
                name="problem"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="problem"
                    className="w-full p-3 border rounded-lg h-20"
                    placeholder="Briefly describe your health problem..."
                  />
                )}
              />
              <Label htmlFor="timeSlot" className="text-base font-medium">
                Available Slots
              </Label>
              <Controller
                name="timeSlot"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="timeSlot" className="w-full">
                      <span>{field.value || "Select Time Slot"}</span>
                    </SelectTrigger>
                    <SelectContent className="max-h-80">
                      {(doctor.availableSlots || defaultAvailableSlots).map((slot, index) => (
                        <div key={index} className="space-y-2 p-2">
                          <Label className="text-sm font-semibold text-gray-600">
                            {slot.day}
                          </Label>
                          {slot.slots.map((timeSlot, i) => (
                            <SelectItem
                              key={i}
                              value={`${timeSlot.start} - ${timeSlot.end}`}
                            >
                              {timeSlot.start} - {timeSlot.end}
                            </SelectItem>
                          ))}
                          {index < (doctor.availableSlots || defaultAvailableSlots).length - 1 && (
                            <Separator />
                          )}
                        </div>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <Button type="submit" className="w-full mt-auto">
              Confirm Appointment
            </Button>
          </CardContent>
        </form>
      </div>
    </Card>
  );
}