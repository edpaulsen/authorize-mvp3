import React from "react";
import styles from "./Shop.module.css";
import ProductsList from "../../components/ProductsList/ProductsList";

const ShopContainer = () => {
  return (
    <div className={`${styles["container"]}`}>
      <ProductsList />
    </div>
  );
};

export default ShopContainer;
