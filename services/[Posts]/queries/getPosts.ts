// lib/sanity/queries/getPosts.ts
import { sanityClient } from "@/lib/sanity/api/client";
import { cache } from "react";
import type { Post as PostType } from "@/services/[Posts]/{Post}/types/Post";

export const getPosts = cache(async (): Promise<PostType[]> => {
  return sanityClient.fetch(
    `*[_type == "post"] | order(releaseDate desc)`
  );
});
