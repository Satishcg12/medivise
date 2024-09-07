import PageTitle from "@/components/PageTitle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function Features() {
  const features = [
    {
      title: "Medicine Dictionary",
      description: "Search for medicines and their uses.",
      image: "/images/medicine_dictionary.jpg",
    },
    {
      title: "Doctor Consultation",
      description: "Get professional consultation from the best doctors.",
      image: "/images/doctor_consultation.webp",
    },
    {
      title: "Hospitals in My City",
      description: "Find hospitals near you in your city.",
      image: "/images/hospitals.jpg",
    },
  ];

  return (
    <>
      {/* <PageTitle title="Features" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
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
        ))}
      </div>
    </>
  );
}

export default Features;