import type { Post } from "@/lib/sanity/types/Post";

export interface Person
  extends Omit<Post, "_type" | "publishedAt" | "body"> {
  name: string;
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
}
