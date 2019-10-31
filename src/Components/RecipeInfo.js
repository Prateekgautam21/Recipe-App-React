import React from 'react'
import style from "./recipe.module.css";

function RecipeInfo(props) {
    const {title, calories, ingredients, image} = props
    
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <h2>{calories}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipeInfo
