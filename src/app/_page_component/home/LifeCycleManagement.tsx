import { LottieWeb } from "@/components/Animation/lottie-web";
import { Paragraph, Title } from "@/components/typography/Typography";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full z-10">
      <div className="text-center ">
        <Title>LIFE CYCLE MANAGEMENT</Title>
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
