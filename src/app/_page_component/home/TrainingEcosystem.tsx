import { LottieWeb } from "@/components/Animation/lottie-web";
// import animationData from "@/utils/animation/trainingecosystem.json";

import { Suspense } from "react";
import { Heading, Paragraph } from "@/components/typography/Typography";
export const TrainingEcosystem = () => {
  return (
    <section className="w-full z-0">
      <div className="text-center lg:mb-18 mb-10">
        <Paragraph className=" md:text-5xl text-3xl px-2  font-extralight  tracking-wide">
          PRODUCT / TRAINING ECOSYSTEM
        </Paragraph>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center  lg:h-[600px]">
        <div className="w-full lg:max-w-[20%] h-full lg:flex flex-col justify-around  z-10 hidden ">
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

        <div className="lg:max-w-[70%] w-full flex-1 relative  rounded-lg lg:col-span-10 overflow-hidden  flex items-center justify-center">
          <div className=" origin-center ">
            <Suspense>
              <div>
                <LottieWeb src={"/json/training.json"} />
              </div>
            </Suspense>
          </div>
          <div className="absolute  lg:hidden block bottom-0 w-[80%] m-auto">
            <div className="space-y-4">
              <Heading className="text-xl md:text-4xl font-bold text-primary">
                Products
              </Heading>
              <Paragraph className=" text-sm md:text-xl">
                We partner with the best F&I product providers in the nation
                that are integrated with our customer life cycle and dealer
                ecosystem.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
