import { cn } from "@/lib/utils";
import { ClassNameType } from "@/utils/types";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" mx-auto mt-4">{children}</div>;
};

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameType;
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-[1900px] mx-auto  px-2 lg:px-10 [@media(min-width:1500px)]:px-[120px]",
        className
      )}
    >
      {children}
    </div>
  );
};
