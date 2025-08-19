import axios from "axios";
import { AIRequest, AIResponse } from "../types";

export async function deepseekHandler(req: AIRequest): Promise<AIResponse> {
  const res = await axios.post(
    "https://api.deepseek.com/v1/chat/completions",
    {
      model: req.model,
      messages: req.messages,
    },
    { headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` } }
  );

  return {
    text: res.data.choices[0].message.content,
    raw: res.data,
  };
}
