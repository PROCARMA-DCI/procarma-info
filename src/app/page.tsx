import React from "react";
import Header from "@/components/header";
import { FeatureShowcase } from "./_page_component/_home/feature_showcase";
import { TrainingEcosystem } from "./_page_component/_home/TrainingEcosystem";
import LifeCycleManagement from "./_page_component/_home/LifeCycleManagement";
import { CustomerEngagement } from "./_page_component/_home/CustomerEngagement";
import OnePlatform from "./_page_component/_home/OnePlatform";
import { CustomerRetained } from "./_page_component/_home/CustomerRetained";
import { Wrapper } from "@/components/Layout";
import Carousel from "./_page_component/_home/Carousel";
import { EvolveRetention } from "./_page_component/_home/EvolveRetention";
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const page = () => {
  return (
    <div className=" bg-background transition-colors">
      <Wrapper>
        <Header />
      </Wrapper>
      <div className="mt-10 flex flex-col gap-y-16">
        <Wrapper>
          <FeatureShowcase containerVariants={containerVariants} />
        </Wrapper>
        <CustomerRetained />
        <Wrapper>
          <div className="flex flex-col gap-y-16">
            <TrainingEcosystem />

            <LifeCycleManagement />

            <CustomerEngagement />
            <OnePlatform />
            <Carousel
              itemVariants={itemVariants}
              sectionVariants={sectionVariants}
            />
            <EvolveRetention />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default page;
