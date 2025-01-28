import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/user";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, DropletIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Header = async () => {
  const user = await checkUser();

  const current_user = await currentUser();

  return (
    <div className="w-full px-10 flex items-center justify-between shadow-md">
      <Image src="/logo.png" height={100} width={100} alt="logo" />
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        {current_user !== null ? (
          <div className="flex items-center gap-2">
            <DropletIcon className="h-4 w-4" />
            <SignOutButton
              redirectUrl="/dashboard"
              component="div" 
            >
              <Button>Sign Out</Button>
            </SignOutButton>
          </div>
        ) : (
          <Link href="/login">
            <Button className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
