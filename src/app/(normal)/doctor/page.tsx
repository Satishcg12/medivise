"use client";
import AiPrompt from "./aiPrompt";
import DoctorCard from "./DoctorCard";

export default function DoctorPage() {
  return (
<section className="flex gap-6">
  <AiPrompt />
  <DoctorCard />
</section>

  );
}
