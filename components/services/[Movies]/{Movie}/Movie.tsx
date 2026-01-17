"use client";

import Image from "next/image";
import { Movie } from "@/services/[Movies]/{Movie}/types/Movie";
import { PortableText } from "@portabletext/react";
import H1 from "@/components/html/{H1}/H1";
import H2 from "@/components/html/{H2}/H2";
import P from "@/components/html/{P}/P"
import Span from "@/components/html/{Span}/Span";
import Section from "@/components/html/{Section}/Section";
import Article from "@/components/html/{Article}/Article";
import CastMembers from "./[CastMembers]/CastMembers";
import CrewMembers from "./[CrewMembers]/CrewMembers";


interface MoviePageProps {
  data: Movie;
}

export default function MoviePage({ data }: MoviePageProps) {
  const title = data.title || data.name;

  return (
    <Section>

      <H1 animations={["text-reveal"]}>
        {title}
      </H1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
          {data.poster?.asset?.url ? (
            <Image
              src={data.poster.asset.url}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 grid place-items-center text-gray-600">
              No poster available
            </div>
          )}
        </div>

        <div className="md:col-span-2 space-y-6">
          <Article>
            <H2>
              Summary
            </H2>
            <P>
              <Span>
                Release Date:
              </Span>{" "}
              {new Date(data.releaseDate).toLocaleDateString()}
            </P>
            <P>
              <Span>
                Popularity:
              </Span>
              {data.popularity}
            </P>
          </Article>

          <Article>
            <H2>
              Overview
            </H2>
            <PortableText value={data.overview} />
          </Article>

          <CastMembers castMembers={data.castMembers} />

          <CrewMembers crewMembers={data.crewMembers} />

        </div>
      </div>
    </Section>
  );
}
