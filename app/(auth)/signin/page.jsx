import React from "react";
import SignInButton from "../_components/SignInButton";

const SignIn = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-10 mt-10 items-center justify-center h-full">
        <h2 className="text-3xl font-semibold">Sign in to access your Notes</h2>

        <SignInButton />
      </div>
    </div>
  );
};

export default SignIn;
