"use client";

import Link from "next/link";
import type { Animation } from "@/lib/animations/types/Animation";

interface FiltersCardProps {
  filteredItem: unknown;
  children?: React.ReactNode;
  animations?: Animation[] | undefined;
}

function FiltersCard({ filteredItem, children }: FiltersCardProps) {

  const item = filteredItem as any;

  return (
    <Link href={`/${item._type}s/${item.slug.current}`} className="block">
      {children}
    </Link>
  );
}

export default FiltersCard;