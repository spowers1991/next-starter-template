"use client";

import React from "react";
import Link from "next/link";
import Movie from "./[Movie]/Movie";
import type { Movie as MovieType } from "@/services/sanity/movies/types/Movie";
import H1 from "../[H1]/H1";

interface PostProps {
  movies: MovieType[]; 
}

export default function Movies({ movies }: PostProps) {
  return (
      <div>
        <H1>
          Movies
        </H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie: MovieType, index) => (
            <Link key={index} href={`/movies/${movie.slug.current}`}>
              <Movie data={movie} />
            </Link>
          ))}
        </div>
      </div>
  );
}
