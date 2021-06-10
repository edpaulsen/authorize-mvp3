import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ totalPrice, checkoutHandler,checkoutButtonDisabled }) => {
  return (
    <div className={`${styles["container"]}`}>
      <h4>Order Summary</h4>
      <div className={`mb-20 mt-20 ${styles["horizontal-separator"]}`}></div>
      <div className={`${styles["total-container"]}`}>
        <div>
          <p>Subtotal</p>
          <p>${totalPrice}.00</p>
        </div>
        <div>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className={`mt-20 ${styles["horizontal-separator"]}`}></div>
        <div>
          <p>Total</p>
          <p>${totalPrice}.00</p>
        </div>
        <div>
          <button
            className={`mt-30 cursor-pointer ${styles["checkout-button"]}`}
            disabled={checkoutButtonDisabled}
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
