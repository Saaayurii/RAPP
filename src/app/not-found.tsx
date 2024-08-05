import Image from "next/image";
import Link from "next/link";
import notfoundImage from "@/assets/404.png";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center bg-background p-5">
      <div>
      <Image
        src={notfoundImage}
        alt="notfoundImage"
        className="hidden max-w-[20rem] object-cover md:block"
      />
        <h1 className="text-center text-4xl font-bold text-foreground">
          Ошибка – 404!
        </h1>
        <div>
          <Link
            href="/"
            className="text-center text-4xl font-bold text-foreground underline"
          >
            Вернуться домой!
          </Link>
        </div>
      </div>
    </main>
  );
}
