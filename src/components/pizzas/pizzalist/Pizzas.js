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
  const [finalArray, setArray] = useState([]);
  const [sortFeature, setSortFeature] = useState();
  const checkSortByPrice = (priceSorting) => {
    // console.log(priceSorting);
    priceSortingCheck = priceSorting;
    setSortFeature(priceSortingCheck);
  };

  const checkSortByRating = (ratingSorting) => {
    // console.log(ratingSorting);
    ratingSortingCheck = ratingSorting;
    setSortFeature(ratingSortingCheck);
  };
  useEffect(() => {
    const checkRenderData = (priceSortingCheck, ratingSortingCheck) => {
      // console.log("inside check render data");
      // console.log(priceSortingCheck, ratingSortingCheck);

      let renderArray = pizzaDetails;
      let dupl_arr_price, dupl_arr_rating;
      if (priceSortingCheck) {
        dupl_arr_price = pizzaDetails.sort((a, b) => a.price - b.price);
      }

      // console.log(dupl_arr_price);
      if (ratingSortingCheck) {
        dupl_arr_rating = pizzaDetails.sort((a, b) => a.rating - b.rating);
      }

      if (priceSortingCheck) renderArray = dupl_arr_price;
      if (ratingSortingCheck) renderArray = dupl_arr_rating;
      else renderArray = pizzaDetails;
      console.log(renderArray);
      setArray(renderArray);
    };

    checkRenderData(priceSortingCheck, ratingSortingCheck);
  }, [pizzaDetails, sortFeature]);

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
      </div>
    </div>
  );
};
