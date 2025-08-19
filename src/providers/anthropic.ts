import axios from "axios";
import { AIRequest, AIResponse } from "../types";

export async function anthropicHandler(req: AIRequest): Promise<AIResponse> {
  const res = await axios.post(
    "https://api.anthropic.com/v1/messages",
    {
      model: req.model,
      messages: req.messages,
    },
    { headers: { "x-api-key": process.env.ANTHROPIC_API_KEY } }
  );

  return {
    text: res.data.content[0].text,
    raw: res.data,
  };
}
