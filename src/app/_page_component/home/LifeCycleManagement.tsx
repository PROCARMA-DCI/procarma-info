import { LottieWeb } from "@/components/Animation/lottie-web";
import { Title } from "@/components/typography/Typography";
import { Suspense } from "react";
const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center z-10 relative  mb-20">
        <Title>LIFE CYCLE MANAGEMENT</Title>
      </div>
      <div className="  ">
        <Suspense fallback={<div>Loading animation...</div>}>
          <LottieWeb src={"/json/lifecycle.json"} />
        </Suspense>
      </div>
    </section>
  );
};

export default LifeCycleManagement;
