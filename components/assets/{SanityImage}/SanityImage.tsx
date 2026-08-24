"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

type SanityImageProps = Omit<ImageProps, "onLoad"> & {
  containerClassName?: string;
};

export default function SanityImage({
  className,
  containerClassName,
  priority,
  ...props
}: SanityImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative bg-gray-200 ${containerClassName ?? ""}`}>
      <Image
        {...props}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </div>
  );
}
