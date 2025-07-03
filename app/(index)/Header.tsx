import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
const Header = () => {
  return (
    <motion.header
      className="bg-background border-b border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <h1 className="text-2xl font-bold text-foreground">
                PRO<span className="text-cyan-500">CARMA</span>
              </h1> */}
            <Image
              src="/procarma-logo.png"
              alt="PROCARMA Logo"
              width={200}
              height={50}
            />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-siteBlueColor hover:bg-siteBlueColor/80 text-white px-6 py-2 rounded-md">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
