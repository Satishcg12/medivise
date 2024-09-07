import {z} from "zod";
export interface doctorFormInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: string,
  ceritificateUrl: string;
  description: string;
  specializations: string[];
  qualifications: string[];
  experience: string;
  consultationFee: number;
  commission: number;
}

export const addDoctorSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
  confirmPassword: z.string().min(8).max(255),
  image: z.string().min(0),
  ceritificateUrl: z.string().min(0),
  description: z.string().min(10).max(255),
  specializations: z.array(z.string()).min(1),
  qualifications: z.array(z.string()).min(1),
  experience: z.string().min(0),
  consultationFee: z.number().positive(),
  commission: z.number().min(0).max(100),
})


