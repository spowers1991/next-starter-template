"use client";

import { useMemo, useRef, useState } from "react";
import H3 from "@/components/html/{H3}/H3";
import { GROQ_useGroq } from "@/lib/groq/actions/hooks/useGroq";
import { useThemes } from "@/lib/themes/state/ThemeContext";

interface GroqResponseProps {
  keywords: string[];
}

export default function GroqResponse({ keywords }: GroqResponseProps) {
  const { THEMES_activeTheme } = useThemes();
  const [response, setResponse] = useState("");
  const responseRef = useRef<HTMLDivElement | null>(null);
  const keywordsKey = useMemo(() => keywords, [keywords]);

  GROQ_useGroq({
    keywords: keywordsKey,
    responseRef,
    onMessage: (nextResponse: string) => {
      setResponse(nextResponse);
    },
  });

  return (
    <div className={THEMES_activeTheme.styles?.card}>
      <div ref={responseRef}>
        <H3>{response}</H3>
      </div>
    </div>
  );
}
