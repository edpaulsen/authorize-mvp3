import React from "react";
import styles from "./CartList.module.css";
import CartSingleCard from "../CartSingleCard/CartSingleCard";

const CartList = ({ cartItems, removeFromCartHandler, updateCardQuantity }) => {
  return (
    <div className={`${styles["container"]}`}>
      <h4>My Cart</h4>
      <div className={`mt-20 ${styles["horizontal-separator"]}`}></div>
      {cartItems.map((cart, index) => {
        return (
          <CartSingleCard
            cart={cart}
            key={index}
            removeFromCartHandler={removeFromCartHandler}
            updateCardQuantity={updateCardQuantity}
          />
        );
      })}
    </div>
  );
};

export default CartList;
