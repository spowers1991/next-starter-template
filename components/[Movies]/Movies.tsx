"use client";

import React from "react";
import Link from "next/link";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import type { Post } from "@/lib/sanity/types/Post";
import H1 from "../{H1}/H1";
import Section from "../{Section}/Section";
import Grid from "../{Grid}/Grid";

interface MovieProps {
  movies: Post[]; 
}

export default function Movies({ movies }: MovieProps) {
  return (
    <Section>
      <H1>
        Movies
      </H1>
      <Grid
        items={movies}
        renderItem={(movie) => (
          <Link key={movie._id} href={`/movies/${movie.slug.current}`}>
            {movie.title}
          </Link>
        )}>
      </Grid>
    </Section>
  );
}
