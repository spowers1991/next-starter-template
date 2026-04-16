import { Metadata } from "next";
import { urlForImage } from "@/lib/sanity/helpers/image";
import { portableTextToString } from "@/lib/sanity/helpers/portableTextToString";

export function setMetadata(page: Metadata & { poster?: ImageBitmap, image?: ImageBitmap, overview?: unknown } | null): Metadata {

  const title = page?.title ?? "Movie Not Found";
  const overviewText = page?.overview ? portableTextToString(page.overview) : undefined;
  const description = overviewText || page?.description || "No description available.";
  const posterUrl = page?.poster ? urlForImage(page.poster).url() : null;
  const imageUrl = page?.image ? urlForImage(page.image).url() : null;
  const finalImageUrl = posterUrl || imageUrl;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
        images: finalImageUrl ? [{ url: finalImageUrl }] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
        images: finalImageUrl ? [finalImageUrl] : [],
    },
  };
}
