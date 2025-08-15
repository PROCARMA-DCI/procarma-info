import { Title } from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LottieWeb } from "@/components/Animation/lottie-web";
const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center ">
        <Title>
          ONE PLATFORM{" "}
          <span className="block lg:inline font-bold lg:font-extralight">
            FOR EVERYTHING
          </span>
        </Title>
      </div>
      <div className="max-w-2xl m-auto">
        <LottieWeb src="json/PROCARMA2.0-MOBILE-APP-ANIMATION.json" />
      </div>
      {/* small screen */}

      <div className="w-full h-auto lg:hidden block relative">
        <Image
          src="/images/oneplatformsmall.png"
          alt={"one-platform-everything"}
          width={2000}
          height={2000}
          className="w-full rounded-lg"
        />
        {/* Reflection */}
        <div className="absolute top-full left-0 w-full overflow-hidden h-[120px] lg:hidden">
          <Image
            src="/images/oneplatformsmall.png"
            alt="one-platform-everything-reflection"
            width={2000}
            height={2000}
            className="w-full scale-y-[-1] opacity-30 mask-gradient"
          />
        </div>
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
          className="h-auto z-10 w-[80%] ml-[20%] relative"
        >
          <Image
            src="/images/one-platform.png"
            alt="one-platform-everything"
            width={2000}
            height={2000}
            className="w-full rounded-lg"
          />
          {/* Reflection */}
          <div className="absolute top-full left-0 w-full overflow-hidden h-[200px]">
            <Image
              src="/images/one-platform.png"
              alt="one-platform-everything-reflection"
              width={2000}
              height={2000}
              className="w-full scale-y-[-1] opacity-30 mask-gradient"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OnePlatform;
