import { LottieWeb } from "@/components/Animation/lottie-web";
import React, { Suspense } from "react";
import animationData from "@/utils/animation/lifeCycleManagement.json";

const LifeCycleManagement = () => {
  return (
    <Suspense>
      <LottieWeb animationData={animationData} />
    </Suspense>
  );
};

export default LifeCycleManagement;
