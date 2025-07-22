import { Paragraph } from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

const OnePlatform = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <Paragraph className="md:text-5xl px-2  text-3xl font-light  tracking-wide">
          ONE PLATFORM FOR EVERYTHING
        </Paragraph>
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
        <div className="h-auto w-[30%] absolute z-20 top-[20%] ">
          <Image
            src="/images/mobileplatform.png"
            alt={"one-platform-everything"}
            width={2000}
            height={2000}
            className="w-full rounded-lg"
          />
        </div>
        <div className="h-auto z-10 w-[80%]  ml-[20%] ">
          <Image
            src="/images/one-platform.png"
            alt={"one-platform-everything"}
            width={2000}
            height={2000}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OnePlatform;
