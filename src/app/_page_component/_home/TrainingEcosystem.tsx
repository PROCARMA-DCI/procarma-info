import { LottieWeb } from "@/components/Animation/lottie-web";
// import animationData from "@/utils/animation/trainingecosystem.json";

import { Suspense } from "react";
import { Heading, Paragraph } from "@/components/typography/Typography";
export const TrainingEcosystem = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <Paragraph className="md:text-5xl text-3xl px-2  font-light  tracking-wide">
          PRODUCT / TRAINING ECOSYSTEM
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 justify-center items-center -mt-52  ">
        <div className="space-y-8 lg:col-span-3">
          <div className="space-y-4">
            <Heading className="text-2xl md:text-3xl font-bold ">
              Products
            </Heading>
            <Paragraph className=" leading-relaxed">
              We partner with the best F&I product providers in the nation that
              are integrated with our customer life cycle and dealer ecosystem.
            </Paragraph>
          </div>

          <div className="space-y-4">
            <Heading className="text-2xl md:text-3xl font-bold">
              Training
            </Heading>
            <Paragraph className=" leading-relaxed">
              Using the best talent and tools to keep your team shipshape and in
              Bristol fashion!
            </Paragraph>
          </div>
        </div>

        <div className="w-full lg:col-span-9 flex justify-center lg:justify-end">
          <div className="w-full rounded-lg ">
            <Suspense>
              <LottieWeb src={"/json/second-new.json"} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
