import { LottieWeb } from "@/components/Animation/lottie-web";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="md:text-5xl text-3xl font-light text-muted-foreground tracking-wide">
          LIFE CYCLE MANAGEMENT
        </h2>
      </div>

      <Suspense>
        <LottieWeb src={"/json/third-new.json"} />
      </Suspense>
    </section>
  );
};

export default LifeCycleManagement;
