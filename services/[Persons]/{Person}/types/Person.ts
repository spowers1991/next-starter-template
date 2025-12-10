import type { Post } from "@/lib/sanity/types/Post";
import { SanityReference } from "@/lib/sanity/types/SanityReference"

export interface Person extends Post{
  name: string;
  characterName: string;
  person: SanityReference
  slug: {
    current: string;
  };
  image: {
    asset: {
      _ref: string;
      _type: "reference";
      url: string;
    };
    alt?: string;
  };
}
