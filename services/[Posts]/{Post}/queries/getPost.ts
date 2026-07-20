// lib/sanity/queries/getPost.ts
import { sanityClient } from "@/lib/sanity/api/client";
import { cache } from "react";
import type { Post as PostType } from "@/services/[Posts]/{Post}/types/Post";

export const getPost = cache(async (slug: string): Promise<PostType | null> => {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
});
