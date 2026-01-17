"use client";

import React from "react";
import Image from "next/image";
import type { SVG } from "@/lib/assets/svgs/types/SVG";

export default function SVG({
  src = "/images/svg/arrow-right.svg",
  alt = "SVG",
  width = 20,
  height = 20,
  className,
}: SVG) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
