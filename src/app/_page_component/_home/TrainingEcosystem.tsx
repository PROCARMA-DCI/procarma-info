import { LottieWeb } from "@/components/Animation/lottie-web";
// import animationData from "@/utils/animation/trainingecosystem.json";

import { Suspense } from "react";

export const TrainingEcosystem = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-8">
        <h2 className="md:text-5xl text-3xl px-2  font-light text-muted-foreground tracking-wide">
          PRODUCT / TRAINING ECOSYSTEM
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mx-4 ">
        <div className="space-y-8 lg:col-span-4">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Products
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We partner with the best F&I product providers in the nation that
              are integrated with our customer life cycle and dealer ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Training
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Using the best talent and tools to keep your team shipshape and in
              Bristol fashion!
            </p>
          </div>
        </div>

        <div className="w-full lg:col-span-8 flex justify-center lg:justify-end">
          <div className="w-full rounded-lg p-2 -mt-30 ">
            <Suspense>
              <LottieWeb src={"/json/second-new.json"} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};
