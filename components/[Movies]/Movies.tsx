"use client";

import React from "react";
import Link from "next/link";
import type { Movie as MovieType } from "@/services/Movies/Movie/types/Movie";
import Movie from "@/components/[Movies]/[Movie]/Movie"
import H1 from "../[H1]/H1";

interface MovieProps {
  movies: MovieType[]; 
}

export default function Movies({ movies }: MovieProps) {
  return (
    <div>
      <H1>
        Movies
      </H1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie: MovieType) => (
          <Link key={movie._id} href={`/movies/${movie.slug.current}`}>
            <Movie data={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}
