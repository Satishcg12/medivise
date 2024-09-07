import mongoose, { Schema } from "mongoose";
import { string } from "zod";
export interface Review{
  user_id: Schema.Types.ObjectId;
  doctor_id: Schema.Types.ObjectId;
  rating?: number;
  review?: string;
  isApproved: boolean;
  isDeleted: boolean;
}

export interface DoctorDetail {
  user_id: Schema.Types.ObjectId;
  ceritificateUrl: string;
  description: string;
  specializations: string;
  qualifications: string;
  experience: string;
  consultationFee: number;
  maxConsultationFee: number;
  reviews: Review[];
}

const ReviewSchema: Schema<Review>= new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required"],
  },
  rating: {
    type: Number,
  },
  review: {
    type: String,
  },
  isApproved: {
    type: Boolean,
    required: [true, "isApproved is required"],
  },
  isDeleted: {
    type: Boolean,
    required: [true, "isDeleted is required"],
  }
},{
  timestamps: true,
})

const DoctorDetailSchema: Schema<DoctorDetail> = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    ceritificateUrl: {
      type: String,
      required: [true, "Certificate is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    specializations: {
      type:String,
      required: [true, "Specializations is required"],
    },
    qualifications: {
      type: String,
      required: [true, "Qualifications is required"],
    },
    experience: {
      type: String,
      required: [true, "Experience is required"],
    },
    consultationFee: {
      type: Number,
      required: [true, "Consultation Fee is required"],
    },
    maxConsultationFee: {
      type: Number,
      required: [true, "Max Consultation Fee is required"],
    },
    reviews: [ReviewSchema]
       
  },
  {
    timestamps: true,
  }
);

const DoctorDetail =
  (mongoose.models.DoctorDetail as mongoose.Model<DoctorDetail>) ||
  mongoose.model<DoctorDetail>("DoctorDetail", DoctorDetailSchema);

export default DoctorDetail;