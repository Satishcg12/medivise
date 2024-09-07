"use server";

import dbConnect from "@/lib/dbConnect";
import DoctorDetailModel from "@/models/DoctorDetail";
import UserModel from "@/models/UserModel";
import { addDoctorSchema, doctorFormInterface } from "@/schema/addDoctorSchema";
import { revalidatePath } from "next/cache";

export async function RegisterDoctor(formData: doctorFormInterface) {
  try {
    const validateFormData = await addDoctorSchema.parseAsync(formData);
    await dbConnect();
    const existingUser = await UserModel.findOne({
      email: validateFormData.email,
    });
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }
    const doctor = await UserModel.create({
      name: validateFormData.name,
      email: validateFormData.email,
      password: validateFormData.password,
      image: validateFormData.image,
      role: "doctor",
    });
    await doctor.save();
    const doctorDetail = await DoctorDetailModel.create({
      user_id: doctor._id,
      ceritificateUrl: validateFormData.ceritificate,
      description: validateFormData.description,
      specializations: validateFormData.specializations,
      qualifications: validateFormData.qualifications,
      experience: validateFormData.experience,
      consultationFee: validateFormData.consultationFee,
      maxConsultationFee: validateFormData.consultationFee,
    });
    await doctorDetail.save();
    revalidatePath("/admin/dashboard");

    return {
      success: true,
      message: "Doctor added successfully",
    };
  } catch (error) {
    return { error: error };
  }
}
