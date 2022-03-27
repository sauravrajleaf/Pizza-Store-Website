import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import { Pizzas } from "../pizzas/pizzalist/Pizzas";

export const HomePage = () => {
  const [pizzaDetails, setData] = useState([]);

  const fetchPost = async () => {
    const response = await axios.get(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );
    // console.log(response.data);

    const apiData = response.data;

    setData(apiData);
    // console.log(pizzaDetails);
  };

  useEffect(() => {
    fetchPost();
  }, [pizzaDetails]);
  return (
    <div>
      <Pizzas pizzaDetails={pizzaDetails} />
    </div>
  );
};
