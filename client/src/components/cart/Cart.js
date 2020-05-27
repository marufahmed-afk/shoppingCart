import React, { useContext } from "react";
import CartItem from "./CartItem";
import OrderContext from "../../context/order/orderContext";

const Cart = () => {
  const orderContext = useContext(OrderContext);

  const {
    products,
    total,
    openCart,
    confirmation,
    confirmOrder,
    clear,
    addOrder,
  } = orderContext;

  const handleConfirm = () => {
    addOrder(products, total);
    confirmation();
    clear();
  };

  return (
    <div className={`cart ${openCart ? " toggle-cart " : " "}`}>
      <h2>Your Cart</h2>
      <div className="cart-items">
        {products &&
          products.map((product) => (
            <CartItem
              key={product._id}
              id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
      </div>
      <div className="order">
        <input
          type="submit"
          value="Place Order"
          className="order-btn"
          onClick={handleConfirm}
        />
        <p className={`order-msg ${confirmOrder ? " show-msg " : " "}`}>
          Order Placed!
        </p>
        <h3>Total: ৳{total}</h3>
      </div>
    </div>
  );
};

export default Cart;
