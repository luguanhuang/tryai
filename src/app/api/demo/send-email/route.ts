import { getAllConfigs } from "@/services/config";
import { respData, respErr } from "@/lib/resp";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const configs = await getAllConfigs();

    if (!configs.resend_api_key || !configs.resend_sender_email) {
      return respErr("RESEND_API_KEY or RESEND_SENDER_EMAIL is not set");
    }

    const { emails, subject, content } = await req.json();
    const resend = new Resend(configs.resend_api_key);

    const result = await resend.emails.send({
      from: configs.resend_sender_email,
      to: emails,
      subject: subject,
      html: content,
    });

    console.log("send email result", result);

    return respData(result);
  } catch (e) {
    console.log("send email failed:", e);
    return respErr("send email failed");
  }
}
