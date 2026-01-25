import React from "react";
import H3 from "@/components/html/{H3}/H3";
import P from "@/components/html/{P}/P";
import { contentCardClasses } from "./css/contentCardClasses";

interface ContentCardProps {
  content: any;
}

export default function ContentCard({ content }: ContentCardProps) {
  return (
    <div className={contentCardClasses}>
      <H3>
        {content?.title}
      </H3>
      <P>
        {content?.description}
      </P>
    </div>
  );
}