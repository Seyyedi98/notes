import Spinner from "@/components/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="w-full h-full">
      <Spinner width="10" height="10" />
    </div>
  );
};

export default loading;
