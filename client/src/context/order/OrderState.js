import React, { useReducer } from "react";
import axios from "axios";
import OrderContext from "./orderContext";
import orderReducer from "./orderReducer";
import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  TOGGLE_CART,
  OPEN_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CONFIRM_ORDER,
  REMOVE_MSG,
  CLEAR,
  ADD_ORDER,
  ORDER_ERROR,
} from "../../types";

const OrderState = (props) => {
  const initialState = {
    products: [],
    total: 0,
    openCart: true,
    confirmOrder: false,
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  const addOrder = async (products, total) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const order = { products, total };

    try {
      const res = await axios.post("/api/orders", order, config);
    } catch (err) {
      dispatch({
        type: ORDER_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  const openCartTab = () => {
    dispatch({ type: OPEN_CART });
  };

  const confirmation = () => {
    console.log("hello confirm");
    dispatch({ type: CONFIRM_ORDER });

    setTimeout(() => {
      dispatch({ type: REMOVE_MSG });
    }, 2000);
  };

  const clear = () => {
    dispatch({ type: CLEAR });
  };

  const deleteCartItem = (id, price, quantity) => {
    console.log("delete cart item");
    const pl = { id, price, quantity };
    dispatch({ type: DELETE_CART_ITEM, payload: pl });
  };

  const addToCart = (product) => {
    const pl = { ...product, quantity: 1 };

    dispatch({ type: ADD_CART_ITEM, payload: pl });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };
  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE_QUANTITY, payload: id });
  };

  return (
    <OrderContext.Provider
      value={{
        products: state.products,
        total: state.total,
        openCart: state.openCart,
        confirmOrder: state.confirmOrder,
        toggleCart,
        openCartTab,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        confirmation,
        clear,
        deleteCartItem,
        addOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
