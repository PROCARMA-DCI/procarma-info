"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { ContactForm } from "@/components/form/contact-form";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "@/components/typography/Typography";
import { Wrapper } from "@/components/Layout";

export function EvolveRetention() {
  return (
    <footer
      className={` w-screen relative h-[950px] md:h-[1050px] lg:h-[800px] xl:h-[850px] overflow-hidden `}
    >
      {/* Curved Background Container */}
      <div className=" ">
        {/* Curved Background */}
        <div className="relative rounded-3xl lg:p-12  ">
          {/* Background Layer */}
          {/* <div className="absolute inset-0 z-10 bg-black/10 dark:bg-card clip-left-shape rounded-3xl" /> */}
          {/* Background Layer with Rotated Car */}
          <div className="absolute  inset-0 z-10">
            {/* Car Image */}
            <div
              className="absolute top-1/2 left-0 w-full h-full max-h-[900px] max-w-[1700px] bg-[url(/images/car.png)] bg-contain lg:bg-cover bg-no-repeat bg-center opacity-70 scale-200 lg:scale-100"
              style={{
                transform: "translate(-15%, 5%) scaleX(-1) scale(1)",
                filter: "blur(0.5px)",
              }}
            />

            {/* Bottom Blur/Fade */}
          </div>

          {/* Foreground Content */}
          <Wrapper>
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2  h-full  ">
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
        </div>
      </div>
      <div
        className="absolute bottom-0 bg-white/90  left-0 w-full lg:h-52 md:h-40 h-32  bg-gradient-to-t from-white to-transparent pointer-events-none"
        style={{ filter: "blur(40px)", zIndex: 30 }}
      />
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
