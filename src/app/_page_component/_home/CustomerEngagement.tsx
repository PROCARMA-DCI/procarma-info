import { LottieWeb } from "@/components/Animation/lottie-web";
import animationData from "@/utils/animation/customer-engagement.json";
import { Suspense } from "react";

export const CustomerEngagement = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-muted-foreground tracking-wide">
          CUSTOMER ENGAGEMENT
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-8 flex justify-center lg:justify-start">
          <div className="w-full bg-white rounded-lg p-2 scale-105">
            <Suspense>
              <LottieWeb animationData={animationData} />
            </Suspense>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-8">
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
      </div>
    </section>
  );
};
