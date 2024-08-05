import TrendsSidebar from "@/components/TrendsSidebar";
import { Metadata } from "next";
import Bookmarks from "./Bookmarks";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Закладки",
};

export default function Page() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <Card>
          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <h1 className="text-center text-2xl font-bold">Закладки</h1>
          </div>
        </Card>
        <Bookmarks />
      </div>
      <TrendsSidebar />
    </main>
  );
}