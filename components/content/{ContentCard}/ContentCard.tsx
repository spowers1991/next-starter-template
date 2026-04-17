import React from "react";
import H3 from "@/components/html/{H3}/H3";
import { contentCardClasses } from "./css/contentCardClasses";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface ContentCardProps {
  content: unknown;
}

export default function ContentCard({ content }: ContentCardProps) {
  const item = content as { title?: string };
  const { THEMES_activeTheme } = useThemes();
  return (
    <div className={THEMES_activeTheme.styles?.card || contentCardClasses}>
      <H3>
        {item.title ?? ''}
      </H3>
    </div>
  );
}