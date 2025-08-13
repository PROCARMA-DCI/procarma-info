"use client";
import { useEffect, useState } from "react";

import { LottieWeb } from "@/components/Animation/lottie-web";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      <div className="flex flex-col">
        {/* <div className=" mt-2">
          <LottieWeb src={item.src} />
        </div> */}
        <div
          className={`border p-2 py-4 rounded-lg bg-white transition-all duration-500 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >
          <div className="w-full flex items-start justify-between gap-4 px-2 h-20 ">
            <div className=" font-semibold text-xs text-foreground w-1/3 h-20 ">
              <div className="flex flex-col h-full justify-between ">
                <span className="text-[0.9em] truncate font-bold">
                  {item.label}
                </span>
                <span className="text-[23px] font-bold">{item.value} MI</span>
                <span className="text-primary text-[0.9em]">
                  {item.value_sub}
                </span>
              </div>
            </div>

            <div className=" font-bold text-[0.7em] text-foreground w-1/3 h-20">
              <span className="flex flex-col h-20 ">
                {item.point.map((item: any, index: number) => (
                  <span key={index}>{item}</span>
                ))}
              </span>
            </div>

            <div className="  text-foreground w-1/3 text-[0.7em] h-20 ">
              <div className="flex flex-col justify-between h-full">
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

      <div className=" lg:p-4">
        {/* Dashboard Layout */}
        <div className="grid grid-cols-1  items-center  ">
          {/* long screen */}
          <div className="  hidden lg:flex justify-center lg:justify-start">
            <div className="w-full  rounded-lg p-2 hidden lg:block">
              <LottieWeb src="/json/customer_retained.json" />
            </div>
          </div>

          {/* mobile */}
          <div className="lg:hidden w-full ">
            <LottieWeb src="/mobile_animation/3inone_opt.json" />

            <div className=" ">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
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
