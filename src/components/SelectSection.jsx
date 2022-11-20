import React, { useState } from "react";
import { CategorySelect } from "./CategorySelect";

export const SelectSection = (props) => {
  const [count, updateCount] = useState(1);
  return (
    <section className="m-6 p-6 flex gap-6">
      {Array.apply(null, Array(count)).map((i) => {
        return <CategorySelect id={i}></CategorySelect>;
      })}
    </section>
  );
};
