import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";

import { GET_PRODUCTS, PRODUCT_ERROR } from "../../types";

const ProductState = (props) => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");

      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
