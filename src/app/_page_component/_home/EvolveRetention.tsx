"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { ContactForm } from "@/components/form/contact-form";
import { motion } from "framer-motion";

export function EvolveRetention() {
  return (
    <footer className=" overflow-hidden  ">
      {/* Curved Background Container */}
      <div className="">
        {/* Curved Background */}
        <div className="relative rounded-3xl p-8 lg:p-12 mb-8 overflow-hidden">
          {/* Background Layer */}
          <div className="absolute inset-0 z-10 bg-black/10 dark:bg-card clip-left-shape rounded-3xl" />

          {/* Foreground Content */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Evolve Your Retention.
              </h2>
              <p className="text-xl mb-8 max-w-md">
                If you are looking to take your business to the next level with
                innovative customer retention strategies, we&apos;re here to
                help.
              </p>
            </motion.div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social - Outside the blue box */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright - Centered */}
          <div className="flex-1 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} PROCARMA. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons - Right aligned */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="#"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
