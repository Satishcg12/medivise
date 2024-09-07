import Link from "next/link";
import { Package2 } from "lucide-react";
import { DesktopNavBar } from "./DesktopNavBar";
import MobileNavSheet from "./MobileNavSheet";
import { ModeToggle } from "./mode-toggle";
import { UserDropdown } from "./UserDropdown";
import { Logo } from "../Logo";
import LoginAndRegister from "@/app/user/LoginAndRegister";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 flex items-center justify-between gap-4 px-4 md:px-6
     lg:px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Logo />
      <DesktopNavBar />

      <div className="flex items-center gap-4 md:gap-2 lg:gap-4">
        <ModeToggle />
        <LoginAndRegister />
        <UserDropdown />
        <MobileNavSheet />
      </div>
    </header>
  );
}
