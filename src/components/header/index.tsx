"use client";
import React from "react";
import { Button } from "../ui/button";
import ToggleTheme from "../toggleTheme";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between mt-[70px]">
      <div className=" w-40">
        <Image
          src="/images/procarma-logo.png"
          height={500}
          width={500}
          alt="logo"
        />
      </div>

      {/* <div className="flex items-center gap-2">
        <Button className="text-primary-foreground">Schedule a Demo</Button>
        <ToggleTheme />
      </div> */}
    </div>
  );
};

export default Header;
