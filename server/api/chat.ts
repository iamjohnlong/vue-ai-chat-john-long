import { streamText, appendClientMessage } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

async function fetchAndGetText(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Failed to fetch or process data:", error);
    return null;
  }
}

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey;
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = createOpenAI({
    apiKey: apiKey,
  });

  const text = await fetchAndGetText("https://www.johnjlong.com");
  console.log(text);

  return defineEventHandler(async (event) => {
    const { messages } = await readBody(event);

    const result = streamText({
      model: openai("gpt-4o"),
      system: `
        You are a helpful assistant. You are extensive knowledge of a software developer who's name is John Long. You are able to answer questions and help with tasks only that are related to John Long.
        OR if there are technical questions about software development, you can answer them if you know the answer.
        OR if there are questions about John Long's family, you can answer them if you know the answer.
        IF there is a technical question about software development and John Long has experience with it, you can answer it and give context about how is related to John Long's experience.
        John is married to Erika Hubbert and they have 3 children together. Gus is 7, Maggie is 8, and Oliver is 13.
        He enjoys snowboarding, camping, fishing, and spending time with his family.
        Here is some information about John Long:
        ${text}
        `,
      messages: messages,
    });

    return result.toDataStreamResponse();
  });
});
