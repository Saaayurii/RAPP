import loginImage from "@/assets/login-image.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { Card } from "@/components/ui/card";
 import GoogleSignInButton from "./google/GoogleSignInButton";

export const metadata: Metadata = {
  title: "Вход",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <Card>
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
          <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
            <h1 className="text-center text-4xl font-bold">Вход в RAPP</h1>
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-muted" />
                <span>ИЛИ</span>
                <div className="h-px flex-1 bg-muted" />
              </div>
              <GoogleSignInButton /> 
              <LoginForm />
              <Link
                href="/signup"
                className="block text-center hover:underline"
              >
                У вас нет учетной записи? Регистрация
              </Link>
            </div>
          </div>
          <Image
            src={loginImage}
            alt=""
            className="hidden w-1/2 object-cover md:block"
          />
        </div>
      </Card>
    </main>
  );
}
