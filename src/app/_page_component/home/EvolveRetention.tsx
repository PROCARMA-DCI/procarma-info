"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { ContactForm } from "@/components/form/contact-form";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "@/components/typography/Typography";

export function EvolveRetention() {
  return (
    <footer className="  ">
      {/* Curved Background Container */}
      <div className=" h-[900px] overflow-hidden">
        {/* Curved Background */}
        <div className="relative rounded-3xl lg:p-12 ">
          {/* Background Layer */}
          {/* <div className="absolute inset-0 z-10 bg-black/10 dark:bg-card clip-left-shape rounded-3xl" /> */}
          {/* Background Layer with Rotated Car */}
          <div className="absolute inset-0 z-10 ">
            <div
              className=" absolute top-1/2 left-0 w-full h-full max-h-[500px] bg-[url(/images/car.png)] lg:bg-cover bg-contain scale-200 lg:scale-125  bg-no-repeat bg-center opacity-20 "
              style={{
                transform: "translate(-5%, 10%)  scaleX(-1)  scale(1)",
                filter: "blur(0.5px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r to-transparent" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2  h-full  ">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heading className="text-5xl px md:text-5xl max-w-xl font-bold mb-3 mt-10">
                Stop losing customers you already have.
              </Heading>
              <Paragraph className="text-xl mb-8 max-w-md text-primary">
                See how we can level up your retention
              </Paragraph>
            </motion.div>

            {/* Right */}
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Social - Outside the blue box */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media Icons - Right aligned */}
          {/* <div className="flex space-x-4">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
}
