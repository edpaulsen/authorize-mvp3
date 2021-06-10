import React, { useEffect, useState } from "react";
import { CartContextProvider } from "./CartContext";

const CartContextContainer = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getTotalCartPrice();
  }, [cart]);

  const addItemToCart = (product, quantity) => {
    setCart((prev) => {
      const alreadyInCart = prev.find((item) => item.id === product.id);
      if (!alreadyInCart) {
        return [...prev, { ...product, quantity }];
      }
      return prev.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== productId);
    });
  };

  const getTotalCartPrice = () => {
    if (cart && cart.length) {
      const totalPriceCalculated = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
      }, 0);
      return setTotalPrice(totalPriceCalculated);
    }
    setTotalPrice(0);
  };

  const getQuantityOfProduct = (productId) => {
    const alreadyInCart = cart.find((item) => item.id === productId);
    if (alreadyInCart && alreadyInCart.quantity) {
      return alreadyInCart.quantity;
    }
    return 0;
  };

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <CartContextProvider
      value={{
        cart,
        totalPrice,
        addItemToCart,
        getQuantityOfProduct,
        removeFromCart,
        emptyCart
      }}
    >
      {children}
    </CartContextProvider>
  );
};

export default CartContextContainer;
