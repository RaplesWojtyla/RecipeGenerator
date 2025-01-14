import express from "express"
import cors from "cors"
import { generateRecipeWithHuggingFace, generateRecipeWithGemini } from "./api/aiService.js"

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Server is Ready')
})

app.post('/api/generateRecipe', async(req, res) => {
	const ingredients = req.body
	// const recipe = await generateRecipeWithHuggingFace(ingredients) // I'm gonna use this when experimenting with other AI models from HF.
	const recipe = await generateRecipeWithGemini(ingredients) // Right now, Gemini 1.5-flash is better

	if (recipe.success) {
		console.log(recipe.response)

		res.status(200).send({
			success: recipe.success,
			response: recipe.response
		})
	} else {
		res.status(500).send({
			success: recipe.success,
			response: recipe.response
		})
	}
})

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
})
