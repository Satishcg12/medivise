import mongoose, { Schema } from "mongoose";

type AppointmentStatus = "scheduled" | "completed" | "canceled";

export interface Appointment {
  user: mongoose.Schema.Types.ObjectId;
  doctor: mongoose.Schema.Types.ObjectId;
  date: Date;
  time: string;
  status: AppointmentStatus;
  notes: string;
  meetingLink: string;
}

const appointmentSchema: Schema<Appointment> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: [true, "Doctor ID is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
    time: {
      type: String,
      required: [true, "Time is required"],
    },
    status: {
      type: String,
      enum: ["scheduled", "completed", "canceled"],
      default: "scheduled",
    },
    notes: {
      type: String,
    },
    meetingLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentModel =
    (mongoose.models.Appointment as mongoose.Model<Appointment>) ||
    mongoose.model<Appointment>("Appointment", appointmentSchema);

