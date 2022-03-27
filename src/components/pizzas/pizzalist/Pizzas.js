import React, { useEffect, useState } from "react";
import MenuOption from "../../layout/dropdown/MenuOption.tsx";
import SwitchButton from "../../layout/switch/SwtichButton.tsx";
import { PizzaItems } from "../Pizzaitems/PizzaItems";

import { Switch } from "antd";
import "./Pizzas.css";
// import ToggleButton from "../../layout/togglebutton/ToggleButton";

let priceSortingCheck = false,
  ratingSortingCheck = false;
export const Pizzas = ({ pizzaDetails }) => {
  const checkSortByPrice = (priceSorting) => {
    // console.log(priceSorting);
    priceSortingCheck = priceSorting;
    checkRenderData(priceSortingCheck, ratingSortingCheck);
  };

  const checkSortByRating = (ratingSorting) => {
    // console.log(ratingSorting);
    ratingSortingCheck = ratingSorting;
    checkRenderData(priceSortingCheck, ratingSortingCheck);
  };
  const [finalArray, setArray] = useState([]);

  let renderArray = pizzaDetails;
  const checkRenderData = (priceSortingCheck, ratingSortingCheck) => {
    console.log("inside check render data");
    console.log(priceSortingCheck, ratingSortingCheck);
    const dupl_arr_price = pizzaDetails.sort((a, b) => a.price - b.price);
    console.log(dupl_arr_price);
    const dupl_arr_rating = pizzaDetails.sort((a, b) => a.rating - b.rating);
    if (priceSortingCheck) renderArray = dupl_arr_price;
    else if (ratingSortingCheck) renderArray = dupl_arr_rating;
    else renderArray = pizzaDetails;
    // console.log(renderArray);
    setArray(renderArray);
    return renderArray;
  };

  // useEffect(() => {
  //   checkRenderData(priceSortingCheck, ratingSortingCheck);
  // }, []);
  // console.log(
  //   pizzaDetails.sort((a, b) => {
  //     return a.price - b.price;
  //   })
  // );
  // console.log(finalArray);
  return (
    <div className="container_pizzas">
      <h1>Our Menu</h1>

      <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa mollitia
        deserunt magnam deleniti nobis? Quae cum autem corporis? Omnis
        repudiandae eveniet praesentium vitae harum magni modi sint optio,
        aliquid corrupti! Libero officiis vero natus illo veritatis quia magnam
        vitae aliquid. Exercitationem nihil a ullam repellendus eos? Totam, sed
        officiis? Deleniti, est ex libero dolorum minus magni blanditiis totam
        error unde!
      </p>

      <div className="filter_buttons">
        <MenuOption
          checkSortByPrice={checkSortByPrice}
          checkSortByRating={checkSortByRating}
        />
        <SwitchButton />
      </div>

      <div className="wrapper">
        {
          <>
            {finalArray.map((pizza) => (
              <PizzaItems pizza={pizza} key={pizza.id} />
            ))}
          </>
        }
        {/* {dupl_arr_price} */}
        {/* {dupl_arr_rating} */}
      </div>
    </div>
  );
};
