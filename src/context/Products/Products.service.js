import { execute, executeContinuously } from "../../Api.service";
import { listProductss, getProducts } from "../../graphql/queries";

export const getAllProducts = async () => {
  const products = await executeContinuously({
    statement: listProductss,
    name: "listProductss",
  });
  return products;
};

export const getProduct = async (id) => {
  const products = await execute(
    {
      statement: getProducts,
      name: "getProducts",
    },
    { id }
  );
  return products;
};
