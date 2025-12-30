"use client";

import React from "react";
import Link from "next/link";
import H1 from "@/components/{H1}/H1"
import H3 from "../{H3}/H3";
import Section from "../{Section}/Section";
import Grid from "../{Grid}/Grid";
import { usePathname } from 'next/navigation'
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { transformString } from "@/lib/parsers/transformString";

import type { Post } from "@/lib/sanity/types/Post";

interface PersonsProps {
  posts: Post[]; 
}

export default function Persons({ posts }: PersonsProps) {
  const pathname = usePathname()
  const cleanPath = removeLeadingSlash(pathname);
  return (
    <Section>
      <H1>
        {transformString(cleanPath, "pascal")}
      </H1>
      <Grid
        items={posts}
        renderItem={(post) => (
          <Link key={post._id} href={`${pathname}/${post.slug.current}`}>
            <H3>
              {post.title}
            </H3>
          </Link>
        )}
      />
    </Section>
  );
}
