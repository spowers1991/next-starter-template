"use client"

import React from "react";
import { PortableText } from "@portabletext/react";
import Article from "@/components/{Article}/Article";
import Section from "../../{Section}/Section";
import type { Post } from "@/lib/sanity/types/Post";

interface PostProps {
  data: Post;
}

function Post( { data } : PostProps) {

  return (
    <Section>
      
      <Article>
        {data.title || data.name }
      </Article>

      <Article>
        <PortableText value={data.overview} />
      </Article>

    </Section>
  );
}

export default Post;
