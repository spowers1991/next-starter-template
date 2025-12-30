"use client";

import React from "react";
import Link from "next/link";
import H1 from "@/components/{H1}/H1"
import H3 from "../{H3}/H3";
import Section from "../{Section}/Section";
import Grid from "../{Grid}/Grid";
import type { Person } from "@/services/[Persons]/{Person}/types/Person";
import type { Post } from "@/lib/sanity/types/Post";

interface PersonsProps {
  persons: Post[]; 
}

export default function Persons({ persons }: PersonsProps) {

  return (
    <Section>
      <H1>
        Persons
      </H1>
      <Grid
        items={persons}
        renderItem={(person) => (
          <Link key={person._id} href={`/persons/${person.slug.current}`}>
            <H3>
              {person.name}
            </H3>
          </Link>
        )}
      />
    </Section>
  );
}
