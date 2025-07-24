import { LottieWeb } from "@/components/Animation/lottie-web";
import { Paragraph, Title } from "@/components/typography/Typography";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center z-10 relative">
        <Title>LIFE CYCLE MANAGEMENT</Title>
      </div>
      <div className="-mt-32 ">
        <Suspense>
          <LottieWeb src={"/json/lifecycle.json"} />
        </Suspense>
      </div>
    </section>
  );
};

export default LifeCycleManagement;
