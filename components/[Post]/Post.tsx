"use client"

import React from "react";
import { PortableText } from "@portabletext/react";
import Article from "@/components/[Article]/Article";
import Section from "../[Section]/Section";

interface PostProps {
  data: any;
}

function Post( { data } : PostProps) {

  return (
    <div>
      <Article>
        {data.title || data.name }
      </Article>

      <Section>
        <PortableText value={data.overview} />
      </Section>
    </div>
  );
}

export default Post;
