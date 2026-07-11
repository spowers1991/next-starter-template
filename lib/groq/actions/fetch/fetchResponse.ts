type FetchResponseOptions = {
  message?: string | string[];
};

export async function fetchResponse(
  { message = "Explain the importance of fast language models" }: FetchResponseOptions = {}
): Promise<string> {
  const normalizedMessage = Array.isArray(message) ? message.join(", ") : message;

  const res = await fetch("/api/groq", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: normalizedMessage }),
  });

  const data = (await res.json().catch(() => null)) as
    | { response?: string }
    | null;

  return data?.response?.trim() || "";
}