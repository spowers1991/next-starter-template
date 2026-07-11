"use client"

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import Image from "next/image";
import { useThemes } from "@/lib/themes/state/ThemeContext";


interface MoviesPosterProps {
  movie: Movie;
}

export default function MoviesPoster({ movie }: MoviesPosterProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
        {movie.poster?.asset?.url ? (
            <Image
            src={movie.poster.asset.url}
            alt={movie.title || movie.name}
            fill
            className="object-cover"
            />
        ) : (
            <div className="w-full h-full bg-gray-300 grid place-items-center text-gray-600">
            No poster available
            </div>
        )}
    </div>
  );
}