import Image from "next/image";
import type { Movie } from "@/services/Movies/Movie/types/Movie";
import P from "@/components/[P]/P";

interface CastMemberProps {
  castMember: Movie["castMembers"][number];
}

export default function CastMember({ castMember }: CastMemberProps) {
  const person = castMember.person;

  return (
    <div className="flex items-center gap-3">
        
      {person?.image?.asset?.url ? (
        <Image
          src={person.image.asset.url}
          alt={person.name}
          width={50}
          height={50}
          className="rounded-md object-cover"
        />
      ) : (
        <div className="w-[50px] h-[50px] bg-gray-300 rounded-md" />
      )}

      <div>
        <P>
            {person?.name}
        </P>
        {castMember.characterName && (
          <P>
            as {castMember.characterName}
          </P>
        )}
      </div>

    </div>
  );
}
