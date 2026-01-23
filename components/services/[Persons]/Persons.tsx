"use client";

import React from "react";
import Link from "next/link";
import H1 from "@/components/html/{H1}/H1"
import H3 from "@/components/html/{H3}/H3";
import Section from "@/components/html/{Section}/Section";
import GridRepeater from "@/components/layout/grid/{GridRepeater}/GridRepeater";
import type { Post } from "@/lib/sanity/types/Post";

interface PersonsProps {
  persons: Post[]; 
}

export default function Persons({ persons }: PersonsProps) {

  return (
    <Section>
      <H1 animations={["text-reveal"]}>
        Persons
      </H1>
      <GridRepeater
        items={persons}
        renderItem={(person) => (
          <Link key={person._id} href={`/persons/${person.slug.current}`}>
            <H3>
              {person.name}
            </H3>
          </Link>
        )}
        cols={4}
      />
    </Section>
  );
}
