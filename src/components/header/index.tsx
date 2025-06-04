"use client";
import React from "react";
import { Button } from "../ui/button";
import ToggleTheme from "../toggleTheme";
const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-semibold">
        <span className="text-[#0E5B76]">PRO</span>
        <span className="text-[#00AEEf]">CARMA</span>
      </h1>
      <div className="flex items-center gap-2">
        <Button className="text-primary-foreground">Schedule a Demo</Button>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
