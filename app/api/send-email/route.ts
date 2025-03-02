import sgMail, { MailDataRequired } from "@sendgrid/mail";

import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const senderEmail = process.env.SENDGRID_SENDER_EMAIL;
    const toEmail = process.env.SENDGRID_TO_EMAIL;

    if (!senderEmail || !toEmail) {
      return NextResponse.json(
        { error: "Missing email configuration." },
        { status: 500 }
      );
    }

    const msg: MailDataRequired = {
      to: toEmail,
      from: senderEmail,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
