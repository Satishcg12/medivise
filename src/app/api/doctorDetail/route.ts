import dbConnect from "@/lib/dbConnect";
import DoctorDetail from "@/models/DoctorDetail";
import UserModel, { User } from "@/models/UserModel";
import { date } from "zod";


export async function POST(req: Request) {

  await dbConnect();
  const { specializations } = await req.json();

  // get all user with role doctor
  const doctors = await DoctorDetail.find({specializations});
  const users = await UserModel.find({ role: "doctor" });

  const data = doctors.map((doctor) => {
    const user = users.find(
      (user) => user._id.toString() === doctor.user_id.toString()
    );
    return {
      id: doctor._id,
      image: user?.image || "",
      name: user?.name || "",
      email: user?.email || "",
      specialization: doctor.specializations,
      consultation: doctor.consultationFee,
      commissionRate: doctor.maxConsultationFee,
      experience: doctor.experience,
      qualifications: doctor.qualifications,
    };
  });
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
