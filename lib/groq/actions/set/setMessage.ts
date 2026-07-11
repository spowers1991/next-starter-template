export type GroqStatus = "idle" | "loading" | "success" | "error";

type GroqStatusMessages = Record<GroqStatus, string>;

type SetMessageParams = {
  action: () => Promise<string>;
  setMessage: (message: string) => void;
  setStatus?: (status: GroqStatus) => void;
  statusMessages?: Partial<GroqStatusMessages>;
};

const defaultStatusMessages: GroqStatusMessages = {
  idle: "",
  loading: "Loading...",
  success: "",
  error: "Unable to load response.",
};

export async function setMessage({
  action,
  setMessage,
  setStatus,
  statusMessages,
}: SetMessageParams): Promise<string> {
  const messages = { ...defaultStatusMessages, ...statusMessages };

  setStatus?.("loading");
  setMessage(messages.loading);

  try {
    const response = await action();
    const nextMessage = response || messages.success;

    setStatus?.("success");
    setMessage(nextMessage);

    return nextMessage;
  } catch {
    setStatus?.("error");
    setMessage(messages.error);

    return messages.error;
  }
}