import React from "react";

import "./Featured.css";

export const Featured = ({ pizzaDetails }) => {
  let images_array = [];
  const images = () => {
    {
      images_array = pizzaDetails.map((pizza) =>
        pizza.filter((pizza) => pizza.img_url)
      );
    }
    return images_array;
  };
  console.log(images);
  return (
    <div className="container_featured">
      {/* <img
        src="../../../../public/img/arrowl.png"
        alt=""
        width="100%"
        height="500px"
      />
      <div className="wrapper_featured">
        <div className="container_featured_image">
          {<img src={img_url} alt="" width="100%" height="500px" />}
        </div>
      </div>
      <img src="../../../../public/img/arrowr.png" alt="" /> */}
      4 hey
    </div>
  );
};
