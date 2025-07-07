"use client";
import { motion } from "framer-motion";
import { LottieWeb } from "@/components/Animation/lottie-web";
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
import { Suspense } from "react";

export function FeatureShowcase({ containerVariants }: any) {
  const features = [
    {
      title: "ALLCM",
      subtitle: "AI Agent Life Cycle Management",
      description:
        "AI Agents analyze each customer's life cycle and enhances their life time transactional and experiential value.",
      file: "/json/AI.json",
    },
    {
      title: "CONNECTED",
      subtitle: "Dealer Branded App Ecosystem",
      description:
        "Dealer / Customer centric approach to product visibility and engagement touch points.",
      file: "/json/connected.json",
    },
    {
      title: "AGNOSTIC",
      subtitle: "Open platform architecture - no gateway fees",
      description:
        "Partnered with top tier administrators and agencies nationwide to display your information across our platform.",
      file: "/json/connected.json",
    },
  ];

  return (
    <div className="w-full">
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="md:pl-4 basis-full md:basis-1/3"
              >
                <div className="w-full flex flex-col gap-4 ">
                  <Card className="border-none inset-shadow-sm   w-full transition-all duration-200 hover:shadow-lg h-20 p-0 flex justify-center">
                    <CardHeader className="flex justify-between items-center">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {feature.title}
                        <CardDescription className="text-xs font-medium text-muted-foreground">
                          {feature.subtitle}
                        </CardDescription>
                      </CardTitle>
                      <div className="flex items-center justify-center flex-shrink-0">
                        <Suspense>
                          <LottieWeb src={feature.file} />
                        </Suspense>
                      </div>
                    </CardHeader>
                  </Card>

                  <p className="text-sm text-muted-foreground leading-relaxed mx-4 hidden md:block">
                    {feature.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );
}
