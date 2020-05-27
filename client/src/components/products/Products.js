import React, { Fragment, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";

import ProductContext from "../../context/product/productContext";

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="products-grid-container">
      {products &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Products;
