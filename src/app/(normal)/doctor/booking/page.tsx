"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"; // Added SelectPortal
import { Separator } from "@/components/ui/separator";
import { format, addDays, startOfWeek, endOfWeek, isBefore, isAfter } from "date-fns";
import Image from "next/image";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";


type TimeSlot = {
  start: string;
  end: string;
};

type AvailableSlot = {
  day: string;
  slots: TimeSlot[];
};

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  availableSlots: AvailableSlot[];
};

const dummyDoctor: Doctor = {
  id: "1",
  name: "Dr. Jane Doe",
  specialty: "Pediatrician",
  availableSlots: [
    { day: "Monday", slots: [{ start: "09:00", end: "10:00" }, { start: "10:30", end: "11:30" }] },
    { day: "Tuesday", slots: [{ start: "09:00", end: "11:00" }] },
    { day: "Wednesday", slots: [{ start: "13:00", end: "14:00" }, { start: "14:30", end: "15:30" }] },
    { day: "Thursday", slots: [{ start: "09:00", end: "10:00" }] },
    { day: "Friday", slots: [{ start: "10:00", end: "11:00" }, { start: "11:30", end: "12:30" }] },
    { day: "Saturday", slots: [{ start: "09:00", end: "10:00" }] },
    { day: "Sunday", slots: [{ start: "09:00", end: "10:00" }] },
  ],
};

const getDayOfWeek = (day: string) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek.indexOf(day);
};

const getNextWeekday = (day: string) => {
  const today = new Date();
  const dayOfWeek = getDayOfWeek(day);
  const currentDayOfWeek = today.getDay();
  const daysUntilNext = (dayOfWeek + 7 - currentDayOfWeek) % 7;
  return addDays(today, daysUntilNext);
};

const getWeekLabel = (date: Date) => {
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  const endOfCurrentWeek = endOfWeek(today);

  if (isBefore(date, startOfCurrentWeek)) {
    return "Previous Week";
  } else if (isAfter(date, endOfCurrentWeek)) {
    return "Next Week";
  } else {
    return "This Week";
  }
};

export default function BookAppointment() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      timeSlot: "",
      problem: "",
    },
  });

  const selectedSlot = watch("timeSlot");

  const onSubmit = (data: { timeSlot: string }) => {
    const slot = dummyDoctor.availableSlots.flatMap((s) => s.slots).find((s) => `${s.start} - ${s.end}` === data.timeSlot);
    if (slot) {
      console.log(`Booking appointment with ${dummyDoctor.name} at ${slot.start} - ${slot.end}`);
      // Post booking to API here
    }
  };

  const selectedSlotDetails = selectedSlot
    ? dummyDoctor.availableSlots.flatMap((s) => s.slots).find((s) => `${s.start} - ${s.end}` === selectedSlot)
    : null;

  const selectedDay = selectedSlotDetails
    ? dummyDoctor.availableSlots.find((s) => s.slots.includes(selectedSlotDetails))?.day
    : null;

  const selectedDate = selectedDay ? getNextWeekday(selectedDay) : null;
  const selectedWeekLabel = selectedDate ? getWeekLabel(selectedDate) : null;

  return (
    <Card className="mx-auto grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg flex-1 shadow-lg border border-gray-200">
          <Card className="border-none h-full overflow-hidden bg-muted hover:bg-primary transition-all duration-500 rounded-xl shadow-md hover:shadow-lg">
      <div className="relative overflow-hidden h-full">
        <Image
          src="/images/doctor_pic.png"
          alt="Dr. Jane Doe"
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
        </CardContent>
      </div>
    </Card>
      <div>
        <CardHeader className="p-6">
          <CardTitle className="text-2xl font-semibold">
            Book an Appointment with {dummyDoctor.name}
          </CardTitle>
          <CardDescription className="text-gray-500 mt-2">
            Fill out the form below to schedule your appointment with Dr. {dummyDoctor.name}.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 h-full gap-6">
          <CardContent className="space-y-6 p-0 flex-grow">
            <div className="flex flex-col gap-4">
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
                        {dummyDoctor.availableSlots.map((slot, index) => {
                          const nextDate = getNextWeekday(slot.day);
                          const weekLabel = getWeekLabel(nextDate);
                          return (
                            <div key={index} className="space-y-2 p-2">
                              <Label className="text-sm font-semibold text-gray-600">
                                {slot.day} ({weekLabel})
                              </Label>
                              {slot.slots.map((timeSlot, i) => (
                                <SelectItem key={i} value={`${timeSlot.start} - ${timeSlot.end}`}>
                                  {timeSlot.start} - {timeSlot.end}
                                </SelectItem>
                              ))}
                              {index !== dummyDoctor.availableSlots.length - 1 && <Separator className="mt-2" />}
                            </div>
                          );
                        })}
                      </SelectContent>
                  </Select>
                )}
              />
            </div>
            {selectedSlot && selectedDay && selectedWeekLabel && (
              <div className="mt-4 p-4 border rounded-lg bg-muted">
                <h3 className="font-medium">Selected Slot Details</h3>
                <p className="mt-2 text-sm">
                  <strong>Day:</strong> {selectedDay}
                </p>
                <p className="mt-1 text-sm">
                  <strong>Time:</strong> {selectedSlot}
                </p>
                <p className="mt-1 text-sm">
                  <strong>Week:</strong> {selectedWeekLabel}
                </p>
              </div>
            )}
          </CardContent>
            <Button type="submit" className="w-full mt-6">
              Confirm Booking (Rs 500 e-Sewa)
            </Button>

        </form>
      </div>
    </Card>
  );
}
