const createUserQuery = {
  statement: `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
    }
  }`,
  name: "createUser",
};

module.exports = {
  createUserQuery,
};
