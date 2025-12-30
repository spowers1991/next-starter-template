"use client"

import Article from "@/components/{Article}/Article";
import H2 from "@/components/{H2}/H2";
import UL from "@/components/{UL}/UL";
import LI from "@/components/{LI}/LI";
import CrewMember from "./{CrewMember}/CrewMember";
import type { CrewMember as CrewMemberType } from "./{CrewMember}/types/CrewMember";

interface CrewMembersProps {
  crewMembers: CrewMemberType[];
}

export default function CrewMembers({ crewMembers }: CrewMembersProps) {
  if (!crewMembers || crewMembers.length === 0) return null;

  return (
    <Article>
      <H2>
        Cast
      </H2>
      <UL>
        {crewMembers.map((crewMember) => (
          <LI key={crewMember._key}>
            <CrewMember crewMember={crewMember} />
          </LI>
        ))}
      </UL>
    </Article>
  );
}
