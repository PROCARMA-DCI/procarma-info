import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" mx-auto mt-4">{children}</div>;
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-6xl mx-auto  px-2">{children}</div>;
};
