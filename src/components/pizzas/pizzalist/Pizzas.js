import React, { useEffect, useState } from "react";
import MenuOption from "../../layout/dropdown/MenuOption.tsx";
import SwitchButton from "../../layout/switch/SwtichButton.tsx";
import Button from "../../layout/button/Button.tsx";
import { PizzaItems } from "../Pizzaitems/PizzaItems";

import { Switch } from "antd";
import "./Pizzas.css";
// import ToggleButton from "../../layout/togglebutton/ToggleButton";

let priceSortingCheck = false,
  ratingSortingCheck = false;

let vegFilterCheck = false,
  nonVegFilterCheck = false;

export const Pizzas = ({ pizzaDetails }) => {
  const [finalArray, setArray] = useState([]);
  const [sortFeature, setSortFeature] = useState();
  const [filterFeature, setFilterFeature] = useState();

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

  const checkVegFilter = (vegFilter) => {
    // console.log(priceSorting);
    vegFilterCheck = vegFilter;
    setFilterFeature(vegFilterCheck);
    console.log(vegFilterCheck);
  };

  const checkNonVegFilter = (nonVegFilter) => {
    // console.log(priceSorting);
    nonVegFilterCheck = nonVegFilter;
    setFilterFeature(nonVegFilterCheck);
    // console.log(nonVegFilterCheck);
  };

  const checkClearFilter = (checkValue) => {
    if (checkValue) {
      console.log("CLICKED");
      return true;
    }
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
      // console.log(renderArray);
      setArray(renderArray);
    };

    const checkFilterRenderData = (vegFilterCheck, nonVegFilterCheck) => {
      let renderArray = pizzaDetails;
      let dupl_arr_veg, dupl_arr_nonveg;
      if (vegFilterCheck) {
        dupl_arr_veg = pizzaDetails.filter((pizza) => pizza.isVeg === true);
        console.log(dupl_arr_veg);
      }

      if (nonVegFilterCheck) {
        dupl_arr_nonveg = pizzaDetails.filter((pizza) => pizza.isVeg === false);
      }

      if (vegFilterCheck) renderArray = dupl_arr_veg;
      if (nonVegFilterCheck) renderArray = dupl_arr_nonveg;

      console.log(renderArray);
      setArray(renderArray);
    };

    checkRenderData(priceSortingCheck, ratingSortingCheck);
    checkFilterRenderData(vegFilterCheck, nonVegFilterCheck);
  }, [pizzaDetails, sortFeature, filterFeature]);

  return (
    <div className="container_pizzas">
      <h1>Our Menu</h1>

      <p className="desc">
        Pizza is a worldwide favorite. The reason for pizza spread is that you
        can add anything to it and eat it anytime of the day and anywhere. The
        pizza originated in Italy and it is one of the favorite foods for adults
        and children. It was originally dough with topping of any ingredients as
        meat or vegetables that baked in the oven. Pizza developed to become
        more organized as Italians added sauce, cheese mozzarella and many other
        types of cheese. Such new way moved from Italy to other countries by
        Italian immigrants.
      </p>

      <div className="filter_buttons">
        <div className="sort_filter_buttons">
          <MenuOption
            checkSortByPrice={checkSortByPrice}
            checkSortByRating={checkSortByRating}
            checkClearFilter={checkClearFilter}
          />
          <Button checkClearFilter={checkClearFilter} />
        </div>

        <SwitchButton
          checkVegFilter={checkVegFilter}
          checkNonVegFilter={checkNonVegFilter}
        />
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
