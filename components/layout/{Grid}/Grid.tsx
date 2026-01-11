"use client";

import { ReactNode } from "react";

interface GridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export default function Grid<T>({
  items,
  renderItem,
  className = "",
}: GridProps<T>) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}
    >
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}
