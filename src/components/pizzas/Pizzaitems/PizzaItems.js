import React from "react";
import Stars from "../../layout/ratingstars/Stars.tsx";

import { FaStar } from "react-icons/fa";

import { IoMdAddCircle } from "react-icons/io";

import "./PizzaItems.css";

export const PizzaItems = ({
  pizza: {
    id,
    description,
    img_url,
    name,
    isVeg,
    rating,
    price,
    size,
    toppings,
  },
}) => {
  // console.log("hey");
  return (
    <div className="container_pizzaitems">
      <ul className="pizza_list">
        <div className="pizza_image_container">
          <img src={img_url} alt="" style={{ width: "60%", height: "60%" }} />
        </div>
        <div className="pizza_data">
          <h1 className="pizza_title">{name}</h1>
          <p className="pizza_desc">{description}</p>
          <Stars rating={rating} />
          {/* {[...Array(5)].map((star) => {
            return <FaStar color={"#ffc107"} value={rating} />;
          })} */}
          <p className="pizza_price">Rs {price}</p>
          <p className="pizza_title">
            {isVeg ? (
              <p style={{ color: "green" }}>Veg</p>
            ) : (
              <p style={{ color: "red" }}>Non Veg</p>
            )}
          </p>
          <div className="add_toppings">
            <IoMdAddCircle size={30} />
            Add Toppings
          </div>
        </div>

        {/* {size[0].isRadio && <p>{size[0].title}</p>} */}
        {/* {id} */}
      </ul>
    </div>
  );
};
