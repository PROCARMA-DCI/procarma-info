"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"
import { toast } from "sonner"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      let data;
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        data = await response.json();
        console.log('API Response:', data);
        if (response.ok) {
          setSubmitSuccess(true);
          toast.success("Your message has been sent successfully!");

          // Reset form after success
          setTimeout(() => {
            setSubmitSuccess(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              privacyPolicy: false,
            });
          }, 3000);
          return;
        }

        // If response is not ok, handle the error
        const errorMessage = data.message || data.error || 'Failed to send message';
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
          description: toastTitle
        });
      } catch (apiError) {
        // Handle fetch or JSON parsing errors
        console.error('API Error:', apiError);
        toast.error("Could not connect to the server. Please try again.", {
          description: "Connection Error"
        });
      }

      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyPolicy: false,
        })
      }, 3000)
    } catch (error: any) {
      console.error('Form submission error:', error);
      setError('Failed to send message. Please try again.');
      setSubmitSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
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
            className="border-gray-200 bg-white text-gray-900"
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
            className="border-gray-200 bg-white text-gray-900"
          />
        </div>
        <div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border-gray-200 bg-white text-gray-900"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px] border-gray-200 bg-white text-gray-900"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="privacyPolicy"
            checked={formData.privacyPolicy}
            onCheckedChange={handleCheckboxChange}
            required
          />
          <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
            I have read and accept the{" "}
            <a href="#" className="text-cyan-500 hover:underline">
              privacy policy
            </a>
          </label>
        </div>
        <Button
          type="submit"
          className={`w-full font-medium py-2 px-4 rounded-md ${
            error 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-siteBlueColor hover:bg-siteBlueColor/80 text-white'
          }`}
          disabled={isSubmitting || !formData.privacyPolicy}
        >
          {isSubmitting ? "Sending..." : submitSuccess ? "Message Sent!" : "Reach Out"}
        </Button>
      </div>
    </motion.form>
  )
}
