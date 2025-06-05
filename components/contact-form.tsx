"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

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
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md"
          disabled={isSubmitting || !formData.privacyPolicy}
        >
          {isSubmitting ? "Sending..." : submitSuccess ? "Message Sent!" : "Reach Out"}
        </Button>
      </div>
    </motion.form>
  )
}
