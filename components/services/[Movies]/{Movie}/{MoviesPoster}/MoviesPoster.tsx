"use client"

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import Image from "next/image";
import { safeImageUrl } from "@/lib/sanity/helpers/image";


interface MoviesPosterProps {
  movie: Movie;
}

export default function MoviesPoster({ movie }: MoviesPosterProps) {
  const posterUrl = safeImageUrl(movie?.poster);

  return (
  <div className="w-full overflow-hidden rounded-lg shadow-lg">
        {posterUrl ? (
            <Image
            src={posterUrl}
            alt={movie?.title || movie?.name}
            width={800}
            height={1200}
            priority
            className="h-auto w-full object-cover"
            />
        ) : (
      <div className="grid aspect-[2/3] w-full place-items-center bg-gray-300 text-gray-600">
            No poster available
            </div>
        )}
    </div>
  );
}