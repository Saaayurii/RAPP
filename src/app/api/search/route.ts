import { validateRequest } from "@/auth";
import prisma from "@/lib/prisma";
import { getPostDataInclude, PostsPage } from "@/lib/types";
import { NextRequest } from "next/server";
import { Prisma } from '@prisma/client';

export async function GET(req: NextRequest) {
  try {
    const encodedQ = req.nextUrl.searchParams.get("q") || "";
    const q = decodeURIComponent(encodedQ);
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const searchQuery = q
      .split(/\s+/)
      .map((term: string) => {
        const cleanTerm = term.startsWith('#') ? term.slice(1) : term;
        return `"${cleanTerm}"`;
      })
      .join(' & ');

    const pageSize = 10;

    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const postInclude = getPostDataInclude(user.id);
    type PostWithInclude = Prisma.PostGetPayload<{ include: typeof postInclude }>;

    const posts: PostWithInclude[] = await prisma.post.findMany({
      where: {
        OR: [
          {
            content: {
              search: searchQuery,
            },
          },
          {
            user: {
              displayName: {
                search: searchQuery,
              },
            },
          },
          {
            user: {
              username: {
                search: searchQuery,
              },
            },
          },
          // Если у вас есть отдельное поле для хэштегов, добавьте его сюда
          // {
          //   hashtags: {
          //     hasSome: [searchQuery.replace(/['"]/g, '')],
          //   },
          // },
        ],
      },
      include: postInclude,
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: PostsPage = {
      posts: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Response.json({ error: `Database error: ${error.message}` }, { status: 500 });
    }
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}