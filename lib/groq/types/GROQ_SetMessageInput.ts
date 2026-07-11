import type { GroqStatus } from "@/lib/groq/actions/set/setMessage";

export interface GROQ_SetMessageInput {
  action: () => Promise<string>;
  statusMessages?: Partial<Record<GroqStatus, string>>;
  onMessage?: (message: string) => void;
}