// "use client";
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
import { useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { Bird, Rabbit, Sparkles, Turtle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiPromptSchema } from "@/schema/aiPrompt";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// export default function DoctorPage() {
//   const [selectedCategorys, setSelectedCategorys] = useState<string[]>([]);
//   const [suggest, setSuggest] = useState<string>("");
//   const [query, setQuery] = useState<string>("");
//   const searchParams = useSearchParams()
//   const fetchData = async () => {
//     try {
//       if (query) {
//         setSuggest(query)
//       }
//       // post request to the api
//       const response = await fetch("/api/suggest", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           prompt: "I have a headache",
//           model: "gemini",
//         }),
//       });
//       const data = await response.json();
//       console.log(data.data );
//     } catch (error) {
//       console.error("Error fetching doctors: ", error);
//     }
//   }
//   useEffect(() => {
//     setQuery(searchParams.get("query") || "")
//     if (query) {
//       fetchData();
//     }
//   }, []);
//   return (
//
//   );
// }

export default async function DoctorPage({searchParams = {}}) {
  const params = new URLSearchParams(searchParams);
  const prompt = params.get("prompt") || "";
  if (!prompt) {
    redirect("/404");
  }

  let data = await fetch("http://localhost:3000/api/suggest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: prompt,
    }),
  });
  let response = await data.json();
  const categoryies = response.data.categories;
  const suggestion = response.data.suggestion;

  console.log(categoryies);
  console.log(suggestion);

  let allDoctors: any[] = [];
  for (const category of categoryies) {
    let doctors = await fetch("http://localhost:3000/api/doctorDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        specializations: category.category_name,
      }),
    });
    let response = await doctors.json();
    allDoctors = [...allDoctors, ...response.data];
  }

  console.log(allDoctors);

  return (
    <section className="flex gap-6">
      <div className="hidden md:flex md:w-[24rem] shrink-0 sticky top-20 h-fit">
        <form
          method="get"
          className="space-y-3.5 flex flex-col flex-1 border rounded-xl p-3 shadow-md"
        >
          <Badge className="absolute -top-2">AI Symptoms Analysis</Badge>

          <div>
            <Label htmlFor="model">Model</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gemini">Gemini</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3 flex-1 min-h-[50dvh]">
            <Sparkles className="size-5 text-primary shrink-0 animate-pulse" />
            <p className="pr-3 text-sm overflow-y-scroll max-h-[50dvh] text-justify">
              {suggestion ? suggestion : "Get AI suggestions here"}
            </p>
          </div>

          <div>
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Describe your symptoms..."
              name="prompt"
              className="resize-none"
            />
          </div>

          <Button type="submit" 
          className="ml-auto gap-2">
            <Sparkles className="size-4" />
            Analyze Symptoms
          </Button>
        </form>
      </div>{" "}
      <section className="space-y-6 flex-grow">
        
       
            <DoctorCard
             data={categoryies}
             />
      </section>
    </section>
  );
}
