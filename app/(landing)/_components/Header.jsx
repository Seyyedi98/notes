import React from "react";

const LandingHeader = ({ children }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default LandingHeader;
