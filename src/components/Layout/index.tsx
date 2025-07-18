import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className=" mx-auto mt-4">{children}</div>;
};

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1900px] mx-auto  px-2 xl:px-10 [@media(min-width:1500px)]:px-[120px]">
      {children}
    </div>
  );
};
