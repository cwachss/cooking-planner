import React from "react";
import { CategorySelect } from './CategorySelect';


export const SelectSection = (props) => {
  return(<section className="m-6 p-6 flex gap-6"><CategorySelect title={"Friday Night"}></CategorySelect>
  <CategorySelect title={"Shabbos Morning"}></CategorySelect>
      </section>)
}