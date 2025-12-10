"use client";

import React from "react";
import Link from "next/link";
import Post from "@/components/{Post}/Post"
import H1 from "@/components/{H1}/H1"
import type { Person as PersonType } from "@/services/[Persons]/{Person}/types/Person";

interface PostProps {
  persons: PersonType[]; 
}

export default function Persons({ persons }: PostProps) {
  return (
    <div>
      <H1>
        Movies
      </H1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {persons.map((person: PersonType) => (
          <Link key={person._id} href={`/persons/${person.slug.current}`}>
            <Post data={person} />
          </Link>
        ))}
      </div>
    </div>
  );
}
