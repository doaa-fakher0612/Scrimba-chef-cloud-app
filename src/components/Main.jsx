import React, { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    

    const ingredientListItems = ingredients.map ( ingredient => (
        <li key = {ingredient}> {ingredient}</li>
    ))

    function handelSubmit(formData){
 
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient ])

        
    }

    return(
        <main>
        <form action ={handelSubmit} className="add-ing-form">
            <input type="text" placeholder="e.g. oregano" aria-label="Add Ingredient" name = "ingredient"/>
            <button>Add Ingredient</button>
        </form>
        <ul>
            {ingredientListItems}
        </ul>
    </main>
    )
}