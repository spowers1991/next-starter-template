"use client";

import { useEffect, useMemo, useRef } from "react";
import { useGroq } from "@/lib/groq/state/GroqContext";

type GROQ_useGroq_Options = {
  keywords?: string[];
  onMessage?: (message: string) => void;
  responseRef?: React.RefObject<HTMLDivElement | null>;
};

export function GROQ_useGroq(options?: GROQ_useGroq_Options) {
  const { GROQ_fetchGroq } = useGroq();
  const { keywords, onMessage, responseRef } = options ?? {};
  const keywordsKey = useMemo(() => (keywords ?? []).join("|"), [keywords]);

  const onMessageRef = useRef(onMessage);
  onMessageRef.current = onMessage;

  useEffect(() => {
    void GROQ_fetchGroq({
      keywords,
      responseElement: responseRef?.current ?? null,
      onMessage: (message) => {
        onMessageRef.current?.(message);
      },
    });
  }, [GROQ_fetchGroq, keywordsKey, responseRef]);

}
