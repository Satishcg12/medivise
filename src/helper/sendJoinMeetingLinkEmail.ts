import JoinMeetingEmail from "@/emailTemplate/JoinMeeting";
import VerificationEmail from "@/emailTemplate/VerificationCode";
import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendMeetJoinlinkEmail(
    email: string[],
    name: string,
    id: string
): Promise<ApiResponse<null>> {
    try {
        // Send the email
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Join Meeting Link",
            react: JoinMeetingEmail({ name ,id }),
        });

    }
    catch (error) {
        // Return a response indicating failure
        return {
            success: false,
            data: null,
            message: "Failed to send verification email"
        };
    }

    // Return a response indicating success
    return {
        success: true,
        data: null,
        message: "Verification email sent successfully"
    };
}
