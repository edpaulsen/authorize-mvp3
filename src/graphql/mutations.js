/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processPayment = /* GraphQL */ `
  mutation ProcessPayment(
    $cardInfo: CardInfoInput!
    $amount: String!
    $productIds: [String!]!
    $userId: String!
  ) {
    processPayment(
      cardInfo: $cardInfo
      amount: $amount
      productIds: $productIds
      userId: $userId
    )
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      orders {
        items {
          id
          status
          price
          userId
        }
        nextToken
      }
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      price
      description
      images {
        bucket
        region
        key
        localUri
        mimeType
      }
      orders {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      status
      price
      userId
      products {
        items {
          id
          productId
          orderId
        }
        nextToken
      }
    }
  }
`;
export const createOrderProducts = /* GraphQL */ `
  mutation CreateOrderProducts(
    $input: CreateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    createOrderProducts(input: $input, condition: $condition) {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
export const updateOrderProducts = /* GraphQL */ `
  mutation UpdateOrderProducts(
    $input: UpdateOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    updateOrderProducts(input: $input, condition: $condition) {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
export const deleteOrderProducts = /* GraphQL */ `
  mutation DeleteOrderProducts(
    $input: DeleteOrderProductsInput!
    $condition: ModelOrderProductsConditionInput
  ) {
    deleteOrderProducts(input: $input, condition: $condition) {
      id
      productId
      orderId
      product {
        id
        name
        price
        description
        images {
          bucket
          region
          key
          localUri
          mimeType
        }
        orders {
          nextToken
        }
      }
      order {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
    }
  }
`;
