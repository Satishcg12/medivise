import Link from "next/link";
import { BriefcaseMedical } from "lucide-react";
import Image from "next/image";

export function Logo() {
  return (
    <>
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        <Image
          src="/images/medivise-logo.png"
          alt="Medivice"
          width={40}
          height={40}
          priority
          className="w-8"
        />
        <h1>Medivice</h1>
      </Link>
    </>
  );
}
