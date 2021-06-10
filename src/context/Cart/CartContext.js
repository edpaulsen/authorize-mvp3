import { cartDefaultInterface } from "./CartInterface";
import React from "react";

export const CartContext = React.createContext(cartDefaultInterface);
export const CartContextProvider = CartContext.Provider;
export const CartContextConsumer = CartContext.Consumer;
