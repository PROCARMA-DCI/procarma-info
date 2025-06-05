import React, { Suspense } from "react";
import Header from "@/components/header";
import { FeatureShowcase } from "./_page_component/_home/feature_showcase";
import { TrainingEcosystem } from "./_page_component/_home/TrainingEcosystem";
// import LifeCycleManagement from "./_page_component/_home/LifeCycleManagement";
import { CustomerEngagement } from "./_page_component/_home/CustomerEngagement";
import OnePlatform from "./_page_component/_home/OnePlatform";
import { CustomerRetained } from "./_page_component/_home/CustomerRetained";
import { Wrapper } from "@/components/Layout";
const page = () => {
  return (
    <div>
      <Wrapper>
        <Suspense>
          <Header />
        </Suspense>
      </Wrapper>
      <div className="mt-10 flex flex-col gap-16">
        <Wrapper>
          <FeatureShowcase />
        </Wrapper>
        <CustomerRetained />
        <Wrapper>
          <TrainingEcosystem />
          {/* <Suspense>
          <LifeCycleManagement />
        </Suspense> */}
          <CustomerEngagement />
        </Wrapper>
        <OnePlatform />
      </div>
    </div>
  );
};

export default page;
