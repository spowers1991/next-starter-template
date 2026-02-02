"use client";

import React from "react";
import Link from "next/link";
import H1 from "@/components/html/{H1}/H1"
import H3 from "@/components/html/{H3}/H3";
import Section from "@/components/html/{Section}/Section";
import GridRepeater from "@/components/layout/grid/{GridRepeater}/GridRepeater";
import { usePathname } from 'next/navigation'
import { removeLeadingSlash } from "@/lib/parsers/removeLeadingSlash";
import { transformString } from "@/lib/parsers/transformString";

import type { Post } from "@/lib/sanity/types/Post";

interface PostsProps {
  posts: Post[]; 
}

export default function Persons({ posts }: PostsProps) {
  const pathname = usePathname()
  const cleanPath = removeLeadingSlash(pathname);
  return (
    <Section>
      <H1
      id={`[posts]`}
      animations={[
          { 
            name: 'textReveal'
          }
        ]} 
      >
        {transformString(cleanPath, "pascal")}
      </H1>
      <GridRepeater
        items={posts}
        renderItem={(post) => (
          <Link key={post._id} href={`${pathname}/${post.slug.current}`}>
            <H3>
              {post.title}
            </H3>
          </Link>
        )}
        cols={4}
      />
    </Section>
  );
}
