"use client";

import React from "react";
import Link from "next/link";

interface PostItemProps {
  item: any;
}

const MenuItem: React.FC<PostItemProps> = ({ item }) => {

  return (
    <li key={item._id} className="hover:underline">
        <Link href={`/${item._type}s/${item?.slug?.current}`}>
            <div>
                {
                    item.title ? item.title : item.name
                }
            </div>
        </Link>
    </li>
  );
};

export default MenuItem;
