import React from "react";
import H3 from "@/components/html/{H3}/H3";
import { contentCardClasses } from "./css/contentCardClasses";

interface ContentCardProps {
  content: unknown;
}

export default function ContentCard({ content }: ContentCardProps) {
  const item = content as { title?: string };
  return (
    <div className={contentCardClasses}>
      <H3>
        {item.title ?? ''}
      </H3>
    </div>
  );
}