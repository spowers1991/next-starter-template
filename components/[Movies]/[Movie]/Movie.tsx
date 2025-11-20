"use client";

import React from "react";
import type { Movie } from "@/services/sanity/movies/types/Movie";
import H2 from "@/components/[H2]/H2";

interface MovieProps {
  data: Movie;
}

export default function Movie({ data }: MovieProps) {
  return (
    <H2>
        {data.title}
    </H2>
  );
}
