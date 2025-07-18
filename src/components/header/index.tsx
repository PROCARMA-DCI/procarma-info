"use client";
import React from "react";
import { Button } from "../ui/button";
import ToggleTheme from "../toggleTheme";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-52">
        <Image
          src="/images/procarma-logo.svg"
          height={1000}
          width={1000}
          alt="logo"
        />
      </div>

      <div className="flex items-center gap-2">
        <Button className="text-primary-foreground">Schedule a Demo</Button>
        {/* <ToggleTheme /> */}
      </div>
    </div>
  );
};

export default Header;
