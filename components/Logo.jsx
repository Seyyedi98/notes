import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/app/_lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.svg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        height="40"
        width="40"
        alt="Logo"
        className="default:hidden"
      />
      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};

export default Logo;
