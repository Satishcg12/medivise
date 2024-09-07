"use client";
import AiPrompt from "./aiPrompt";
import DoctorCard from "./DoctorCard";
import PageTitle from "@/components/PageTitle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { doctorCategories } from "./DoctorCard";

export default function DoctorPage() {
  return (
    <section className="flex gap-6">
      <AiPrompt />
      <section className="space-y-6 flex-grow">
        <PageTitle title="Doctors">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Specialization" />
            </SelectTrigger>
            <SelectContent>
              {doctorCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </PageTitle>
        <div className="ml-auto grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
          {Array.from({ length: 9 }).map((_, index) => (
            <DoctorCard />
          ))}
        </div>
      </section>
    </section>
  );
}
