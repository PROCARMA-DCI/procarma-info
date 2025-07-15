import { LottieWeb } from "@/components/Animation/lottie-web";
import { Paragraph } from "@/components/typography/Typography";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center ">
        <Paragraph className="md:text-5xl px-2 text-3xl font-light tracking-wide">
          LIFE CYCLE MANAGEMENT
        </Paragraph>
      </div>

      <Suspense>
        <LottieWeb src={"/json/third-new.json"} />
      </Suspense>
    </section>
  );
};

export default LifeCycleManagement;
