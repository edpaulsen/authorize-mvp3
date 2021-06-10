import React, { useContext } from "react";
import styles from "./ProductsList.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { withRouter } from "react-router";
import { ROUTE_SHOP } from "../../utils/constants";

const ProductsList = ({ history }) => {
  const productsContext = useContext(ProductsContext);

  const productClickHandler = (product) => {
    history.push(`${ROUTE_SHOP}/${product.id}`);
  };

  return (
    <div className={`${styles["container"]}`}>
      {productsContext.products && productsContext.products.length ? (
        productsContext.products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            productClickHandler={productClickHandler}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default withRouter(ProductsList);
