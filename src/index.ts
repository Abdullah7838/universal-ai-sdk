import { AIRequest, AIResponse } from "./types";
import { openaiHandler } from "./providers/openai";
import { anthropicHandler } from "./providers/anthropic";
import { deepseekHandler } from "./providers/deepseek";

export async function chat(req: AIRequest): Promise<AIResponse> {
  switch (req.provider) {
    case "openai":
      return openaiHandler(req);
    case "anthropic":
      return anthropicHandler(req);
    case "deepseek":
      return deepseekHandler(req);
    default:
      throw new Error("Unsupported provider: " + req.provider);
  }
}
