"use client"

import React from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";
import { PortableText } from "@portabletext/react";
import Article from "@/components/[Article]/Article";

interface PostProps {
  data: any;
}

function Post( { data } : PostProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <>
      <Article>
        {data.title}
      </Article>

      <section className={THEMES_activeTheme.styles.section}>
        <PortableText value={data.overview} />
      </section>
    </>
  );
}

export default Post;
