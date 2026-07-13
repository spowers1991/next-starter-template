"use client"

import React from "react";
import type { Post } from "@/services/[Posts]/{Post}/types/Post";
import P from "@/components/html/{P}/P";
import Span from "@/components/html/{Span}/Span";
import { PortableText } from "@portabletext/react";
import Article from "@/components/html/{Article}/Article";
import H2 from "@/components/html/{H2}/H2";

const formatDateUTC = (value?: string) => {
  if (!value) return "Unknown";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Unknown";

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};


interface PostArticleProps {
  post: Post;
}

export default function PostArticle({ post }: PostArticleProps) {

  return (
    <Article>
        <div className="md:col-span-2 space-y-6">
            <div>
                <H2>
                    Summary
                </H2>
                <P>
                    <Span>
                        Release Date:
                    </Span>
                    { post?.publishedAt && (
                      <>
                        &nbsp;
                        {formatDateUTC(post.publishedAt)}
                      </>
                    )}
                </P>
                <P>
                <Span>
                    Popularity:
                </Span>
                    &nbsp;
                    {post?.title}
                </P>
            </div>
            <div>
                <H2>
                Overview
                </H2>
                <PortableText value={post?.overview} />
            </div>

        </div>
    </Article>
  );
}