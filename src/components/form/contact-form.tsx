"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
// import nodemailer from "nodemailer";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
// const sendMail = async (
//   name: string,
//   email: string,
//   phone: string,
//   message: string
// ) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.NEXT_PUBLIC_SENDGRID_SMTP || "smtp.sendgrid.net",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.NEXT_PUBLIC_SENDGRID_USER, // usually 'apikey'
//         pass: process.env.NEXT_PUBLIC_SENDGRID_PASS, // actual API key
//       },
//     });

//     const mailOptions = {
//       from: process.env.NEXT_PUBLIC_DEFAULT_FROM_EMAIL,
//       to: email, // or your desired recipient
//       subject: `New message from ${name}`,
//       text: `
//         Name: ${name}
//         Phone: ${phone || "N/A"}

//         ${message}
//         `,
//     };

//     await transporter.sendMail(mailOptions);
//     toast.success("Your message has been sent successfully!");
//   } catch (err) {
//     console.log(err);
//     toast.success("Server Error");
//   }
// };

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let data;
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        console.log(response);
        if (response.ok) {
          data = await response.json();
          console.log("API Response:", data);

          setSubmitSuccess(true);
          toast.success("Your message has been sent successfully!");

          // Reset form after success
          setSubmitSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            privacyPolicy: false,
          });
        } else {
          data = await response.json();
          // If response is not ok, handle the error
          const errorMessage =
            data.message || data.error || "Failed to send message";
          let toastTitle = "Error";

          switch (response.status) {
            case 401:
              toastTitle = "Authentication Error";
              break;
            case 429:
              toastTitle = "Too Many Requests";
              break;
            case 400:
              toastTitle = "Validation Error";
              break;
            case 500:
              toastTitle = "Server Error";
              break;
          }

          toast.error(errorMessage, {
            description: toastTitle,
          });
        }
      } catch (apiError) {
        // Handle fetch or JSON parsing errors
        console.error("API Error:", apiError);
        toast.error("Could not connect to the server. Please try again.", {
          description: "Connection Error",
        });
        setSubmitSuccess(false);
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      setError("Failed to send message. Please try again.");
      setSubmitSuccess(false);
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="lg:bg-white/70 bg-white/50 py-8 px-4 rounded-lg shadow-lg w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-gray-200 bg-white/90 text-[#012733] lg:text-[#294559]"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-gray-200 bg-white/90 text-[#012733] lg:text-[#294559]"
          />
        </div>
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-gray-200 bg-white/90 text-[#012733] lg:text-[#294559]"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            minLength={10}
            maxLength={1000}
            required
            className="min-h-[120px] border-gray-200 bg-white/90 text-[#012733] lg:text-[#294559]"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="privacyPolicy"
            checked={formData.privacyPolicy}
            onCheckedChange={handleCheckboxChange}
            required
          />
          <label
            htmlFor="privacyPolicy"
            className="text-sm text-[#012733] lg:text-[#294559]"
          >
            I have read and accept the{" "}
            <Link href="/privacy" className="text-cyan-500 hover:underline">
              privacy policy
            </Link>
          </label>
        </div>
        <div className="w-max">
          <Button
            type="submit"
            size={"lg"}
            className={`w-full font-medium rounded-md mt-4 ${
              error ? "bg-red-500 hover:bg-red-600 text-white" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending..."
              : submitSuccess
              ? "Message Sent!"
              : "Reach Out"}
          </Button>
        </div>
      </div>
    </motion.form>
  );
}
