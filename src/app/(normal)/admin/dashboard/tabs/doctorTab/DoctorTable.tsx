import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
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

function DoctorTable() {
  async function getDoctors() {
    const response = await fetch("http://localhost:3000/api/doctors");
    const data = await response.json();
    console.log(data);
  }
  return (
    <Card className="bg-muted/40 overflow-auto">
      <CardHeader>
        <CardTitle>Doctor Table</CardTitle>
        <CardDescription>
          A list of all the doctors in your clinic.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Basic Info</TableHead>
              <TableHead>Fees</TableHead>
              <TableHead className="text-right">Exp & Qual</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
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
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DoctorTable;
