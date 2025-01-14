import { HfInference } from "@huggingface/inference"
import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv"

dotenv.config()

const SYSTEM_PROMPT = "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page"


// Hugging Face API
const hf = new HfInference(process.env.HF_ACCESS_TOKEN)

export const generateRecipeWithHuggingFace = async(ingredientsArr) => {
	// I keep this so I can experiment with other AI models available on HF
	const ingredientsStr = ingredientsArr.join(", ")
	console.log("Generating Recipe...")

	try {
		const res = await hf.chatCompletion({
			model: "Qwen/Qwen2.5-Coder-32B-Instruct", // AI models from HF
			messages: [
				{ role: "system", content: SYSTEM_PROMPT },
				{ role: "user", content: `I have ${ingredientsStr}. Please give me a recipe you'd recommend I make!` }
			],
			max_tokens: 1024,
		})

		return {
			success: true,
			response: res.choices[0].message.content
		}
	} catch (err) {
		console.error(err.message)

		return {
			success: false,
			response: err.message
		}
	}
}


// Gemini - Generative Language API
const generativeAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export const generateRecipeWithGemini = async(ingredientsArr) => {
	const ingredientsStr = ingredientsArr.join(", ")

	try {
		const model = await generativeAI.getGenerativeModel({
			model: "gemini-1.5-flash",
			systemInstruction: SYSTEM_PROMPT
		})
	
		const res = await model.generateContent({
			contents: [
				{
					role: 'user',
					parts: [
						{
							text: `I have ${ingredientsStr}. Please give me a recipe you'd recommend I make!`
						}
					],
				}
			],
			generationConfig: {
				maxOutputTokens: 1000
			}
		})

		return {
			success: true,
			response: res.response.text()
		}
	} catch (err) {
		console.error(err.message)

		return {
			success: false,
			response: err.message
		}
	}
}
