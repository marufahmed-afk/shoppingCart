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

export default (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      let addedItem = state.products.find(
        (product) => product._id === action.payload._id
      );

      console.log(addedItem);

      if (addedItem !== undefined) {
        // addedItem.qty++;

        const restItems = state.products.filter(
          (product) => product._id !== action.payload._id
        );

        console.log("action payload: ", action.payload);

        console.log("rest items: ", restItems);

        const newItem = {
          ...addedItem,
          quantity: addedItem.quantity + 1,
        };

        console.log(newItem);

        return {
          ...state,
          products: [...restItems, newItem],
          total: state.total + addedItem.price,
        };
      } else {
        action.payload.quantity = 1;
        let newTotal = state.total + action.payload.price;

        return {
          ...state,
          products: [...state.products, action.payload],
          total: newTotal,
        };
      }
    case DELETE_CART_ITEM:
      let total = state.total - action.payload.price * action.payload.quantity;
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload.id
        ),
        total: total,
      };

    case CLEAR:
      return {
        ...state,
        products: [],
        total: 0,
      };
    case TOGGLE_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };
    case CONFIRM_ORDER:
      return {
        ...state,
        confirmOrder: true,
      };

    case REMOVE_MSG:
      return {
        ...state,
        confirmOrder: false,
      };

    case OPEN_CART:
      return {
        ...state,
        openCart: false,
      };
    case INCREASE_QUANTITY:
      let item = state.products.find(
        (product) => product._id === action.payload
      );

      if (item !== undefined) {
        //item.quantity += 1;

        const restItems = state.products.filter(
          (product) => product._id !== action.payload
        );

        const newItem = {
          ...item,
          quantity: item.quantity + 1,
        };

        return {
          ...state,
          products: [...restItems, newItem],
          total: state.total + item.price,
        };
      } else {
        return {
          ...state,
        };
      }
    case DECREASE_QUANTITY:
      let remitem = state.products.find(
        (product) => product._id === action.payload
      );

      if (remitem !== undefined) {
        //item.quantity += 1;

        const restItems = state.products.filter(
          (product) => product._id !== action.payload
        );

        const newItem = {
          ...remitem,
          quantity: remitem.quantity - 1 < 0 ? 0 : remitem.quantity - 1,
        };

        return {
          ...state,
          products: [...restItems, newItem],
          total:
            state.total - remitem.price < 0 ? 0 : state.total - remitem.price,
        };
      } else {
        return {
          ...state,
        };
      }

    case ORDER_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
