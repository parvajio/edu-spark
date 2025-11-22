import { GoogleGenAI } from "@google/genai";
export const POST = async (req: Request) => {
  const formData = await req.json();

  const PROMT = `
Genrate Learning Course depends on following
details. In which Make sure to add Course Name, Description, Course Banner Image Prompt (Create a modern, flat-style 2D digital illustration representing user Topic. Include UI/UX elements such as mockup screens, text blocks, icons, buttons, and creative workspace tools. Add symbolic elements related to user Course, like sticky notes, design components, and visual aids. Use a vibrant color palette (blues, purples, oranges) with a clean, professional look. The illustration should feel creative, tech-savvy, and educational, ideal for visualizing concepts in user Course) for Course Banner in 3d format Chapter Name,, Topic under each chapters, Duration for each chapters etc, in JSON format only Schema:
{
"course":{
"name": "string",
"description": "string", "category": "string", "level": "string",
"include Video": "boolean",
"noOfChapters": "number",
"bannerImagePrompt": "string", "chapters": [
}
}
{
}
}
"chapterName": "string",
"duration": "string",
"topics": [ "string"
User Input:`;

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
          text: PROMT + JSON.stringify(formData),
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  // console.log(response.text);
  const text = response.text;
  const rawJson = text?.replace("```json", '').replace('```','');
  const JsonResponse = JSON.parse(rawJson || '{}');
  
  return Response.json(JsonResponse);
};
