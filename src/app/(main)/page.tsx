import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import ForYouFeed from "./ForYouFeed";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FollowingFeed from "./FollowingFeed";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor></PostEditor>
        <Tabs defaultValue="for-you">
          <Card>
            <TabsList>
              <TabsTrigger value="for-you">Новости</TabsTrigger>
              <TabsTrigger value="following">Подписки</TabsTrigger>
            </TabsList>
          </Card>
          <TabsContent value="for-you">
            <ForYouFeed></ForYouFeed>
          </TabsContent>
          <TabsContent value="following">
            <FollowingFeed></FollowingFeed>
          </TabsContent>
        </Tabs>
      </div>
      <TrendsSidebar></TrendsSidebar>
    </main>
  );
}
