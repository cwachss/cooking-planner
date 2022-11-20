import React from 'react'
import { getRecipe } from '../api/getRecipe'


export const Hi = ()  => {
    return (
        <>
            <p>Hello yeshivishe oylam!!!!</p>
            {getRecipe()}
        {console.log(getRecipe())}
        </>
    )
}