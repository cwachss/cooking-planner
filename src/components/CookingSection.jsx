import React from "react";
import { CookingDay } from './CookingDay';


export const CookingSection = (props) => {
  return(<section className="m-6 p-6 flex gap-6">
      <CookingDay id={1}></CookingDay>
      <CookingDay id={2}></CookingDay>
      </section>)
}