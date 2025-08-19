# universal-ai-sdk

A **unified AI SDK for Node.js/TypeScript** that lets you talk to **multiple AI providers (OpenAI, Anthropic/Claude, DeepSeek, etc.)** with **one simple API**.  
No need to learn multiple SDKs — just plug in your API key and go! 🚀

---

## Features

- One API for multiple AI providers  
- Supports **OpenAI**, **Anthropic (Claude)**, **DeepSeek** (more coming soon)  
- **TypeScript support** out of the box  
- **Switch providers easily** (no code changes needed)  
- **Normalized response format** (`{ text, raw }`)  

---

## Installation

```bash
npm install universal-ai-sdk
🔑 Setup
Add your API keys to a .env file or system environment variables:

ini

OPENAI_API_KEY=sk-xxxx
ANTHROPIC_API_KEY=sk-ant-xxxx
DEEPSEEK_API_KEY=sk-deep-xxxx
 Usage
Example 1: OpenAI (ChatGPT)
ts

import { chat } from "universal-ai-sdk";

async function run() {
  const res = await chat({
    provider: "openai",
    model: "gpt-4",
    messages: [{ role: "user", content: "Tell me a joke about cats" }],
  });

  console.log(res.text);
}

run();
Example 2: Switch to Anthropic (Claude)
ts

const res = await chat({
  provider: "anthropic",
  model: "claude-3-opus",
  messages: [{ role: "user", content: "Tell me a joke about cats" }],
});

console.log(res.text);
Example 3: DeepSeek
ts

const res = await chat({
  provider: "deepseek",
  model: "deepseek-chat",
  messages: [{ role: "user", content: "Write a haiku about the moon" }],
});

console.log(res.text);
API Reference
chat(options: AIRequest): Promise<AIResponse>
AIRequest
ts

{
  provider: "openai" | "anthropic" | "deepseek";
  model: string;
  messages: { role: "system" | "user" | "assistant"; content: string }[];
  stream?: boolean; // (coming soon)
}
AIResponse
ts

{
  text: string; // normalized AI reply
  raw: any;     // full provider response
}
 Roadmap
 Streaming responses (async generator)

 Token usage tracking

 Support for embeddings & images

 CLI tool (npx universal-ai "Hello" --provider openai)

 More providers (Gemini, Groq, Mistral, Llama 3, etc.)

 Contributing
Pull requests, issues, and new provider integrations are welcome! 🎉

📜 License
MIT © 2025 Muhammad Abdullah
📧 Email: needhelpvcc@gmail.com

yaml

