import { Metadata } from "next";
import signupImage from "@/assets/signup-image.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Регистрация",
};
const page = () => {
  return (
    <main className="flex h-screen items-center justify-center p-5">
     <Card>
        <div className="round-2xl flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
          <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
            <div className="space-y-1 text-center">
              <h1 className="text-4xl font-bold">Регистрация в RAPP</h1>
              <p className="text-muted-foreground">
                Место, где <span className="italic">любой</span> может обрести
                друзей
              </p>
            </div>
            <div className="space-y-5">
              <SignUpForm></SignUpForm>
              <Link
                href="/login"
                className="block text-center hover:underline"
              >
                Уже есть аккаунт? Войти
              </Link>
            </div>
          </div>
          <Image
            src={signupImage}
            alt=""
            className="hidden w-1/2 object-cover md:block"
          />
        </div>
     </Card>
    </main>
  );
};

export default page;
