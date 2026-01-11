"use client"

import React, { ReactNode } from "react";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface ArticleProps {
  children:  ReactNode;
}

function Article( { children } : ArticleProps) {
  const { THEMES_activeTheme } = useThemes();

  return (
    <article className={THEMES_activeTheme.styles.article}>
      {children}
    </article>
  );
}

export default Article;
