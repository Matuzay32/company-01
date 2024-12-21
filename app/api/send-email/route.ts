import { NextRequest, NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const msg = {
      to: "destinatario@example.com", // Cambia a tu correo de destino
      from: "tu_correo@example.com", // Cambia a tu correo verificado en SendGrid
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Mensaje: ${message}\nDe: ${name} <${email}>`,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
