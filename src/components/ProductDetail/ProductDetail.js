import React, { useState } from "react";
import S3Image from "../S3Images/S3Images";
import styles from "./ProductDetail.module.css";

const ProductDetail = ({ product, addToCartProduct, productQuantity }) => {
  const [quantity, setQuantity] = useState(productQuantity);

  const quantitychangeHandler = (event) => {
    const numberRegex = /^[0-9\b]+$/;
    if (event.target.value === "" || numberRegex.test(event.target.value)) {
      setQuantity(event.target.value);
    }
  };

  return (
    <div>
      {Object.keys(product).length ? (
        <>
          <S3Image
            imageKey={product.images[0].key}
            height="551px"
            width="100%"
          />
          {/* Product Description and add to cart */}
          <div
            className={`flex-row ${styles["product-detail-container"]} mt-100`}
          >
            <div>
              <h4>{product.name}</h4>
              <p className={`mt-20 ${styles["description-detail"]}`}>
                {product.description}
              </p>
            </div>
            <div>
              <h4>${product.price}.00</h4>
              <p className={`mt-20`}>Quantity</p>
              <input
                className={`mt-20`}
                value={quantity}
                onChange={quantitychangeHandler}
              />
              <button
                className={`mt-30 cursor-pointer`}
                onClick={() => addToCartProduct(product, quantity)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Fetching product</p>
      )}
    </div>
  );
};

export default ProductDetail;
