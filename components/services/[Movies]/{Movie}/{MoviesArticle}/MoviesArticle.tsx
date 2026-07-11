"use client"

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import P from "@/components/html/{P}/P";
import Span from "@/components/html/{Span}/Span";
import { PortableText } from "@portabletext/react";
import CastMembers from "../[CastMembers]/CastMembers";
import CrewMembers from "../[CrewMembers]/CrewMembers";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import Article from "@/components/html/{Article}/Article";
import H2 from "@/components/html/{H2}/H2";


interface MoviesArticleProps {
  movie: Movie;
}

export default function MoviesArticle({ movie }: MoviesArticleProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <Article>
        <div className="md:col-span-2 space-y-6">
            <div>
                <H2>
                    Summary
                </H2>
                <P>
                    <Span>
                        Release Date:
                    </Span>
                    &nbsp;
                    {new Date(movie.releaseDate).toLocaleDateString()}
                </P>
                <P>
                <Span>
                    Popularity:
                </Span>
                    &nbsp;
                    {movie.popularity}
                </P>
            </div>
            <div>
                <H2>
                Overview
                </H2>
                <PortableText value={movie.overview} />
            </div>
            <CastMembers castMembers={movie.castMembers} />
            <CrewMembers crewMembers={movie.crewMembers} />
        </div>
    </Article>
  );
}