import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatOpenAI({});

const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a recipe that uses {ingredient}"
);

const chain = promptTemplate.pipe(model);

const result = await chain.invoke({ ingredient: "chicken, red pepper" });

console.log(result);

/*
  AIMessage {
    content: "Why don't bears wear shoes?\n\nBecause they have bear feet!",
  }
*/