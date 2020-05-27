import React, { Fragment, useContext } from "react";
import OrderContext from "../../context/order/orderContext";

const CartItem = ({ id, name, price, quantity }) => {
  const orderContext = useContext(OrderContext);

  const { deleteCartItem, increaseQuantity, decreaseQuantity } = orderContext;

  const handleDelete = (e) => {
    deleteCartItem(id, price, quantity);
  };

  const increaseQty = (e) => {
    increaseQuantity(id);
  };

  const decreaseQty = (e) => {
    decreaseQuantity(id);
  };

  return (
    <Fragment>
      <li>
        <h3>{name}</h3>
        <div className="quantity">
          <img
            src={require("../../assets/up-arrow.svg")}
            alt=""
            className="up-btn qty-btn"
            onClick={increaseQty}
          />
          <p className="qty">{quantity}</p>
          <img
            src={require("../../assets/up-arrow.svg")}
            alt=""
            className="down-btn qty-btn"
            onClick={decreaseQty}
          />
        </div>

        <h3>৳{price}</h3>
        <img
          src={require("../../assets/close2.svg")}
          alt=""
          className="delete-btn"
          onClick={handleDelete}
        />
      </li>
    </Fragment>
  );
};

export default CartItem;
