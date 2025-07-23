import { Paragraph, Title } from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center lg:mb-12 mb-4">
        <Title>ONE PLATFORM FOR EVERYTHING</Title>
      </div>
      {/* small screen */}
      <div className="w-full h-auto lg:hidden block">
        <Image
          src="/images/oneplatformsmall.png"
          alt={"one-platform-everything"}
          width={2000}
          height={2000}
          className="w-full rounded-lg"
        />
      </div>
      {/* large screen */}

      <div className="w-full lg:flex hidden relative ">
        {/* Left Image - Slide in from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-auto w-[30%] absolute z-20 top-[20%]"
        >
          <Image
            src="/images/mobileplatform.png"
            alt="one-platform-everything"
            width={2000}
            height={2000}
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Right Image - Slide in from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-auto z-10 w-[80%] ml-[20%]"
        >
          <Image
            src="/images/one-platform.png"
            alt="one-platform-everything"
            width={2000}
            height={2000}
            className="w-full rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OnePlatform;
