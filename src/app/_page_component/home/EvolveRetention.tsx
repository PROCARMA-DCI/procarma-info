"use client";

import { ContactForm } from "@/components/form/contact-form";
import { Wrapper } from "@/components/Layout";
import { Heading, Paragraph } from "@/components/typography/Typography";
import { motion } from "framer-motion";
import Image from "next/image";

export function EvolveRetention() {
  return (
    <footer className={` w-screen relative overflow-hidden  `}>
      {/* Curved Background Container */}
      <div className=" ">
        {/* Curved Background */}
        <div className="relative rounded-3xl lg:p-12 ">
          {/* Foreground Content */}
          <Wrapper>
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2  h-full w-full ">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="px-4"
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
          {/* 2xl:top-0  lg:top:2/12 md:top-2/6 bottom-0 top-2/3  */}
          <div className="w-full   -scale-x-100 ">
            <div className="relative w-full h-full sm:scale-110  md:scale-125 -mt-28">
              <div className="image-wrapper">
                <Image
                  src="/images/car.webp"
                  alt="car"
                  width={2000}
                  height={2000}
                  className="w-full  ml-10 sm:ml-16 md:ml-36 md:max-w-[calc(100vh)/10%] m-auto h-full object-cover scale-100 z-10"
                />
              </div>
              <div
                className="!w-screen max-w-[1920px] z-30 absolute bottom-0 -mb-8  bg-[#f5f5f5]/95 lg:h-48 sm:h-32 h-20  bg-gradient-to-t from-[#f5f5f5] to-transparent pointer-events-none"
                style={{ filter: "blur(20px)", zIndex: 30 }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
