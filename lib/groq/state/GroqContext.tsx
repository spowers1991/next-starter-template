"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  fetchResponse as ACTIONS_fetchResponse,
} from "@/lib/groq/actions/fetch/fetchResponse";
import {
  setMessage as ACTIONS_setMessage,
  type GroqStatus,
} from "@/lib/groq/actions/set/setMessage";
import type { GROQ_MessageEntry } from "@/lib/groq/types/GROQ_MessageEntry";
import type { GROQ_SetMessageInput } from "@/lib/groq/types/GROQ_SetMessageInput";
import type { GroqContextType } from "@/lib/groq/types/GroqContextType";

const GroqContext = createContext<GroqContextType | undefined>(undefined);

export function GroqProvider({ children }: { children: ReactNode }) {
  const [GROQ_status, GROQ_setStatus] = useState<GroqStatus>("idle");
  const [GROQ_currentMessage, GROQ_setCurrentMessage] = useState<string>("");
  const [GROQ_messages, GROQ_setMessages] = useState<GROQ_MessageEntry[]>([]);

  const GROQ_createMessageId = useCallback(() => {
    return (
      globalThis.crypto?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(36).slice(2)}`
    );
  }, []);

  const GROQ_appendMessage = useCallback((
    message: string,
    responseElement?: HTMLDivElement | null
  ) => {
    GROQ_setMessages((prev) => [
      ...prev,
      {
        id: GROQ_createMessageId(),
        message,
        timestamp: new Date().toISOString(),
        responseElement,
      },
    ]);
  }, [GROQ_createMessageId]);

  const GROQ_fetchResponse = useCallback(
    async (options?: { message?: string | string[] }) => ACTIONS_fetchResponse(options),
    []
  );

  const GROQ_setMessage = useCallback(
    async ({ action, statusMessages, onMessage }: GROQ_SetMessageInput) => {
      const nextMessage = await ACTIONS_setMessage({
        action,
        setStatus: GROQ_setStatus,
        statusMessages,
        setMessage: (message) => {
          GROQ_setCurrentMessage(message);
          if (onMessage) {
            onMessage(message);
          }
        },
      });

      return nextMessage;
    },
    []
  );

  const GROQ_fetchGroq = useCallback(
    async (options?: {
      keywords?: string[];
      responseElement?: HTMLDivElement | null;
      onMessage?: (message: string) => void;
    }) => {
      const { keywords, responseElement, onMessage } = options ?? {};
      const message = await GROQ_setMessage({
        onMessage,
        action: async () => {
          const responseText = await GROQ_fetchResponse({
            message: keywords,
          });
          return responseText || "Unable to load response.";
        },
        statusMessages: {
          loading: "Loading content...",
          error: "Unable to load response.",
        },
      });

      GROQ_appendMessage(message, responseElement);
      return message;
    },
    [GROQ_appendMessage, GROQ_fetchResponse, GROQ_setMessage]
  );

  const value = useMemo(
    () => ({
      GROQ_status,
      GROQ_currentMessage,
      GROQ_messages,
      GROQ_fetchResponse,
      GROQ_setMessage,
      GROQ_fetchGroq,
    }),
    [
      GROQ_status,
      GROQ_currentMessage,
      GROQ_messages,
      GROQ_fetchResponse,
      GROQ_setMessage,
      GROQ_fetchGroq
    ]
  );

  return <GroqContext.Provider value={value}>{children}</GroqContext.Provider>;
}

export function useGroq() {
  const context = useContext(GroqContext);
  if (!context) {
    throw new Error("useGroq must be used within a GroqProvider");
  }
  return context;
}