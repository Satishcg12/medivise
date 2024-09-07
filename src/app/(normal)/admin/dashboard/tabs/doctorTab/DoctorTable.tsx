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
import {  useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function DoctorTable() {
  const [doctors, setDoctors] = useState<DoctoreData[]>([]);

  const deleteTableRow = (key: number) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== key.toString()));
  };

  const fetchDoctors = async () => {
    try {
      const response = await fetch("/api/doctor");
      const data = await response.json();
      console.log(data);
      setDoctors(data.data);
    } catch (error) {
      console.error("Error fetching doctors: ", error);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);
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
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">
                    <Image
                      src={`${doctor.image}`}
                      alt="doctor image"
                      width={40}
                      height={40}
                      className="w-full rounded-full object-cover object-center"
                    />
                  </TableCell>
                  <TableCell>
                    <p>{doctor.name}</p>
                    <p>{doctor.email}</p>
                    <p>{doctor.specialization}</p>
                  </TableCell>
                  <TableCell>
                    <p>{doctor.consultation}</p>
                    <p>{doctor.commissionRate}%</p>
                  </TableCell>
                  <TableCell>
                    <p>{doctor.experience}</p>
                    <p>{doctor.qualifications}</p>
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <Badge variant="outline">
                    No doctors available. Add a doctor to get started.
                  </Badge>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DoctorTable;
