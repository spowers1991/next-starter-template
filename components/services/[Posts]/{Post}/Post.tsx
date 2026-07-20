"use client";

import React from "react";
import type { Post } from "@/services/[Posts]/{Post}/types/Post";

import H1 from "@/components/html/{H1}/H1";
import Section from "@/components/html/{Section}/Section";

import Animator from "@/components/animations/Animator";
import PostArticle from "./{PostArticle}/PostArticle";
import PostPoster from "./{PostPoster}/PostPoster";

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <Section>
      <Animator 
        id={`[Post]_<Animator/>`}
        animations={[{name: "fadeIn", config: { duration: 3, delay: 0.1 }}]}
      >
      <H1
      id={`[Post]_<H1/>`}
      animations={[
          { 
            name: 'textReveal',
            config: {
              duration: 0.01,
              delay: 0.1,
            }
          }
        ]} 
      >
        Post
      </H1>

      <PostPoster post={post} />
      &nbsp;
      <PostArticle post={post} />

      </Animator>
    </Section>
  );
}