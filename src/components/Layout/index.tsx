import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl mx-auto mt-4">{children}</div>;
};

export default Layout;
