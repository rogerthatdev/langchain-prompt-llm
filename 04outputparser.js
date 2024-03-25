/* PromptTemplate + LLM + Output parser  */

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

const model = new ChatOpenAI({});

const promptTemplate = PromptTemplate.fromTemplate(
  "Tell me a joke about {topic}"
);


const outputParser = new StringOutputParser();

// const chain = promptTemplate.pipe(model).pipe(outputParser);
// this is an alternative to using pipe().pipe() syntax
const chain = RunnableSequence.from([promptTemplate, model, outputParser])


const result = await chain.invoke({ topic: "bears" });

console.log(result);