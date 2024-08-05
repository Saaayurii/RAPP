import SearchField from "@/components/SearchField";
import { Card } from "@/components/ui/card";
import UserButton from "@/components/UserButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-background ">
      <Card className="p-2 m-3 mx-auto max-w-7xl" >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-5 px-5 py-3">
          <Link href="/" className="text-4xl font-bold text-primary">
            RAPP
          </Link>
          <SearchField></SearchField>
          <UserButton className="sm:ms-auto"></UserButton>
        </div>
      </Card>
    </header>
  );
}
