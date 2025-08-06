
import { Title } from "@/components/typography/Typography";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Suspense } from "react";

const LifeCycleManagement = () => {
  return (
    <section className="w-full">
      <div className="text-center z-10 relative  mb-20">
        <Title>LIFE CYCLE MANAGEMENT</Title>
      </div>
      <div className="  ">
        <Suspense>
          <DotLottieReact src="lottie/lifecycle.lottie" loop autoplay />
          
        </Suspense>
      </div>
    </section>
  );
};

export default LifeCycleManagement;
