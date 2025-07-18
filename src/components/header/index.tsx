"use client";
import React from "react";
import { Button } from "../ui/button";
import ToggleTheme from "../toggleTheme";
import Image from "next/image";
import { BookingModal } from "@/common/BookingModal";
const Header = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="w-36 md:w-52">
          <Image
            src="/images/procarma-logo.svg"
            height={1000}
            width={1000}
            alt="logo"
          />
        </div>

        <div className="flex items-center gap-2">
          <BookingModal />
          {/* <ToggleTheme /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
