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
import ScrollWrapper from "./_page_component/home/ScrollWrapper";
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
      <div className=" bg-[#f5f5f5] transition-colors">
        <SpinnerCenterScreen loading={loading} />
        <Wrapper>
          <div className="my-10 flex flex-col gap-y-16">
            <section
              id="first-screen"
              className="scroll-snap-section min-h-screen w-full flex flex-col gap-y-16"
            >
              <Header />
              <FeatureShowcase containerVariants={containerVariants} />
              <CustomerRetained />
            </section>
            {!loading && (
              <>
                <section
                  id="training-ecosystem"
                  className="scroll-snap-section min-h-screen w-full pt-20"
                >
                  <TrainingEcosystem />
                </section>
                <Partnered containerVariants={containerVariants} />
                <section
                  id="lifecycle-management"
                  className="scroll-snap-section min-h-screen w-full pt-10"
                >
                  <LifeCycleManagement />
                </section>
                <section
                  id="customer-engagement"
                  className="scroll-snap-section min-h-screen w-full pt-10"
                >
                  <CustomerEngagement />
                </section>
                <section
                  id="one-platform"
                  className="scroll-snap-section min-h-screen w-full pt-10"
                >
                  <OnePlatform />
                </section>
                <section
                  id="carousel-section"
                  className="scroll-snap-section w-full pt-10"
                >
                  <Carousel
                    itemVariants={itemVariants}
                    sectionVariants={sectionVariants}
                  />
                </section>
                <section
                  id="evolve-retention"
                  className="scroll-snap-section w-full"
                >
                  <EvolveRetention />
                </section>
                {/* Copyright - Centered */}
                <div className="flex-1 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    © {new Date().getFullYear()} PROCARMA. All rights reserved.
                  </p>
                </div>
              </>
            )}
          </div>
        </Wrapper>
      </div>
    </ScrollWrapper>
  );
};

export default Page;
