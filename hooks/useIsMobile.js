"use client";

import { useMediaQuery } from "@uidotdev/usehooks";

const UseIsMobile = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile;
};

export default UseIsMobile;
