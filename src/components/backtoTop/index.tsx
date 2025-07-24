"use client";

import useGetWindow from "@/customHooks/useGetWindow";
import { ArrowUpFromDot } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";

const BackToTop = () => {
  const { scrollY, height, clientWindow } = useGetWindow(["scroll"]);

  const showArrowTop = scrollY > height ? true : false;
  const handleClick = () => {
    clientWindow?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Avatar
      onClick={handleClick}
      title="Scroll to top"
      className={`${
        showArrowTop
          ? "fixed bottom-4 right-4 z-50 opacity-60 h-10 w-10  text-white shadow-lg rounded-full cursor-pointer transition-all duration-300 hover:opacity-100 hover:ring-2 hover:ring-primary/30"
          : "hidden"
      }`}
    >
      <AvatarFallback className="flex items-center justify-center bg-primary">
        <ArrowUpFromDot className="w-5 h-5" />
      </AvatarFallback>
    </Avatar>
  );
};

export default BackToTop;
