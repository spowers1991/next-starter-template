"use client"

import React from "react";
import { PortableText } from "@portabletext/react";
import H1 from "@/components/html/{H1}/H1";
import Article from "@/components/html/{Article}/Article";
import Section from "@/components/html/{Section}/Section";
import Image from 'next/image'
import { urlForImage } from "@/lib/sanity/helpers/image";
import type { Post } from "@/lib/sanity/types/Post";
import Animator from "@/components/animations/Animator";

interface PostProps {
  data: Post;
}

function Post( { data: post } : PostProps) {

  return (
    <Section>
      
      <Article>
        <H1
        id={`{Post}_<H1/>`}
        animations={[
            { 
              name: 'textReveal'
            }
          ]} 
        >
          {post?.name}
        </H1>
      </Article>

      <Article>
        
        {post?.image &&
          <Animator
            id={`{Post}_<Image/>`}
            animations={[
              { name: 'fadeIn', config: { delay: 0.4, duration: 1 } }
            ]}
          >
            <Image
              src={urlForImage(post?.image).width(800).height(600).url()}  
              alt={post?.name}
              width={800}
              height={600}
              priority
            />
          </Animator>
        }
      
        <PortableText value={post?.overview} />
      </Article>

    </Section>
  );
}

export default Post;
