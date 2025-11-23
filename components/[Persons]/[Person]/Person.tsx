"use client";

import Image from "next/image";
import { Person } from "@/services/Persons/Person/types/Person";
import H1 from "@/components/[H1]/H1";

interface PersonPageProps {
  data: Person;
}

export default function PersonPage({ data }: PersonPageProps) {
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
      </div>
    </div>
  );
}
