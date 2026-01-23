"use client";

import Link from "next/link";
import { handleCardClick } from "./animations/handleCardClick";
import { useAnimatedFilterCard } from "./actions/useAnimatedFilterCard";

interface FiltersCardProps {
  filteredItem: unknown;
  index?: number;
}

function FiltersCard({ filteredItem, index = 0 }: FiltersCardProps) {
  const { cardRef, STATE_setShowAnimation } = useAnimatedFilterCard(index);

  const item = filteredItem as any;

  return (
    <Link href={`/${item._type}s/${item.slug.current}`} className="block">
      <div
        ref={cardRef}
        onClick={() => handleCardClick(STATE_setShowAnimation)}
      >
        {item.title}
      </div>
    </Link>
  );
}

export default FiltersCard;