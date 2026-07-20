import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/actions/create/createMetadata";
import { getPosts } from "@/services/[Posts]/queries/getPosts";
import Main from "@/components/html/{Main}/Main";
import Posts from "@/components/services/[Posts]/Posts";

export const metadata: Metadata = createMetadata({
  title: "Post Archive",
  description: "Browse all posts from our Sanity collection.",
});

export default async function PostsArchivePage() {

  const postsData = await getPosts();

  return (
    <Main>
      <Posts posts={postsData} />
    </Main>
  );
}
