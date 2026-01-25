"use client";

import{ useRef } from "react";
import Link from "next/link";
import { useAnimations } from "@/lib/animations/hooks/useAnimations";
import type { Animation } from "@/lib/animations/types/Animation";

interface FiltersCardProps {
  filteredItem: unknown;
  children?: React.ReactNode;
  animations?: Animation[] | undefined;
}

function FiltersCard({ filteredItem, children, animations }: FiltersCardProps) {

  const ref = useRef<HTMLDivElement | null>(null);
  useAnimations(ref, animations);

  const item = filteredItem as any;

  return (
    <Link href={`/${item._type}s/${item.slug.current}`} className="block">
      <div
        ref={ref}
      >
        {children}
      </div>
    </Link>
  );
}

export default FiltersCard;