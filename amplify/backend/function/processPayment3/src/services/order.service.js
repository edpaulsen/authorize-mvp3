const Mutations = require("../graphql/mutations");
const { execute } = require("../helpers/api.helper");
const uuid = require("uuid");
const Amplify = require("aws-amplify");

const init = (key) => {
  const myAppConfig = {
    aws_appsync_graphqlEndpoint:
      process.env.API_AUTHORIZEMVP3_GRAPHQLAPIENDPOINTOUTPUT,
    aws_appsync_region: process.env.REGION,
    aws_appsync_apiKey: key,
  };
  Amplify.API.configure(myAppConfig);
};

const createOrder = async (input) => {
  await execute(
    {
      statement: Mutations.createOrder,
      name: "createOrder",
    },
    { input }
  );
};

const createBulkOrderProducts = async (orderId, productIds) => {
  await Promise.all(
    productIds.map(async (productId) => {
      const input = {
        id: uuid.v4(),
        orderId,
        productId,
      };
      await execute(
        {
          statement: Mutations.createOrderProducts,
          name: "createOrderProducts",
        },
        { input }
      );
    })
  );
};

module.exports = {
  init,
  createOrder,
  createBulkOrderProducts,
};
