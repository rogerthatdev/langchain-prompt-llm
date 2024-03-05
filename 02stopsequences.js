// Challenge: use stop sequence to make response only 3 items long
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const prompt = PromptTemplate.fromTemplate(`Give me a list of facts about {subject}`);

const model = new ChatOpenAI({});

const chain = prompt.pipe(model);

const result = await chain.invoke({ subject: "capybaras" });

console.log(result);