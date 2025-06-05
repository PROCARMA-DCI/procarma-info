import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" mx-auto mt-4">{children}</div>;
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className=" mx-auto max-w-6xl">{children}</div>;
};
