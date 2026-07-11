import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as { message?: string }));
    const message =
      typeof body.message === "string" && body.message.trim().length > 0
        ? body.message.trim()
        : "Explain the importance of fast language models";

    console.log("[groq] incoming message:", message);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      model: "llama-3.1-8b-instant",
    });

    const response = chatCompletion.choices[0]?.message?.content?.trim() || "";

    console.log("[groq] response:", response);

    return Response.json({ response });
  } catch (error) {
    console.error("Groq API route failed", error);

    return Response.json(
      { response: "Unable to load response." },
      { status: 500 }
    );
  }
}
