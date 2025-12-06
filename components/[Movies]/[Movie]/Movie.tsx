"use client";

import Image from "next/image";
import { Movie } from "@/services/Movies/Movie/types/Movie";
import { PortableText } from "@portabletext/react";
import H1 from "@/components/[H1]/H1";
import H2 from "@/components/[H2]/H2";
import P from "@/components/[P]/P"
import Span from "@/components/[Span]/Span";
import UL from "@/components/[UL]/UL";
import LI from "@/components/[UL]/[LI]/LI";
import Section from "@/components/[Section]/Section";
import CastMember from "@/components/[Movies]/[Movie]/[CastMembers]/[CastMember]/Castmember";


interface MoviePageProps {
  data: Movie;
}

export default function MoviePage({ data }: MoviePageProps) {
  const title = data.title || data.name;

  return (
    <div>

      <H1>
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

          <Section>
            <H2>
              Overview
            </H2>
            <div className="prose prose-gray max-w-none">
              <PortableText value={data.overview} />
            </div>
          </Section>

          {data.castMembers?.length > 0 && (
            <Section>
              <H2>
                Cast
              </H2>
              <UL>
                {data.castMembers.map((castMember) => (
                  <LI key={castMember._key}>
                    <CastMember castMember={castMember} />
                  </LI>
                ))}
              </UL>
            </Section>
          )}

          {data.crewMembers?.length > 0 && (
            <Section>
              <H2>
                Crew
              </H2>
              <UL>
                {data.crewMembers.map((member) => (
                  <LI key={member._key}>
                    {member.person?.image?.asset?.url ? (
                      <Image
                        src={member.person.image.asset.url}
                        alt={member.person.name}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                      />
                    ) : (
                      <div className="w-[50px] h-[50px] bg-gray-300 rounded-md" />
                    )}
                    <div>
                      <P>
                        {member.person?.name}
                      </P>

                      {member.job && (
                        <P>
                          {member.job}
                        </P>
                      )}
                    </div>
                  </LI>
                ))}
              </UL>
            </Section>
          )}
        </div>
      </div>
    </div>
  );
}
