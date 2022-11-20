import React from "react";
// import { ReactDOM } from "react";
// import { MealSection } from './MealSection';


export const RecipeCard = (props) => {
  if(props.open) {return (<div className="absolute z-30 inset-0 bg-gray-100/50 grid place-content-center">
    <div className="rounded bg-white p-6 w-[50vw] h-[90vh]">
      <button onClick={props.onClose}>&times;</button>
      <h3>Recipe Name</h3>
    </div>
      </div>)}else{
        return <p>Recipe name</p>
      }

}