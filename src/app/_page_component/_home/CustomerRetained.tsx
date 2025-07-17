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
      point: ["GPS", "VSC", "LOYALTY", "GAP"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
    },
    {
      id: 2,
      value: "79,365",
      label: "TOYOTA TUNDRA 2022",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
    },
    {
      id: 3,
      value: "8,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY", "GAP"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
    },
    {
      id: 4,
      value: "2,330",
      label: "CHEVY TAHOE 2020",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
    },
    {
      id: 5,
      value: "86,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY", "GAP"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
    },
    {
      id: 6,
      value: "1,985",
      label: "CHEVY SILVERADO 2022",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "100,000mi",
      status2: "TRADE OPS",
      status_sub2: "3 MONTHS",
    },
    {
      id: 7,
      value: "8,156",
      label: "POLICY RENEWED 2023",
      value_sub: "OEM WARRANTY",
      point: ["GPS", "VSC", "LOYALTY", "GAP"],
      category: "MAINTENANCE",
      status: "SCHEDULED MAINT",
      status_sub: "60,000mi",
      status2: "TRADE OPS",
      status_sub2: "6 MONTHS",
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
      <div
        className={`border p-1 rounded-lg transition-all duration-500 hover:shadow-md ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        <div className="flex items-start justify-between">
          <div className=" font-semibold text-xs text-foreground w-32">
            <div className="flex flex-col gap-[1px]">
              <span className="text-[0.8em]">{item.label}</span>
              <span className="text-lg">{item.value}</span>
              <span className="text-primary text-[0.8em]">
                {item.value_sub}
              </span>
            </div>
          </div>

          <div className=" font-semibold text-xs text-foreground w-32">
            <div className="flex flex-col gap-1">
              <span>{item.category}</span>
              <span className="flex flex-wrap ">
                {item.point.map((item: any, index: number) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-[0.8em] ms-1"
                  >
                    {" "}
                    {item}
                  </Badge>
                ))}
              </span>
            </div>
          </div>

          <div className="font-semibold text-xs text-foreground w-32">
            <div className="flex flex-col gap-[1px]">
              <div className="flex flex-col">
                <span className="whitespace-nowrap">{item.status}</span>
                <span className="text-muted-foreground text-[0.8em]">
                  {item.status_sub}
                </span>
              </div>
              <div className="flex flex-col">
                <span>{item.status2}</span>
                <span className="text-muted-foreground text-[0.8em]">
                  {item.status_sub2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <section className="w-full ">
      {/* Header */}

      <div className="bg-card p-4">
        {/* Dashboard Layout */}
        <div className="grid grid-cols-1  items-center  ">
          {/* Left Side - Static Image/Animation */}
          <div className="   flex justify-center lg:justify-start">
            <div className="w-full  rounded-lg p-2">
              <LottieWeb src="/json/customer_retained.json" />
            </div>
          </div>

          {/* Right Side - Live Activity Data */}
          {/* <div className="space-y-2 col-span-12 lg:col-span-5">
              <div className="flex items-center justify-between ">
                <h3 className="text-lg font-semibold text-foreground">
                  LIVE ACTIVITY
                </h3>
                <Badge variant="outline" className="text-xs">
                  REAL-TIME
                </Badge>
              </div>

              <div className="hidden lg:block space-y-1">
                {dashboardData.liveActivity.map((item, index) => (
                  <LiveActivity key={index} index={index} item={item} />
                ))}
              </div>
              <div className="lg:hidden">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                  plugins={[plugin.current]}
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                  onTouchStart={plugin.current.stop} // 👈 Stops on mobile touch
                  onTouchEnd={plugin.current.reset}
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
            </div> */}
        </div>
      </div>

      {/* <div className="w-full h-20">
        <LottieWeb src="/json/mouse.json" />
      </div> */}
    </section>
  );
};
