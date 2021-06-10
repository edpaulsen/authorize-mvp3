/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        orders {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listProductss = /* GraphQL */ `
  query ListProductss(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const orderByUserId = /* GraphQL */ `
  query OrderByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        status
        price
        userId
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
