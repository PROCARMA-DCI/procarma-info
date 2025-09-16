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

    await transporter.verify();
    console.log("SMTP server is ready to send messages");
    const mailOptions = {
      from: email,
      to: process.env.DEFAULT_TO_EMAIL, // or your desired recipient
      subject: `New message from ${name}`,
      text: `
    Hello Support,
    
    Message from Procarma.info contact form:

    Name: ${name}
    Phone: ${phone || "N/A"}
    Email: ${email}
    ${message}

    Thank you,
    PROCARMA TEAM
          `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email error:", err.message, err.stack);
    return NextResponse.json(
      { message: "Failed to send email", error: err.message },
      { status: 500 }
    );
  }
}
