import React, { useState } from "react";
import { CategorySelect } from "./CategorySelect";

export const SelectSection = (props) => {
  const [count, setCount] = useState(1);

  function submit() {}
  return (
    <section className="m-6 p-6 ">
      <h2>
        Menu Planner
        <p>Select desired courses for each meal</p>
      </h2>
      <div className="mt-2 flex gap-6">
        {Array.apply(null, Array(count)).map((i) => {
          return <CategorySelect id={i}></CategorySelect>;
        })}
        <div className="flex flex-col justify-between items-stretch">
          <button
            className="rounded-lg text-center p-6 bg-[#54c1cd]"
            onClick={() => setCount(count + 1)}
          >
            Add Meal
          </button>
          <button
            className="rounded-lg text-center p-6 bg-[#fc8329]"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
