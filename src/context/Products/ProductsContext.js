import React from "react";
import { ProductsInterface } from "./ProductsInterface";

export const ProductsContext = React.createContext(ProductsInterface);
export const ProductsProvider = ProductsContext.Provider;
export const ProductsConsumer = ProductsContext.Consumer;
