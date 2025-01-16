const IngredientsList = (props) => {
	return (
		<section>
			<div className="ingredients-container">
				<h2>Ingredients on hand:</h2>
				<ul className="ingredients-list">
					{props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
				</ul>
			</div>
			{props.ingredients.length > 3 && (
				<div className="get-recipe-container" ref={props.recipeRef}>
					<div>
						<h2>Ready for a recipe?</h2>
						<p>Generate a recipe from your list of ingredients</p>
					</div>
					<button onClick={props.getRecipe} className="get-recipe-btn">Get a recipe</button>
				</div>
			)}
		</section>
	)
}

export default IngredientsList
