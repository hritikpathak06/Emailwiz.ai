"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (payload: {
  senderEmail: string;
  receiverEmail: string;
  content: string;
}) => {
  try {
    console.log("Send Email");
    const { data, error } = await resend.emails.send({
      from: "EmailWiz.ai <team@qtee.ai>",
      to: [payload.receiverEmail],
      subject: "Hello World",
      html: `<strong>${payload.content}</strong>`,
    });

    if (error) {
      return console.error({ error });
    }

  
    return "Email Sent successfully";

    return data;
  } catch (error) {
    throw new Error("Something went wrong from our side");
  }
};
