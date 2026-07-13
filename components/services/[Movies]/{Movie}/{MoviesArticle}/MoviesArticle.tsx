"use client"

import React from "react";
import type { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import P from "@/components/html/{P}/P";
import Span from "@/components/html/{Span}/Span";
import { PortableText } from "@portabletext/react";
import CastMembers from "../[CastMembers]/CastMembers";
import CrewMembers from "../[CrewMembers]/CrewMembers";
import Article from "@/components/html/{Article}/Article";
import H2 from "@/components/html/{H2}/H2";

const formatDateUTC = (value?: string) => {
    if (!value) return "Unknown";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Unknown";

    return new Intl.DateTimeFormat("en-GB", {
        timeZone: "UTC",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(date);
};


interface MoviesArticleProps {
  movie: Movie;
}

export default function MoviesArticle({ movie }: MoviesArticleProps) {

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
                    {formatDateUTC(movie?.releaseDate)}
                </P>
                <P>
                <Span>
                    Popularity:
                </Span>
                    &nbsp;
                    {movie?.popularity}
                </P>
            </div>
            <div>
                <H2>
                Overview
                </H2>
                <PortableText value={movie?.overview} />
            </div>
            <CastMembers castMembers={movie?.castMembers} />
            <CrewMembers crewMembers={movie?.crewMembers} />
        </div>
    </Article>
  );
}