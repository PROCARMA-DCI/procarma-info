"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import { FeatureShowcase } from "./_page_component/home/feature_showcase";
import { TrainingEcosystem } from "./_page_component/home/TrainingEcosystem";
import LifeCycleManagement from "./_page_component/home/LifeCycleManagement";
import { CustomerEngagement } from "./_page_component/home/CustomerEngagement";
import OnePlatform from "./_page_component/home/OnePlatform";
import { CustomerRetained } from "./_page_component/home/CustomerRetained";
import { Wrapper } from "@/components/Layout";
import Carousel from "./_page_component/home/Carousel";
import { EvolveRetention } from "./_page_component/home/EvolveRetention";
import SpinnerCenterScreen from "@/components/loader/SpinnerCenterScreen";
import Partnered from "./_page_component/home/Partnered";
import ScrollWrapper, {
  ScrollIndicator,
} from "./_page_component/home/ScrollWrapper";
import { FadeIn } from "@/components/motionAnimation/FadeIn";
import BackToTop from "@/components/backtoTop";
import ScrollBottomIndicator from "@/components/scrollBottomIndicator";
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
const Page = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <ScrollWrapper loading={loading}>
      <BackToTop />
      {/* <ScrollBottomIndicator /> */}
      <div className=" bg-[#f5f5f5] transition-colors">
        <SpinnerCenterScreen loading={loading} />
        <Wrapper>
          <div className=" flex flex-col lg:gap-y-16 gap-y-14">
            <section
              id="first-screen"
              className="scroll-snap-section min-h-screen w-full flex flex-col lg:gap-y-16  lg:pt-8 pt-4"
            >
              <Header />
              <div className="mt-5 lg:mt-0">
                <FeatureShowcase containerVariants={containerVariants} />
              </div>
              <CustomerRetained />
            </section>
            {!loading && (
              <>
                <section
                  id="training-ecosystem"
                  className="scroll-snap-section w-full lg:pt-6 "
                >
                  <FadeIn>
                    <TrainingEcosystem />
                  </FadeIn>
                </section>
                <section className="lg:pt-20 z-20">
                  <Partnered containerVariants={containerVariants} />
                </section>
                <section
                  id="lifecycle-management"
                  className="scroll-snap-section  w-full lg:pt-12 hidden lg:block"
                >
                  <LifeCycleManagement />
                </section>
                <section
                  id="customer-engagement"
                  className="scroll-snap-section w-full lg:pt-6"
                >
                  <FadeIn from="right">
                    <CustomerEngagement />
                  </FadeIn>
                </section>
                <section
                  id="one-platform"
                  className="scroll-snap-section  w-full lg:pt-6 lg:mb-[200px] mb-[120px]"
                >
                  <OnePlatform />
                </section>
                <section
                  id="carousel-section"
                  className="scroll-snap-section w-full lg:pt-6"
                >
                  <Carousel
                    itemVariants={itemVariants}
                    sectionVariants={sectionVariants}
                  />
                </section>
              </>
            )}
          </div>
        </Wrapper>
        {!loading && (
          <div className=" flex flex-col lg:gap-y-16 gap-y-8  mt-4 lg:mt-16">
            <section
              id="evolve-retention"
              className="lg:scroll-snap-section w-full  "
            >
              <EvolveRetention />
            </section>

            {/* Copyright - Centered */}

            <div className="flex-1 text-center pb-4 ">
              <p className="text-gray-600 lg:text-sm text-xs">
                © {new Date().getFullYear()} PROCARMA. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </div>
    </ScrollWrapper>
  );
};

export default Page;
