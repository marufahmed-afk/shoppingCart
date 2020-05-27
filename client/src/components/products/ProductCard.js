import React, { useContext } from "react";
import OrderContext from "../../context/order/orderContext";

function ProductCard({ product }) {
  const orderContext = useContext(OrderContext);

  const { addToCart, openCartTab } = orderContext;

  const handleAddToCart = (e) => {
    addToCart(product);
    openCartTab();
    console.log("added to cart");
  };

  return (
    <div className="card">
      <div className="info">
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
      </div>

      <img
        src={require("../../assets/add-to-cart.svg")}
        alt=""
        className="add-to-cart-btn"
        onClick={handleAddToCart}
      />
    </div>
  );
}

export default ProductCard;
