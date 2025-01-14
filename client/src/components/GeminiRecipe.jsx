import ReactMarkdown from "react-markdown"

const GeminiRecipe = (props) => {
	return (
		<section className="suggested-recipe-container" aria-live="polite">
			<h2>Recipe Recommend:</h2>
			<ReactMarkdown>
				{props.recipe}
			</ReactMarkdown>
		</section>
	)
}

export default GeminiRecipe
