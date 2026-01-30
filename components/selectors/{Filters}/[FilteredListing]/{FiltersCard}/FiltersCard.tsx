"use client";

import Link from "next/link";
import type { Animation } from "@/lib/animations/types/Animation";
import { useAnimationsRegistration } from "@/lib/animations/hooks/useAnimationsRegistration";

interface FiltersCardProps {
  filteredItem: unknown;
  children?: React.ReactNode;
  animations?: Animation[] | undefined;
  idx?: number;
}

function FiltersCard({ filteredItem, children, animations, idx }: FiltersCardProps) {
  // Safely assert the expected structure for item
  const item = filteredItem as { _type?: string; _id?: string; slug?: { current?: string } };
  const name = typeof idx === 'number' ? `filters-card-${idx}` : `filters-card-${item._id ?? item.slug?.current ?? ''}`;
  const animationRef = useAnimationsRegistration(name, animations);

  return (
    <div ref={animationRef} className="block">
      <Link href={`/${item._type ?? ''}s/${item.slug?.current ?? ''}`}>
        {children}
      </Link>
    </div>
  );
}

export default FiltersCard;