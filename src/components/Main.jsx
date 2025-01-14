import React from "react"

export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientListItems = ingredients.map ( ingredient => (
        <li key = {ingredient}> {ingredient}</li>
    ))

    function handelSubmit(event){
        event.preventDefault()
        const formData  = new FormData(event.currentTarget);
        console.log(formData)
        const newIngredient = formData.get("ingredient")
        
        // ingredients.push(newIngredient)
        console.log(ingredients)

        

        
    }

    return(
        <main>
        <form className="add-ing-form" onSubmit={handelSubmit}>
            <input type="text" placeholder="e.g. oregano" aria-label="Add Ingrendient" name = "ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
            {ingredientListItems}
        </ul>
    </main>
    )
}