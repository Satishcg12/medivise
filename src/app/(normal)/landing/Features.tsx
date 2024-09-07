import PageTitle from "@/components/PageTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const features = [
  {
    title: "Medicine Dictionary",
    description: "Search for medicines and their uses.",
    image: "/images/medicine_dictionary.jpg",
    href: "/medicineSearch",
  },
  {
    title: "Doctor Consultation",
    description: "Get professional consultation from the best doctors.",
    image: "/images/doctor_consultation.webp",
    href: "/doctor-consultation",
  },
  {
    title: "Hospitals in My City",
    description: "Find hospitals near you in your city.",
    image: "/images/hospitals.jpg",
    href: "/hospitals",
  },
];

function Features() {


  return (
    <>
      {/* <PageTitle title="Features" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Link href={feature.href} key={index}>
            <Card className="flex flex-col">
              <div className="p-6 flex items-start justify-between">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <SquareArrowOutUpRightIcon className="w-6 h-6" />
              </div>
              <CardContent className="mt-auto">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  objectFit="cover"
                  className="rounded-lg aspect-[21/9] w-full object-cover"
                  width={300}
                  height={200}
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Features;
