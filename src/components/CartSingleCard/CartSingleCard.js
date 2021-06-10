import React from "react";
import styles from "./CartSingleCard.module.css";
import S3Image from "../S3Images/S3Images";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const CartSingleCard = ({
  cart,
  removeFromCartHandler,
  updateCardQuantity,
}) => {
  return (
    <div className={`${styles["container"]}`}>
      <div>
        <S3Image
          height="100%"
          width="130px"
          imageKey={
            (cart.images && cart.images.length && cart.images[0].key) || ""
          }
        />
        <div className={`${styles["price-container"]}`}>
          <p>{cart.name}</p>
          <p className={`mt-10`}>${cart.price}.00</p>
        </div>
        <div className={`${styles["quantity-container"]}`}>
          <div>
            <FaMinus
              className={`cursor-pointer`}
              onClick={() => updateCardQuantity(cart, +cart.quantity - 1)}
            />
            <p>{cart.quantity || 0}</p>
            <FaPlus
              className={`cursor-pointer`}
              onClick={() => updateCardQuantity(cart, +cart.quantity + 1)}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex-row justify-content-space-between ${styles["quantity-container"]}`}
      >
        <p>${cart.price * cart.quantity}.00</p>
        <FaTimes
          className={`cursor-pointer`}
          onClick={() => removeFromCartHandler(cart.id)}
        />
      </div>
    </div>
  );
};

export default CartSingleCard;
