"use client"

import React from "react";
import { PortableText } from "@portabletext/react";
import H1 from "@/components/html/{H1}/H1";
import Article from "@/components/html/{Article}/Article";
import Section from "@/components/html/{Section}/Section";
import type { Post } from "@/lib/sanity/types/Post";

interface PostProps {
  data: Post;
}

function Post( { data } : PostProps) {

  return (
    <Section>
      
      <Article>
        <H1 animations={[{name : "text-reveal"}]}>
          {data.title || data.name }
        </H1>
      </Article>

      <Article>
        <PortableText value={data.overview} />
      </Article>

    </Section>
  );
}

export default Post;
