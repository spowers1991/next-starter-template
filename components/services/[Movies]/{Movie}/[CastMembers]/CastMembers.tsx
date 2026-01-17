import Article from "@/components/html/{Article}/Article";
import H2 from "@/components/html/{H2}/H2";
import UL from "@/components/html/{UL}/UL";
import LI from "@/components/html/{LI}/LI";
import CastMember from "./{CastMember}/CastMember";
import type { CastMember as CastMemberType } from "@/services/[Movies]/{Movie}/[CastMembers]/{CastMember}/types/CastMember";

interface CastMembersProps {
  castMembers: CastMemberType[];
}

export default function CastMembers({ castMembers }: CastMembersProps) {
  if (!castMembers || castMembers.length === 0) return null;

  return (
    <Article>
      <H2>
        Cast
      </H2>
      <UL>
        {castMembers.map((castMember) => (
          <LI key={castMember._key}>
            <CastMember castMember={castMember} />
          </LI>
        ))}
      </UL>
    </Article>
  );
}
