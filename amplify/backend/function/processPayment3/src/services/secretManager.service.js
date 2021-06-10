const AWS = require("aws-sdk");

const getSecretManager = async () => {
  const secretsManager = new AWS.SecretsManager({
    region: process.env.REGION,
  });
  const apiKeySecret = await secretsManager
    .getSecretValue({ SecretId: `AUTHORIZE_MVP_API_KEY_${process.env.ENV}` })
    .promise();
  if (!apiKeySecret) {
    throw new Error("Key Secret not found");
  }
  return apiKeySecret;
};

module.exports = {
  getSecretManager,
};
