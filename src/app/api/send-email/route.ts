// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create reusable transporter using SendGrid SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SENDGRID_SMTP || "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDGRID_USER, // often 'apikey'
        pass: process.env.SENDGRID_PASS, // actual API key
      },
    });

    const mailOptions = {
      from: process.env.DEFAULT_FROM_EMAIL,
      to: email, // change to your recipient
      subject: `New message from ${name}`,
      text: `
     Name: ${name}
     Phone: ${phone}
         ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Email error:", err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
