"use client";

import Image from "next/image";
import Link from "next/link";

import P from "@/components/{P}/P";
import Article from "@/components/{Article}/Article";

import { usePersons } from "@/services/[Persons]/state/PersonsContext";
import type { CrewMember as CrewMemberType } from "./types/CrewMember";

interface CrewMemberProps {
  crewMember: CrewMemberType;
}

export default function CrewMember({ crewMember }: CrewMemberProps) {
  const { persons } = usePersons();
  const personRef = crewMember.person?._ref;

  const person = persons.find((p) => p._id === personRef);
  if (!person) return null;

  return (
    <Article>
      <Link
        href={`/persons/${person.slug.current}`}
        className="flex items-center gap-3"
      >
        {person.image?.asset?.url && (
          <Image
            src={person.image.asset.url}
            alt={person.name}
            width={50}
            height={50}
            className="rounded-md object-cover"
          />
        )}

        <div>
          <P>{person.name}</P>
          {crewMember.department && <P>{crewMember.department}</P>}
        </div>
      </Link>
    </Article>
  );
}
