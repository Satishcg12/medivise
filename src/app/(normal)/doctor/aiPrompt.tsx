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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
      {" "}
      {/* Added sticky positioning */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3.5 flex flex-col flex-1 border rounded-xl p-3 shadow-md"
        >
          <Badge className="absolute -top-2">AI Symptoms Analysis</Badge>

          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gemini">Gemini</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-start gap-3 flex-1">
            <Sparkles className="size-5 text-primary shrink-0 animate-pulse" />
            <p className="pr-3 text-sm overflow-y-scroll max-h-[50dvh] text-justify">
              {suggest?.length > 0 ? suggest : "Get ai suggestions here"}
            </p>
          </div>

          {/* Ensure this container is flex and pushes the textarea to the bottom */}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Describe your symptoms..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="ml-auto gap-2">
            <Sparkles className="size-4" />
            Analyze Symptoms
          </Button>
        </form>
      </Form>
    </div>
  );
}
