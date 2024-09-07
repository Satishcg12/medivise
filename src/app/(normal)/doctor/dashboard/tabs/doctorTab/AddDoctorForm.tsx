"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addDoctorSchema } from "@/schema/addDoctorSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { UploadButton, UploadDropzone } from "@/app/utils/uploadthings";

export default function AddDoctorForm() {
  const form = useForm<z.infer<typeof addDoctorSchema>>({
    resolver: zodResolver(addDoctorSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      image: "",
      ceritificate: "",
      description: "",
      specializations: "",
      qualifications: "",
      experience: "",
      consultationFee: 0,
      commission: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof addDoctorSchema>) => {
    // Simulate asynchronous submission (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data); // Handle form submission logic here
  };

  return (
    <Card className="bg-muted/40">
      <CardHeader>
        <CardTitle>Add Doctor</CardTitle>
        <CardDescription>
          Please fill in the doctor's details below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doctor's Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="doctor@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Doctor's description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specializations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specializations</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="E.g., Cardiologist, Dermatologist"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="qualifications"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Qualifications</FormLabel>
                  <FormControl>
                    <Input placeholder="E.g., MBBS, MD" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience (Years)</FormLabel>
                  <FormControl>
                    <Input placeholder="X months/years" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consultationFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Consultation Fee</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Rs XXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commission Percentage</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Commission Percentage"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <UploadButton disabled={form.watch("image") !== ""}
                      className="*:w-full *:grayscale"
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        alert("Upload Completed");
                        field.onChange(res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ceritificate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Certificate</FormLabel>
                  <FormControl>
                    <UploadButton disabled={form.watch("ceritificate") !== ""}
                      className="*:w-full *:grayscale"
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        alert("Upload Completed");
                        field.onChange(res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <UploadButton
              className="*:w-full"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            /> */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="col-span-2"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="size-4 mr-2 animate-spin" />
              )}
              Save Doctor
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
