import type { Post } from "@/lib/sanity/types/Post";
import { SanityReference } from "@/lib/sanity/types/SanityReference"
import { RefObject } from "react";

export interface Person extends Post{
  name: string;
  characterName: string;
  person: SanityReference
  slug: {
    current: string;
  };
  image: {
    _type: "image";
    asset: {
      _ref?: string;
      _type: "reference";
      _id?: string;
      url?: string;
    };
    crop?: {
      _type: "sanity.imageCrop";
      top: number;
      bottom: number;
      left: number;
      right: number;
    };
    hotspot?: {
      _type: "sanity.imageHotspot";
      x: number;
      y: number;
      height: number;
      width: number;
    };
    alt?: string;
  };
}
