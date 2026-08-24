"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

// A tiny 1×1 transparent pixel encoded as a blurred gray placeholder.
// This is used as the default blurDataURL so Next.js can show a smooth
// blur preview before the full image loads.
const DEFAULT_BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

type SanityImageProps = Omit<ImageProps, "onLoad"> & {
  containerClassName?: string;
};

export default function SanityImage({
  className,
  containerClassName,
  priority,
  placeholder,
  blurDataURL,
  ...props
}: SanityImageProps) {
  const [loaded, setLoaded] = useState(false);

  const resolvedPlaceholder = placeholder ?? "blur";
  const resolvedBlurDataURL =
    resolvedPlaceholder === "blur"
      ? (blurDataURL ?? DEFAULT_BLUR_DATA_URL)
      : undefined;

  return (
    <div className={`relative ${containerClassName ?? ""}`}>
      <Image
        {...props}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        placeholder={resolvedPlaceholder}
        blurDataURL={resolvedBlurDataURL}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
      />
    </div>
  );
}
