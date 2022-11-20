import React from 'react'
import { useState, useEffect } from 'react';
import { getRecipe } from '../api/getRecipe';
const axios = require('axios').default;


export const Recipe = ()  => {

    const recipeUrl = 'https://tasty.p.rapidapi.com/recipes/auto-complete'
    const kosherUrl = 'https://www.kosher.com/recipe/5-minute-yummy-chicken-2701'
    
    const [recipe, setRecipe] = useState('')

    

    useEffect(() => {
        getRecipe().then((res, err) => {
            
            setRecipe(JSON.stringify(res))
            console.log(err)
        })
    }, []) //only call getRecipe() on the first reder because we don't want to get rate-limited
    

    return (
        <>
            <p>Hello yeshivishe oylam!!!!</p>
            <p>{recipe}</p>
        </>
    )
}