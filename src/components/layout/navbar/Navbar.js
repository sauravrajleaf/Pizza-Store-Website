import React from "react";

import "./Navbar.css";

import { BsCart } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { SiFoodpanda } from "react-icons/si";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="item">
        <div className="text">
          <div className="text">
            <SiFoodpanda size={30} />
            WELCOME!
          </div>
          <div className="text">To Pizzalicious</div>
        </div>
      </div>
      <div className="item">
        <ul className="list">
          <li className="listItem">Homepage</li>
          <li className="listItem">Menu</li>
          <li className="listItem">
            <GiFullPizza size={80} />
          </li>
          <li className="listItem">Dine In</li>
          <li className="listItem">Order Now</li>
        </ul>
      </div>
      <div className="item">
        <div className="cart">
          <BsCart size={40} />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};
