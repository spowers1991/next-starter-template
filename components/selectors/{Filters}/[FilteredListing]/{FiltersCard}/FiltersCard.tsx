"use client";

import Link from "next/link";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";
import { FilteredItem } from "@/lib/filters/types/FilteredItem";

interface FiltersCardProps {
  filteredItem: unknown;
  animations?: Animation[] | undefined;
  children?: React.ReactNode;
}

function FiltersCard({ filteredItem, animations, children }: FiltersCardProps) {

  const item = filteredItem as FilteredItem;

  const id = item._id;
  const componentName = `<FiltersCard/>`;
  const animationRef = useAnimationsRegistration(id, animations, componentName);

  return (
    <div ref={animationRef} className="block">
      <Link href={`/${item._type ?? ''}s/${item.slug?.current ?? ''}`}>
        {children}
      </Link>
    </div>
  );
}

export default FiltersCard;