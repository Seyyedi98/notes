import { auth } from "@/app/_lib/auth";
import { getCurrentSession } from "@/app/_lib/getCurrentUser";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import React from "react";

const LandingNavbar = async () => {
  const session = await getCurrentSession();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-4">
        {session ? (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Link href="/dashboard">
              <Avatar>
                <AvatarImage
                  className="w-8 rounded-full "
                  src={session?.image}
                />
                <AvatarFallback>{session?.name}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        ) : (
          <>
            <Button variant="ghost" size="default" asChild>
              <Link href="/signin">Sign in</Link>
            </Button>
            <Button variant="default" size="default" asChild>
              <Link href="/signin">Get Notes Free</Link>
            </Button>
          </>
        )}

        <ModeToggle />
      </div>
    </div>
  );
};

export default LandingNavbar;
