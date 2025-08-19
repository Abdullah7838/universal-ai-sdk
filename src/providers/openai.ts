import axios from "axios";
import { AIRequest, AIResponse } from "../types";

export async function openaiHandler(req: AIRequest): Promise<AIResponse> {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: req.model,
      messages: req.messages,
      stream: false,
    },
    { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
  );

  return {
    text: res.data.choices[0].message.content,
    raw: res.data,
  };
}
