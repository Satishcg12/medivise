import VerificationEmail from "@/emailTemplate/VerificationCode";
import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    otp: string
): Promise<ApiResponse<null>> {
    try {
        // Send the email
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Verification Code",
            react: VerificationEmail({ username, otp }),
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
