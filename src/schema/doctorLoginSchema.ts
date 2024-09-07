import {z} from "zod"

export interface DoctorLogin{
  email: string
  password: string
}

export const doctorLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})