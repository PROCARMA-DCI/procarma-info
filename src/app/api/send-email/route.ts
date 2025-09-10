// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SENDGRID_SMTP || "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDGRID_USER, // usually 'apikey'
        pass: process.env.SENDGRID_PASS, // actual API key
      },
    });

    const mailOptions = {
      from: process.env.DEFAULT_FROM_EMAIL,
      to: email, // or your desired recipient
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Phone: ${phone || "N/A"}

${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
