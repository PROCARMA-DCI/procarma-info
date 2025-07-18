"use client";
import { motion } from "framer-motion";
import { LottieWeb } from "@/components/Animation/lottie-web";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { Suspense } from "react";
import Autoplay from "embla-carousel-autoplay";

export function FeatureShowcase({ containerVariants }: any) {
  const features = [
    {
      title: "AI.LCM",
      subtitle: "AI Agent Life Cycle Management",
      description:
        "AI Agents analyze each customer's life cycle and enhances their life time transactional and experiential value.",
      file: "/json/smallanimation/1/data.json",
      fileClass: "py-2",
    },
    {
      title: "CONNECTED",
      subtitle: "Dealer Branded App Ecosystem",
      description:
        "Dealer / Customer centric approach to product visibility and engagement touch points.",
      file: "/json/smallanimation/2/data.json",
      // fileClass: "scale-150",
    },
    {
      title: "AGNOSTIC",
      subtitle: "Open platform architecture - no gateway fees",
      description:
        "Partnered with top tier administrators and agencies nationwide to display your information across our platform.",
      file: "/json/smallanimation/2/data.json",
      fileClass: "scale-150",
    },
  ];
  const mainCard = (feature: any) => (
    <div className="w-full flex flex-col gap-4 transition-all duration-300">
      <Card className="border-none  shadow-none bg-white w-full transition-all duration-200  h-20 p-0 flex justify-center overflow-hidden">
        <CardHeader className="flex justify-between items-center p-0 m-0 px-6 ">
          <CardTitle className="text-xl font-bold  text-[#294559]">
            {feature.title}
            <CardDescription className="text-xs font-medium text-[#3e5266]">
              {feature.subtitle}
            </CardDescription>
          </CardTitle>
          <div className={feature.title === "AGNOSTIC" ? "lg:hidden" : "block"}>
            <div
              className={`flex h-20  items-center justify-center flex-shrink-0 ${feature.fileClass}`}
            >
              <Suspense>
                {/* <DotLottieReact
                  src="https://lottie.host/b3cf4a6f-46b6-4f97-8ae8-ad1c443ebb47/TCWo5kwAoj.lottie"
                  loop
                  autoplay
                /> */}
                <LottieWeb src={feature.file} />
              </Suspense>
            </div>
          </div>
        </CardHeader>
      </Card>

      <p className="text-sm text-[#607A94] leading-relaxed mx-6 mr-20 hidden md:block">
        {feature.description}
      </p>
    </div>
  );
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <div className="w-full">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full hidden lg:flex xl:gap-14  gap-4">
          {features.map((feature, index) => (
            <div key={index} className=" basis-1/3">
              {mainCard(feature)}
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-11/12 mx-auto lg:hidden"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          onTouchStart={plugin.current.stop} // 👈 Stops on mobile touch
          onTouchEnd={plugin.current.reset}
        >
          <CarouselContent className="">
            {features.map((feature, index) => (
              <CarouselItem key={index} className=" basis-full ">
                {mainCard(feature)}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}
