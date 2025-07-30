import { LottieWeb } from "@/components/Animation/lottie-web";
import { Paragraph, Title } from "@/components/typography/Typography";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React, { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center z-10 relative  mb-20">
        <Title>LIFE CYCLE MANAGEMENT</Title>
      </div>
      <div className="  ">
        <Suspense>
          <DotLottieReact src="lottie/lifecycle.lottie" loop autoplay />
          {/* <LottieWeb src={"/json/lifecycle.json"} /> */}
        </Suspense>
      </div>
    </section>
  );
};

export default LifeCycleManagement;
