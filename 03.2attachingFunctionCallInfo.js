/* Attaching Function Call Info as keyword arguments (kwargs)*/

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const prompt = PromptTemplate.fromTemplate(`Tell me a recipe for {dish}`);

const model = new ChatOpenAI({});


const functionSchema = [
    {
        name: "recipe",
        description: "A recipe",
        parameters: {
            type: "object",
            properties: {
                ingredients: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    description: "list of ingredients",
                },
                directions: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                    description: "Numbered steps to make the recipe",
                },
            },
            required: ["ingredients", "directions"],
        },
    },
];


const chain = prompt.pipe(
    model.bind({
        functions: functionSchema,
        function_call: { name: "recipe" },
    })
);
const result = await chain.invoke({ dish: "rice and beans"});

console.log(result);