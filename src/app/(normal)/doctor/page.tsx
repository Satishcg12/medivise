// "use client";
// import AiPrompt from "./aiPrompt";
// import DoctorCard from "./DoctorCard";
// import PageTitle from "@/components/PageTitle";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { doctorCategories } from "./DoctorCard";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

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
//     <section className="flex gap-6">
//       {/* <AiPrompt setSelectedCategorys={setSelectedCategorys} suggest={suggest} query={query} /> */}
//       <section className="space-y-6 flex-grow">
//         <PageTitle title="Doctors">
//           <Select>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Specialization" />
//             </SelectTrigger>
//             <SelectContent>
//               {doctorCategories.map((category) => (
//                 <SelectItem key={category} value={category}>
//                   {category}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </PageTitle>
//         <div className="ml-auto grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <DoctorCard />
//           ))}
//         </div>
//       </section>
//     </section>
//   );
// }

export default async function DoctorPage() {
  let data = await fetch("http://localhost:3000/api/suggest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: "I have a headache",
    }),
  });
  let response = await data.json();
  const categoryies = response.data.categories;
  const suggestion = response.data.suggestion;

  console.log(categoryies);
  console.log(suggestion);

  let allDoctors: any[]=[]
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
    <div>
      
    </div>
  );
}
