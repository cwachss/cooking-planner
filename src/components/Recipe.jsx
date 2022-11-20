import React from 'react'
import { useState, useEffect } from 'react';
import { getRecipe } from '../api/getRecipe';
const axios = require('axios').default;


export const Recipe = ()  => {

    
    const [recipe, setRecipe] = useState('')

    

    useEffect(() => {
        getRecipe().then((res, err) => {
            
            setRecipe(JSON.stringify(res))
            console.log(res)
        })
    }, []) //only call getRecipe() on the first reder because we don't want to get rate-limited
    

    return (
        <>
            <p>Hello yeshivishe oylam!!!!</p>
            <p>{recipe}</p>
        </>
    )
}