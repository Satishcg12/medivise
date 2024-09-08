import { sendMeetJoinlinkEmail } from "@/helper/sendJoinMeetingLinkEmail";

export async function GET(req: Request) {
  try {

    const sendEmail = await sendMeetJoinlinkEmail(
        ["sung20700@gmail.com","visionrayyan60517@gmail.com"],
        "Rayyan balami",
        "123456"
    );
    if (!sendEmail.success) {
      return Response.json(
        {
          success: false,
          message: "Error sending email",
          data: null,
        },
        {
          status: 500,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "GET request successful",
        data: null,
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