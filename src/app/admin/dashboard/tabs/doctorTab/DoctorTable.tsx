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

function DoctorTable() {
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
              <TableHead className="text-right">Exp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DoctorTable;
