// "use client";

import { auth } from "@/auth";
import Features from "./Features";
import { HeroSection } from "./HeroSection";

export default async function LandingPage() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
}
