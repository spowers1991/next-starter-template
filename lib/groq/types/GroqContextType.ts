import type { GroqStatus } from "@/lib/groq/actions/set/setMessage";
import type { GROQ_MessageEntry } from "@/lib/groq/types/GROQ_MessageEntry";
import type { GROQ_SetMessageInput } from "@/lib/groq/types/GROQ_SetMessageInput";

export interface GroqContextType {
  GROQ_status: GroqStatus;
  GROQ_currentMessage: string;
  GROQ_messages: GROQ_MessageEntry[];
  GROQ_fetchResponse: (options?: { message?: string | string[] }) => Promise<string>;
  GROQ_setMessage: (input: GROQ_SetMessageInput) => Promise<string>;
  GROQ_fetchGroq: (options?: {
    keywords?: string[];
    responseElement?: HTMLDivElement | null;
    onMessage?: (message: string) => void;
  }) => Promise<string>;
}