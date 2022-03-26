import React, { useState } from "react";
import MenuOption from "../../layout/dropdown/MenuOption.tsx";
import SwitchButton from "../../layout/switch/SwtichButton.tsx";
import { PizzaItems } from "../Pizzaitems/PizzaItems";

import { Switch } from "antd";
import "./Pizzas.css";
// import ToggleButton from "../../layout/togglebutton/ToggleButton";

export const Pizzas = ({ pizzaDetails }) => {
  return (
    <div className="container_pizzas">
      <h1>Our Menu</h1>
      {/* <ToggleButton /> */}
      <p className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa mollitia
        deserunt magnam deleniti nobis? Quae cum autem corporis? Omnis
        repudiandae eveniet praesentium vitae harum magni modi sint optio,
        aliquid corrupti! Libero officiis vero natus illo veritatis quia magnam
        vitae aliquid. Exercitationem nihil a ullam repellendus eos? Totam, sed
        officiis? Deleniti, est ex libero dolorum minus magni blanditiis totam
        error unde!
      </p>
      {/* <button className="button">Veg only</button> */}
      <div className="filter_buttons">
        <MenuOption />
        <SwitchButton />
      </div>

      <div className="wrapper">
        {pizzaDetails.length > 0 && (
          <>
            {pizzaDetails.map((pizza) => (
              <PizzaItems pizza={pizza} key={pizza.id} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
