"use server";

import { signIn } from "@/auth";
import { DoctorLogin } from "@/schema/doctorLoginSchema";

export async function LoginDoctor(formData: DoctorLogin) {
  try {
     const sign = await signIn("credentials", formData);
     if (!sign) {
        return {
            success: false,
            message: "No user found",
        };
     }
    return {
        success: true,
        message: "Logged in successfully as doctor",
    };

  } catch (error) {
    
    return {
      success: false,
      message: "Error logging in as doctor",
      error: error,
    };
  }
}
