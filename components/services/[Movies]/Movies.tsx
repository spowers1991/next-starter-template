"use client";

import React from "react";
import Link from "next/link";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import MoviesFilters from "./{MoviesFilters}/MoviesFilters";
import H1 from "@/components/html/{H1}/H1";
import Section from "@/components/html/{Section}/Section";
import Grid from "@/components/layout/grid/{Grid}/Grid";

interface MovieProps {
  movies: Movie[];
}

export default function Movies({ movies }: MovieProps) {
  return (
    <Section>

      <MoviesFilters movies={movies} />

      <H1>Movies</H1>

      <Grid cols={4} gap={4}>
        {movies.map((movie) => (
          <Link key={movie._id} href={`/movies/${movie.slug.current}`}>
            {movie.title}
          </Link>
        ))}
      </Grid>

    </Section>
  );
}