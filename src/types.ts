export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIRequest {
  provider: "openai" | "anthropic" | "deepseek";
  model: string;
  messages: AIMessage[];
  stream?: boolean;
}

export interface AIResponse {
  text: string;
  raw: any;
}
