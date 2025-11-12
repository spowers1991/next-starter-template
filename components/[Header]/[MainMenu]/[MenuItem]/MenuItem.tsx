"use client";

import React from "react";
import Link from "next/link";
import type { MenuItemType } from "./types/MenuItemType";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <li key={item._id} className="hover:underline">
      <Link href={`/${item._type}s/${item.slug.current}`}>
        <div>{item.title ?? item.name}</div>
      </Link>
    </li>
  );
};

export default MenuItem;
