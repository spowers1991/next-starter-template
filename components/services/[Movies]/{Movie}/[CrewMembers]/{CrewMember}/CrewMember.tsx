"use client";

import Image from "next/image";
import Link from "next/link";

import Span from "@/components/html/{Span}/Span";

import { usePersons } from "@/services/[Persons]/state/PersonsContext";
import type { CrewMember as CrewMemberType } from "@/services/[Movies]/{Movie}/[CrewMembers]/{CrewMember}/CrewMember";

interface CrewMemberProps {
  crewMember: CrewMemberType;
}

export default function CrewMember({ crewMember }: CrewMemberProps) {
  const { persons } = usePersons();
  const personRef = crewMember.person?._ref;

  const person = persons.find((p) => p._id === personRef);
  if (!person) return null;
  return (
    <div className="flex items-center gap-3">
      {person?.image?.asset?.url ? (
        <Link href={`/persons/${person.slug.current}`}>
          <Image
            src={person.image.asset.url}
            alt={person.name}
            width={50}
            height={50}
            className="rounded-md object-cover"
          />
        </Link>
      ) : (
        <div className="w-[50px] h-[50px] bg-gray-300 rounded-md" />
      )}
      <Link href={`/persons/${person.slug.current}`}>
        <Span>
          {person.name}
        </Span>
        <br/>
        <Span>
          in {crewMember.department}
        </Span>
      </Link>
    </div>
  );
}
