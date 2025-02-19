import React, { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    

    const ingredientListItems = ingredients.map ( ingredient => (
        <li key = {ingredient}> {ingredient}</li>
    ))

    function handelSubmit(event){
          /**
         * Like before, don't worry about this FormData stuff yet.
         * Just use the newIngredient below to help you finish the
         * challenge.
         */
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        console.log(formData)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient ])

        
    }

    return(
        <main>
        <form className="add-ing-form" onSubmit={handelSubmit}>
            <input type="text" placeholder="e.g. oregano" aria-label="Add Ingredient" name = "ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
            {ingredientListItems}
        </ul>
    </main>
    )
}