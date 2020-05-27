import React, { useContext } from "react";

import Products from "../products/Products";
import Cart from "../cart/Cart";
import OrderContext from "../../context/order/orderContext";

const Dashboard = () => {
  const orderContext = useContext(OrderContext);
  const { openCart } = orderContext;

  return (
    <div className={` ${openCart ? "" : "main-grid"}`}>
      <Products />
      <Cart />
    </div>
  );
};

export default Dashboard;
