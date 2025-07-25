"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { ContactForm } from "@/components/form/contact-form";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "@/components/typography/Typography";
import { Wrapper } from "@/components/Layout";
import Image from "next/image";

export function EvolveRetention() {
  return (
    <footer
      className={` w-screen relative h-[700px]  sm:h-[850px] md:h-[800px] lg:h-[920px] xl:h-[950px] 2xl:h-[1100px] overflow-hidden `}
    >
      {/* Curved Background Container */}
      <div className=" ">
        {/* Curved Background */}
        <div className="relative rounded-3xl lg:p-12 ">
          {/* Background Layer */}
          {/* <div className="absolute inset-0 z-10 bg-black/10 dark:bg-card clip-left-shape rounded-3xl" /> */}

          {/* Foreground Content */}
          <Wrapper>
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2  h-full w-full ">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className=""
              >
                <Heading className="lg:text-5xl px text-3xl max-w-xl font-bold mb-3 mt-10">
                  Stop losing customers you already have.
                </Heading>
                <Paragraph className="lg:text-xl text-lg lg:mb-8 mb-4 max-w-md text-primary">
                  See how we can level up your retention
                </Paragraph>
              </motion.div>

              {/* Right */}
              <div className="w-full flex justify-center  ">
                <ContactForm />
              </div>
            </div>
          </Wrapper>
          <div className="w-full    absolute 2xl:top-0  lg:top:2/12 md:top-2/6 bottom-0 top-2/3  -scale-x-100 -left-1/12">
            <div className="relative">
              <div>
                <Image
                  src="/images/car.png"
                  alt="car"
                  width={2000}
                  height={2000}
                  className="w-full max-w-[1920px] m-auto h-full object-cover scale-125 z-10"
                />
              </div>
              <div
                className="z-30 absolute bottom-0 bg-white/90 md:mb-24 left-0 w-full lg:h-52 xl:h-72 2xl:h-96 md:h-32 sm:h-48 h-32  bg-gradient-to-t from-white to-transparent pointer-events-none"
                style={{ filter: "blur(20px)", zIndex: 30 }}
              />
            </div>
          </div>
        </div>
        {/* Background Layer with Rotated Car */}

        {/* Car Image */}
        {/* <div
          className="top-1/2 left-0 w-full h-full max-h-[900px] max-w-[1700px] bg-[url(/images/car.png)] bg-contain lg:bg-cover bg-no-repeat bg-center opacity-70 scale-200 lg:scale-100"
          style={{
            transform: "translate(-15%, 5%) scaleX(-1) scale(1)",
            filter: "blur(0.5px)",
          }}
        /> */}

        {/* Bottom Blur/Fade */}
      </div>
    </footer>
  );
}

// <div className="flex flex-col md:flex-row justify-between items-center gap-6">

//         <div className="flex space-x-4">
//           <a
//             href="#"
//             className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
//             aria-label="Facebook"
//           >
//             <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//           </a>
//           <a
//             href="#"
//             className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
//             aria-label="Instagram"
//           >
//             <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//           </a>
//           <a
//             href="#"
//             className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
//             aria-label="Twitter"
//           >
//             <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
//           </a>
//         </div>
//       </div>
