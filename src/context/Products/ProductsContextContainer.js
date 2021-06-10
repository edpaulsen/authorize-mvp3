import React, { useEffect, useState } from "react";
import { ProductsProvider } from "./ProductsContext";
import { getAllProducts } from "./Products.service";

const ProductsContextContainer = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      setProducts(products);
    }
    getProducts();
  }, []);
  return (
    <ProductsProvider
      value={{
        products,
      }}
    >
      {children}
    </ProductsProvider>
  );
};

export default ProductsContextContainer;
