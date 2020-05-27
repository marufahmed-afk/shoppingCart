import React, { Fragment, useState, useContext } from "react";
import OderContext from "../../context/order/orderContext";
import orderContext from "../../context/order/orderContext";

const Navbar = () => {
  const orderContext = useContext(OderContext);
  const { toggleCart } = orderContext;

  return (
    <div className="navbar container">
      <div className="logo">LOGO</div>
      <div className="nav-elements">
        <img
          src={require("../../assets/cart.svg")}
          alt=""
          className="cart-btn"
          onClick={toggleCart}
        />
      </div>
    </div>
  );
};

export default Navbar;
