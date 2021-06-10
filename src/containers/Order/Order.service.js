import { processPayment } from "../../graphql/mutations";
import { execute } from "../../Api.service";

export const processOrderPayment = async (
  cardInfo,
  amount,
  productIds,
  userId
) => {
  await execute(
    {
      statement: processPayment,
      name: "processPayment",
    },
    {
      cardInfo,
      amount,
      productIds,
      userId,
    },
    ""
  );
};
