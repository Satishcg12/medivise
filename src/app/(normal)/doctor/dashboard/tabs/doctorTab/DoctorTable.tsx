"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function DoctorTable() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      image: "/images/doctor_pic.png",
      name: "Name",
      email: "Email",
      specialization: "Specialization",
      consultation: "Consultation",
      commissionRate: "Commission Rate",
      experience: "Experience",
      qualifications: "Qualifications",
    },
    // Add more doctor objects as needed
  ]);

  const deleteTableRow = (key: number) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== key));
  };

  return (
    <Card className="bg-muted/40 overflow-auto">
      <CardHeader>
        <CardTitle>Doctor Table</CardTitle>
        <CardDescription>
          A list of all the doctors.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Basic Info</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead className="text-right">Exp & Qual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={1}>
                <TableCell className="font-medium">
                  <Image
                    src="/images/doctor_pic.png"
                    alt="doctor image"
                    width={40}
                    height={40}
                    className="w-full rounded-full object-cover object-center"
                  />
                </TableCell>
                <TableCell>
                  <p>Name</p>
                  <p>Email</p>
                  <p>Specialization</p>
                </TableCell>
                <TableCell>
                  <p>Consultation</p>
                  <p>Commision Rate</p>
                </TableCell>
                <TableCell>
                  <p>Experience</p>
                  <p>Qualifications</p>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Ellipsis className="w-6 h-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="p-0">
                        <Button
                          onClick={() => deleteTableRow(1)}
                          variant="ghost"
                          className="justify-start w-full"
                        >
                          Delete
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="p-0">
                        <Button
                          variant="ghost"
                          className="justify-start w-full"
                        >
                          Edit
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {doctors.length === 0 && (
        <CardFooter className="justify-center">
          <Badge variant="outline">No doctors available. Add a doctor to get started.</Badge>
        </CardFooter>
      )}
    </Card>
  );
}

export default DoctorTable;
