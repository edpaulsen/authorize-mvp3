import React from "react";
import S3Image from "../S3Images/S3Images";

const ProductCard = ({ product, productClickHandler }) => {
  const style = {
    backgroundColor: "lightgray",
  };
  return (
    <div>
      <S3Image
        height="206px"
        className={`mb-10 cursor-pointer`}
        style={style}
        onClick={() => productClickHandler(product)}
        imageKey={
          product.images && product.images.length && product.images[0].key
        }
      />
      <p>{product.name}</p>
      <p className={`mt-2`}>${product.price}.00</p>
    </div>
  );
};

export default ProductCard;
