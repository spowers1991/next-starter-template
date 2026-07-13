"use client";

import { useMemo } from "react";
import type { PortableTextBlock } from "@portabletext/types";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import GroqResponse from "@/lib/groq/components/GroqResponse";

interface BannerProps {
  content: unknown;
}

function extractOverviewText(overview: PortableTextBlock[]): string {
  return overview
    .flatMap((block) => (block.children as Array<{ text?: string }> | undefined) ?? [])
    .map((child) => child.text ?? "")
    .join(" ")
    .trim();
}

export default function Banner({ content }: BannerProps) {

  const keywords = useMemo(() => {
    if (typeof content === "string") return [content];

    const movie = content as Partial<Movie>;
    const title = movie?.title || movie?.name;
    const description = movie?.overview ? extractOverviewText(movie.overview) : "";
    const releaseDate = movie?.releaseDate ? `Released: ${movie.releaseDate}` : "";
    const popularity = movie?.popularity != null ? `Popularity: ${movie.popularity}` : "";

    const result = [title, description, releaseDate, popularity].filter(Boolean) as string[];

    return result.length > 0 ? result : ["Please show an error message"];
  }, [content]);

  return (
    <GroqResponse keywords={keywords} />
  );
}