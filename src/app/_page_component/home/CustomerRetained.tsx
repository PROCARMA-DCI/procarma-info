"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Badge } from "@/components/ui/badge";

import { LottieWeb } from "@/components/Animation/lottie-web";
import { Wrapper } from "@/components/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Mock data structure that would come from API
const mockDashboardData = {
  liveActivity: [
    {
      id: 1,
      value: "56,232",
      label: "FORD F150 2023",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY", "GAP"],

      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
      src: "/mobile_animations/bigdata/data.json",
    },
    {
      id: 2,
      value: "79,365",
      label: "TOYOTA TUNDRA 2022",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY"],

      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
      src: "/mobile_animations/genai/data.json",
    },
    {
      id: 3,
      value: "8,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY", "GAP"],
      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
      src: "/mobile_animations/tailored/data.json",
    },
    {
      id: 4,
      value: "2,330",
      label: "CHEVY TAHOE 2020",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY"],

      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
      src: "/mobile_animations/bigdata/data.json",
    },
    {
      id: 5,
      value: "86,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY", "GAP"],

      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
      src: "/mobile_animations/genai/data.json",
    },
    {
      id: 6,
      value: "1,985",
      label: "CHEVY SILVERADO 2022",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY"],

      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
      src: "/mobile_animations/tailored/data.json",
    },
    {
      id: 7,
      value: "8,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["MAINTENANCE", "GPS", "VSC", "LOYALTY", "GAP"],

      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
      src: "/mobile_animations/genai/data.json",
    },
  ],
};

export const CustomerRetained = () => {
  const [dashboardData, setDashboardData] = useState(mockDashboardData);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      // In real implementation, this would be an actual API call
      setTimeout(() => {
        setDashboardData(mockDashboardData);
        setIsVisible(true);
      }, 500);
    };

    fetchData();
  }, []);

  const LiveActivity = ({ index, item }: any) => {
    return (
      <div className="flex flex-col gap-1">
        <LottieWeb src={item.src} />
        <div
          className={`border p-2 rounded-lg bg-white transition-all duration-500 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className=" font-semibold text-xs text-foreground w-30">
              <div className="flex flex-col gap-[1px]">
                <span className="text-[0.8em]">{item.label}</span>
                <span className="text-lg">{item.value}</span>
                <span className="text-primary text-[0.8em]">
                  {item.value_sub}
                </span>
              </div>
            </div>

            <div className=" font-semibold text-[0.7em] text-foreground w-30">
              <span className="flex flex-col  ">
                {item.point.map((item: any, index: number) => (
                  <span key={index}>{item}</span>
                ))}
              </span>
            </div>

            <div className="  text-foreground w-30 text-[0.7em]">
              <div className="flex flex-col gap-[1px]">
                <div className="flex flex-col">
                  <span className="whitespace-nowrap">{item.status}</span>
                  <span className=" ">{item.status_sub}</span>
                </div>
                <div className="flex flex-col">
                  <span>{item.status2}</span>
                  <span className=" ">{item.status_sub2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full ">
      {/* Header */}

      <div className="bg-card lg:p-4">
        {/* Dashboard Layout */}
        <div className="grid grid-cols-1  items-center  ">
          {/* Left Side - Static Image/Animation */}
          <div className="   flex justify-center lg:justify-start">
            <div className="w-full  rounded-lg p-2 hidden lg:block">
              <LottieWeb src="/json/customer_retained.json" />
            </div>
            {/* <div className="w-full  rounded-lg  lg:hidden block">
              <LottieWeb src="/mobile_animations/bigdata/data.json" />
            </div> */}
          </div>

          {/* Right Side - Live Activity Data */}
          <div className="space-y-2 col-span-12 lg:col-span-5">
            {/* <div className="flex items-center justify-between ">
              <h3 className="text-lg font-semibold text-foreground">
                LIVE ACTIVITY
              </h3>
              <Badge variant="outline" className="text-xs">
                REAL-TIME
              </Badge>
            </div> */}

            {/* <div className="hidden lg:block space-y-1">
                {dashboardData.liveActivity.map((item, index) => (
                  <LiveActivity key={index} index={index} item={item} />
                ))}
              </div> */}
            <div className="lg:hidden ">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 8200,
                  }),
                ]}
              >
                <CarouselContent className="">
                  {dashboardData.liveActivity.map((item, index) => (
                    <CarouselItem key={index} className="md:pl-4 basis-full ">
                      <LiveActivity index={index} item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
