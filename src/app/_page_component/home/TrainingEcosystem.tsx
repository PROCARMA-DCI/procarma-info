import { LottieWeb } from "@/components/Animation/lottie-web";
// import animationData from "@/utils/animation/trainingecosystem.json";

import { Suspense } from "react";
import { Heading, Paragraph } from "@/components/typography/Typography";
export const TrainingEcosystem = () => {
  return (
    <section className="w-full z-0">
      <div className="text-center mb-18">
        <Paragraph className=" md:text-5xl text-3xl px-2  font-extralight  tracking-wide">
          PRODUCT / TRAINING ECOSYSTEM
        </Paragraph>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center  h-[600px]">
        <div className="w-full lg:max-w-[20%] h-full flex flex-col justify-around  z-10  ">
          <div className="space-y-4">
            <Heading className="text-2xl md:text-4xl font-bold ">
              Products
            </Heading>
            <Paragraph className=" text-xl">
              We partner with the best F&I product providers in the nation that
              are integrated with our customer life cycle and dealer ecosystem.
            </Paragraph>
          </div>

          <div className="space-y-4">
            <Heading className="text-2xl md:text-4xl font-bold">
              Training
            </Heading>
            <Paragraph className="text-xl ">
              Using the best talent and tools to keep your team shipshape and in
              Bristol fashion!
            </Paragraph>
          </div>
        </div>

        <div className="lg:max-w-[60%] flex-1   rounded-lg lg:col-span-10 overflow-hidden  flex items-center justify-center">
          <div className=" origin-center ">
            <Suspense>
              <LottieWeb src={"/json/training.json"} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
