"use client";

import { Bird, Rabbit, Sparkles, Turtle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiPromptSchema } from "@/schema/aiPrompt";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dispatch, SetStateAction } from "react";

export default function AiPrompt({ data }: { data: any }) {
  const form = useForm<z.infer<typeof AiPromptSchema>>({
    resolver: zodResolver(AiPromptSchema),
    defaultValues: {
      model: "gemini",
      prompt: "",
    },
  });

  function onSubmit(values: z.infer<typeof AiPromptSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="hidden md:flex md:w-[24rem] shrink-0 sticky top-20 h-fit">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3.5 flex flex-col flex-1 border rounded-xl p-3 shadow-md"
      >
        <Badge className="absolute -top-2">AI Symptoms Analysis</Badge>

        <div>
          <Label htmlFor="model">Model</Label>
          <Select
            onValueChange={form.setValue.bind(null, "model")}
            defaultValue={form.getValues("model")}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gemini">Gemini</SelectItem>
            </SelectContent>
          </Select>
          {form.formState.errors.model && (
            <p className="text-red-500">{form.formState.errors.model.message}</p>
          )}
        </div>

        <div className="flex items-start gap-3 flex-1">
          <Sparkles className="size-5 text-primary shrink-0 animate-pulse" />
          <p className="pr-3 text-sm overflow-y-scroll max-h-[50dvh] text-justify">
            {data?.suggest?.length > 0 ? data.suggest : "Get AI suggestions here"}
          </p>
        </div>

        <div>
          <Label htmlFor="prompt">Prompt</Label>
          <Textarea
            id="prompt"
            placeholder="Describe your symptoms..."
            {...form.register("prompt")}
            className="resize-none"
          />
          {form.formState.errors.prompt && (
            <p className="text-red-500">{form.formState.errors.prompt.message}</p>
          )}
        </div>

        <Button type="submit" className="ml-auto gap-2">
          <Sparkles className="size-4" />
          Analyze Symptoms
        </Button>
      </form>
    </div>
  );
}