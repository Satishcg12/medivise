"use server"

import { addDoctorSchema } from '@/schema/addDoctorSchema';
export async function RegisterDoctor( formData :FormData) {


//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   image: string,
//   ceritificateUrl: string;
//   description: string;
//   specializations: string[];
//   qualifications: string[];
//   experience: string;
//   consultationFee: number;
//   commission: number;
  try {
    const validateFormData =  await addDoctorSchema.parseAsync(formData);

    console.log(validateFormData);
    
  } catch (error) {
    throw error;
  }
}