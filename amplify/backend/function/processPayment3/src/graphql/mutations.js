const createOrderProducts = /* GraphQL */ `
  mutation CreateOrderProducts(
    $input: CreateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    createOrderProducts(input: $input, condition: $condition) {
      id
      productId
      orderId
    }
  }
`;

const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      status
      price
      userId
    }
  }
`;

module.exports = {
  createOrderProducts,
  createOrder,
};
