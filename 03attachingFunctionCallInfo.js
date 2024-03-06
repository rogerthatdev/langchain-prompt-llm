/* Attaching Function Call Info as keyword arguments (kwargs)*/

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const prompt = PromptTemplate.fromTemplate(`Tell me a poem about {subject}`);

const model = new ChatOpenAI({});


const functionSchema = [
    {
        name: "joke",
        description: "A joke",
        parameters: {
            type: "object",
            properties: {
                setup: {
                    type: "string",
                    description: "The setup for the joke",
                },
                punchline: {
                    type: "string",
                    description: "The punchline for the joke",
                },
            },
            required: ["setup", "punchline"],
        },
    },
    {
        name: "haiku",
        description: "A japanese poem",
        parameters: {
            type: "object",
            properties: {
                line1: {
                    type: "string",
                    description: "The first line of the haiku",
                },
                line2: {
                    type: "string",
                    description: "The second line of the haiku",
                },
                line3: {
                    type: "string",
                    description: "The third line of the haiku",
                }
            }
        }
    }
];


const chain = prompt.pipe(
    model.bind({
        functions: functionSchema,
        // function_call: { name: "joke" },
    })
);

const result = await chain.invoke({ subject: "bears" });

console.log(result);