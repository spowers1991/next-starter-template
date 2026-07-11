"use client";

import { useMemo } from "react";
import GroqResponse from "@/lib/groq/components/GroqResponse";

interface BannerProps {
  content: unknown;
}

export default function Banner({ content: _content }: BannerProps) {
  const keywords = useMemo(
    () => (typeof _content === "string" ? [_content] : ["How are you?"]),
    [_content]
  );

  return (
    <GroqResponse keywords={keywords} />
  );
}