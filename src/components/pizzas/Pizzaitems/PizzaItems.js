import React from "react";

import { FaStar } from "react-icons/fa";
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
  return (
    <div className="container_pizzaitems">
      <ul>
        <img src={img_url} alt="" style={{ width: "300px", height: "200px" }} />
        <h1 className="title">{name}</h1>
        <p className="desc">{description}</p>
        {[...Array(5)].map((star) => {
          return <FaStar color={"#ffc107"} value={rating} />;
        })}

        <p className="price">Rs {price}</p>
        <p className="title">
          {isVeg ? (
            <p style={{ color: "green" }}>Veg</p>
          ) : (
            <p style={{ color: "red" }}>Non Veg</p>
          )}
        </p>
        <p className="title">add</p>
        {/* {size[0].isRadio && <p>{size[0].title}</p>} */}
        {/* {id} */}
      </ul>
    </div>
  );
};
