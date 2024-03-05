// Challenge: use stop sequence to make response only 3 items long
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

const prompt = PromptTemplate.fromTemplate(`Give me a list of facts about {subject}`);

const model = new ChatOpenAI({});
// use bind() to use a stop sequence
const chain = prompt.pipe(model.bind({ stop: ["\n4."] }));

const result = await chain.invoke({ subject: "capybaras" });

console.log(result);