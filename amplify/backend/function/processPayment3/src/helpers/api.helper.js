const Amplify = require("aws-amplify");

const executeByPartsLimit = 25;

const execute = async ({ statement, name }, variables) => {
  try {
    const operation = Amplify.graphqlOperation(statement, variables);
    const { data } = await Amplify.API.graphql({
      ...operation,
      authMode: "API_KEY",
    });
    return data[name];
  } catch (err) {
    console.log("error in execute", JSON.stringify(err));
    throw err;
  }
};

const executeContinuously = async (
  { statement, name },
  variables,
  token = null
) => {
  try {
    const limit = 10000;
    const params = { ...variables, limit, nextToken: token };
    const operation = Amplify.graphqlOperation(statement, params);
    const { data } = await Amplify.API.graphql({
      ...operation,
      authMode: "AWS_IAM",
    });
    const { items, nextToken } = data[name];
    if (nextToken) {
      const nextItems = await executeContinuously(
        { statement, name },
        variables,
        nextToken
      );
      return items.concat(nextItems);
    }
    return items;
  } catch (err) {
    console.log("error in continious execution", JSON.stringify(err));
    throw err;
  }
};

const executeByParts = async (query, objsList) => {
  let cur = 0;
  let result = [];
  while (cur < objsList.length) {
    const promises = objsList
      .slice(cur, cur + executeByPartsLimit)
      .map((input) => execute(query, { input }));
    // eslint-disable-next-line no-await-in-loop
    const chunk = await Promise.all(promises);
    result = result.concat(chunk);
    cur += executeByPartsLimit;
  }
  return result;
};

module.exports = {
  execute,
  executeContinuously,
  executeByParts,
};
