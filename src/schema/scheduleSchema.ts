import { z } from "zod";

export const timeSlotSchema = z.object({
  start: z
    .string()
    .refine(
      (val) => val.match(/^([01]\d|2[0-3]):([0-5]\d)$/), // Time format validation (HH:MM)
      { message: "Start time must be in valid format (HH:MM)" }
    ),
  end: z
    .string()
    .refine(
      (val) => val.match(/^([01]\d|2[0-3]):([0-5]\d)$/), // Time format validation (HH:MM)
      { message: "End time must be in valid format (HH:MM)" }
    ),
}).refine(
  (times) => times.start < times.end,
  { message: "Start time must be before the end time" }
);


export const scheduleDaySchema = z.object({
  day: z.string(),
  timeslots: z.array(timeSlotSchema),
});

export const scheduleSchema = z.object({
  schedule: z.array(scheduleDaySchema),
});