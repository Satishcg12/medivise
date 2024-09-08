import DoctorDetail from "@/models/DoctorDetail";
import UserModel from "@/models/UserModel";
import { NextRequest } from "next/server";

export async function GET(req:NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id')

  // get all user with role doctor
  const doctor =await DoctorDetail.findOne({_id:id})
  const user = await UserModel.findOne({_id: doctor?.user_id})

    return {
      id: doctor?._id,
      image: user?.image || "",
      name: user?.name || "",
      email: user?.email || "",
      specialization: doctor?.specializations,
      consultation: doctor?.consultationFee,
      commissionRate: doctor?.maxConsultationFee,
      experience: doctor?.experience,
      qualifications: doctor?.qualifications,
    };
  try {
    return Response.json(
      {
        success: true,
        message: "GET request successful",
        data: data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error generating content: " + error,
        date:null
      },
      {
        status: 500,
      }
    );
  }
}