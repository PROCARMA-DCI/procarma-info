import { LottieWeb } from "@/components/Animation/lottie-web";
import { Paragraph } from "@/components/typography/Typography";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full z-10">
      <div className="text-center ">
        <Paragraph className="md:text-5xl px-2 text-3xl font-light tracking-wide">
          LIFE CYCLE MANAGEMENT
        </Paragraph>
      </div>
      <div className="">
        <Suspense>
          <LottieWeb src={"/json/lifecycle.json"} />
        </Suspense>
      </div>
    </section>
  );
};

export default LifeCycleManagement;
