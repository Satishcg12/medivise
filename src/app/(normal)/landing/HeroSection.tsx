"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ArrowRight } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import {  useState } from "react";


export const HeroSection = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const sendToPage = (msg: string) => {
    
    const url = `/doctor?query=${msg}`;
    router.push(url);
  }

  return (
    <section className="relative space-y-4 flex flex-col items-center justify-center mx-auto h-[80dvh] w-full md:max-w-screen-md">
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center w-full bg-clip-text text-transparent bg-gradient-to-b from-muted-foreground/60 via-foreground to-muted-foreground/60 bg-opacity-50">
          Get professional consultation <br /> from the best doctors.
        </h2>
        <p className="max-lg:text-sm text-muted-foreground text-center">
          "Everyone gives advice, but not everyone’s an expert."
        </p>
      </div>

      <Textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Describe your symptoms or ask a question..."
        id="message"
        aria-label="Describe your symptoms or ask a question..."
        rows={4}
        className="resize-none w-full"
      />
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          3 free credits remaining
        </p>
        <Button onClick={() => sendToPage(message)} className="flex items-center">
          <Sparkles className="mr-2 h-4 w-4" />
          Find Doctors
        </Button>
      </div>
      <div className="space-y-2 flex flex-col w-full">
        <p className="text-sm text-muted-foreground">Try asking:</p>
        {[
          "I have a headache, what should I do?",
          "What are the symptoms of COVID-19?",
          "How do I know if I have a cold or the flu?",
        ].map((query, index) => (
          <Button key={index} variant="ghost" onClick={()=> sendToPage(query)} className="justify-start w-fit">
            <ArrowRight className="mr-2 h-4 w-4" />
            {query}
          </Button>
        ))}
      </div>
    </section>
  );
};
