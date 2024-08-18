"use client";

import { Loader2 } from "lucide-react";
import useInitializeChatClient from "./useInitializeChatClient";
import { Card } from "@/components/ui/card";
import { Chat as StreamChat } from "stream-chat-react";
import ChatSidebar from "./ChatSidebar";
import ChatChannel from "./ChatChannel";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Chat() {
  const chatClient = useInitializeChatClient();
  const { resolvedTheme } = useTheme();

  const {0:sidebarOpen, 1:setSidebarOpen} = useState(false);

  if (!chatClient) {
    return <Loader2 className="mx-auto my-3 animate-spin"></Loader2>;
  }

  return (
    <main className="relative w-full overflow-hidden rounded-2xl bg-card shadow-sm">
      <Card className="absolute bottom-0 top-0 flex w-full">
        <StreamChat
          client={chatClient}
          theme={
            resolvedTheme === "dark"
              ? "str-chat__theme-dark"
              : "str-chat__theme-light"
          }
        >
          <ChatSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          ></ChatSidebar>
          <ChatChannel
            open={!sidebarOpen}
            openSidebar={() => setSidebarOpen(true)}
          ></ChatChannel>
        </StreamChat>
      </Card>
    </main>
  );
}
