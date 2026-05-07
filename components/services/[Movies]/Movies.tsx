"use client";

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import MoviesFilters from "./{MoviesFilters}/MoviesFilters";

import H1 from "@/components/html/{H1}/H1";
import Section from "@/components/html/{Section}/Section";

import Animator from "@/components/animations/Animator";

interface MovieProps {
  movies: Movie[];
}

export default function Movies({ movies }: MovieProps) {
  
  return (
    <Section>
      <Animator 
        id={`[Movies]_<Animator/>`}
        animations={[{name: "fadeIn", config: { duration: 3, delay: 0.1 }}]}
      >
      <H1
      id={`[Movies]_<H1/>`}
      animations={[
          { 
            name: 'textReveal',
            config: {
              duration: 0.01,
              delay: 0.1,
            }
          }
        ]} 
      >
        Movies
      </H1>

      <MoviesFilters movies={movies} />

      </Animator>
    </Section>
  );
}