"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = ({ isAuthenticated }) => {
  const isLoading = false;

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-12">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">Notion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl">
        Notion is the connected workspace where <br />
        btter, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button size="lg" asChild>
          <Link href="/dashboard">
            Enter Notes
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <Button size="lg" asChild>
          <Link href="/signin">
            Get Notes Free <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Heading;
