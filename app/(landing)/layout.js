import React from "react";
import LandingNavbar from "./_components/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <LandingNavbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default LandingLayout;
