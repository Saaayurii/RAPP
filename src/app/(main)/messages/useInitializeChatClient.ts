import { useEffect, useState } from "react";
import { useSession } from "../SessionProvider";
import { StreamChat } from "stream-chat";
import kyInstance from "@/lib/ky";

export default function useInitializeChatClient() {
  const { user } = useSession();
  const { 0: chatClient, 1: setChatClient } = useState<StreamChat | null>(null);

  useEffect(() => {
    const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

    client
      .connectUser(
        {
          id: user.id,
          username: user.username,
          name: user.displayName,
          image: user.avatarUrl,
        },
        async () =>
          kyInstance
            .get("/api/get-token")
            .json<{ token: string }>()
            .then((data) => data.token),
      )
      .catch((error) =>
        console.error("Не удалось подключить пользователя", error),
      )
      .then(() => setChatClient(client));

    return () => {
      setChatClient(null);
      client
        .disconnectUser()
        .catch((error) =>
          console.error("Не удалось подключить пользователя", error),
        )
        .then(() => console.log("Подключение закрыто"));
    };
  }, [user.id, user.username, user.displayName, user.avatarUrl]);

  return chatClient;
}
