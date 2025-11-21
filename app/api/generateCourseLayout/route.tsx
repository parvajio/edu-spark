import { GoogleGenAI } from "@google/genai";
export const POST = async (req: Request) => {
    
  const formData = await req.json();

  const apiKey = (globalThis as any).process?.env?.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey,
  });
  const tools = [
    {
      googleSearch: {},
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = "gemini-flash-latest";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
};
