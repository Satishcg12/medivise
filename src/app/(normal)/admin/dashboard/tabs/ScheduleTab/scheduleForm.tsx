"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { PlusCircle, Trash } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

// Import the schemas from separate files
import { scheduleSchema } from "@/schema/scheduleSchema";
import { z } from "zod";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type FormValues = z.infer<typeof scheduleSchema>;

export default function ScheduleForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: {
      schedule: daysOfWeek.map((day) => ({
        day,
        timeslots: [{ start: "09:00", end: "17:00" }],
      })),
    },
  });

  const { control, handleSubmit, setValue, watch } = form;
  const { fields: scheduleFields } = useFieldArray({ control, name: "schedule" });

  const addTimeSlot = (dayIndex: number) => {
    const updatedTimes = [...watch(`schedule.${dayIndex}.timeslots`), { start: "", end: "" }];
    setValue(`schedule.${dayIndex}.timeslots`, updatedTimes);
  };

  const removeTimeSlot = (dayIndex: number, slotIndex: number) => {
    const updatedTimes = watch(`schedule.${dayIndex}.timeslots`).filter((_, i) => i !== slotIndex);
    setValue(`schedule.${dayIndex}.timeslots`, updatedTimes);
  };

  const onSubmit = (values: FormValues) => console.log("Form submitted:", values);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="">
          <CardHeader>
            <CardTitle>Weekly Schedule</CardTitle>
            <CardDescription>Set the availability for each day of the week</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6">
            {scheduleFields.map((day, dayIndex) => (
              <div key={day.id} className="space-y-2 bg-muted p-4 rounded-xl">
                <FormField
                  control={control}
                  name={`schedule.${dayIndex}.day`}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-3.5">
                        <FormControl>
                          <Controller
                            control={control}
                            name={`schedule.${dayIndex}.timeslots`}
                            render={({ field: timeslotsField }) => (
                              <Checkbox
                                checked={timeslotsField.value.length > 0}
                                onCheckedChange={(checked) => {
                                  setValue(`schedule.${dayIndex}.timeslots`, checked ? [{ start: "", end: "" }] : []);
                                }}
                              />
                            )}
                          />
                        </FormControl>
                        <FormLabel className="w-16 text-sm font-medium">
                          {field.value.substring(0, 3).toUpperCase()}
                        </FormLabel>
                        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => addTimeSlot(dayIndex)}>
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      {watch(`schedule.${dayIndex}.timeslots`).length > 0 && (
                        <div className="space-y-2 mt-2 ml-6">
                          {watch(`schedule.${dayIndex}.timeslots`).map((_, timeIndex) => (
                            <div key={timeIndex} className="flex items-center gap-2">
                              <FormField
                                control={control}
                                name={`schedule.${dayIndex}.timeslots.${timeIndex}.start`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input type="time" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <span>-</span>
                              <FormField
                                control={control}
                                name={`schedule.${dayIndex}.timeslots.${timeIndex}.end`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input type="time" {...field} />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => removeTimeSlot(dayIndex, timeIndex)}>
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </CardContent>
        </Card>
        <Button type="submit" className="mt-4">Submit Schedule</Button>
      </form>
    </Form>
  );
}
