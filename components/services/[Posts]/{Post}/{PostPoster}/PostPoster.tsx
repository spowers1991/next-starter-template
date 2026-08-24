"use client"

import React from "react";
import type { Post } from "@/services/[Posts]/{Post}/types/Post";
import SanityImage from "@/components/assets/{SanityImage}/SanityImage";
import { safeImageUrl } from "@/lib/sanity/helpers/image";


interface PostPosterProps {
  post: Post;
}

export default function PostPoster({ post }: PostPosterProps) {
  const posterUrl = safeImageUrl(post?.poster);
  
  return (
  <div className="w-full overflow-hidden">
        {posterUrl ? (
            <SanityImage
            src={posterUrl}
            alt={post?.title || post?.name}
            width={450}
            height={600}
            priority
            className="h-auto w-auto"
            />
        ) : (
            <div className="grid aspect-[2/3] w-full place-items-center bg-gray-300 text-gray-600">
              No poster available
            </div>
        )}
    </div>
  );
}