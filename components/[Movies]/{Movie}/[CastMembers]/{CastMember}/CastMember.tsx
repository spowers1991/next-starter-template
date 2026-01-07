import Image from "next/image";
import P from "@/components/{P}/P";
import Link from "next/link";
import { usePersons } from "@/services/[Persons]/state/PersonsContext";
import type { Person } from "@/services/[Persons]/{Person}/types/Person";
import type { CastMember } from "../../../../../services/[Movies]/{Movie}/[CastMembers]/{CastMember}/types/CastMember";

interface CastMemberProps {
  castMember: CastMember;
}

export default function CastMember({ castMember }: CastMemberProps) {
  const personRef = castMember.person._ref;
  const { persons } = usePersons();

  const person = persons.find((p: Person) => p._id === personRef);
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
      <div>
        <Link href={`/persons/${person.slug.current}`}>
          <P>{person.name}</P>
          {castMember.characterName && (
            <P>as {castMember.characterName}</P>
          )}
        </Link>
      </div>
    </div>
  );
}
