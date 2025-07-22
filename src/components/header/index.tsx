"use client";
import React from "react";
import { Button } from "../ui/button";
import ToggleTheme from "../toggleTheme";
import Image from "next/image";
import { BookingModal } from "@/common/BookingModal";
const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between   ">
        {/* Logo Container */}
        <div className="w-36 md:w-52 flex items-center ">
          <Image
            src="/images/procarma-logo.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Booking Button */}
        <div className="w-36 md:w-52 flex items-center">
          <BookingModal className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Header;
