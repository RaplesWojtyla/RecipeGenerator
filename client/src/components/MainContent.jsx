import { useState, useRef, useEffect } from 'react'
import IngredientsList from './IngredientsList'
import GeminiRecipe from './GeminiRecipe'

const MainContent = () => {
	// "chicken", "all the main spices", "corn", "heavy cream", "pasta"
	const [ingredients, setIngredients] =  useState(
		[]
	)
	const [recipe, setRecipe] = useState("")
	const inputRef = useRef(null)
	const recipeSectionRef = useRef(null)

	useEffect(() => {
		if(recipe && recipeSectionRef.current) {
			recipeSectionRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}, [recipe])

	const addIngredient = (event) => {
		event.preventDefault()

		const formData = new FormData(event.target)
		const newIngredient = formData.get('ingredient')

		setIngredients(oldIngredients => [
			...oldIngredients,
			newIngredient
		])

		event.target.reset()
		inputRef.current.focus()
	}

	const getRecipe = async() => {
		const res = await fetch('/api/generateRecipe', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(ingredients)
		})

		const data = await res.json()

		setRecipe(data.response)
	}

	return (
		<main>
			<form onSubmit={addIngredient} method='POST' className='ingredients-input' >
				<input
					type="text"
					placeholder="e.g. Tomato" 
					aria-label="Add ingredient"
					name="ingredient"
					ref={inputRef}
					required
				/>
				<button>Add Ingredients</button>
			</form>

			{ingredients.length > 0 && (
				<IngredientsList 
					ingredients={ingredients}
					getRecipe={getRecipe}
					recipeRef={recipeSectionRef}
				/>
			)}

			{recipe != "" && (
				<GeminiRecipe 
					recipe={recipe}
				/>
			)}
		</main>
	)
}

export default MainContent