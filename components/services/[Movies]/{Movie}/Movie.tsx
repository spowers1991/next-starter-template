"use client";

import React from "react";
import type { Movie as MovieType } from "@/services/[Movies]/{Movie}/types/Movie";
import H1 from "@/components/html/{H1}/H1";
import P from "@/components/html/{P}/P";
import Section from "@/components/html/{Section}/Section";
import Animator from "@/components/animations/Animator";
import { useSwapStylesforPathName } from "@/components/html/{P}/actions/set/useSwapStylesforPathName";

import MoviesPoster from "./{MoviesPoster}/MoviesPoster";
import MoviesArticle from "./{MoviesArticle}/MoviesArticle";
import Banner from "@/components/content/{Banner}/Banner";
import Grid from "@/components/layout/grid/{Grid}/Grid";

interface MoviePageProps {
  movie: MovieType;
}

export default function MoviePage({ movie }: MoviePageProps) {

  const title = movie?.title || movie?.name;

  const swapStylesforPathName = useSwapStylesforPathName({ pathNameToMatch: "/movies/the-dark-tower", styles: { p: "text-red-500" }, themeName: "materialTheme" });

  return (
    <Section>

      <P functions={[ 
        { name: "swapStylesforPathName", 
          type: "theme", 
          handler: () => swapStylesforPathName }
      ]}>
        This is a movie page for {title}.
      </P>

      <H1 id={`{Movie}_<H1/>`}
        animations={[{ name: "textReveal", config: { duration: 0.1, delay: 0.1 } }]}>
        {title}
      </H1>

      <Animator id={`{Movie}/<Animator/>`}
        animations={[{name: "fadeIn", config: { duration: 3, delay: 0.1 }}]}
      >

        <Grid className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <MoviesPoster movie={movie as MovieType} />
          <MoviesArticle movie={movie as MovieType} />
        </Grid>

        <Banner content={movie as MovieType} />
        
      </Animator>

    </Section>
  );
}
