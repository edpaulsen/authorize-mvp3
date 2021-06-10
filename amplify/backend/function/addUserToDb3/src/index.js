/* Amplify Params - DO NOT EDIT
	API_AUTHORIZEMVP3_GRAPHQLAPIENDPOINTOUTPUT
	API_AUTHORIZEMVP3_GRAPHQLAPIIDOUTPUT
	API_AUTHORIZEMVP3_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const APIService = require("./services/api.service");
//const secretManagerService = require("./services/secretmanager.service");

exports.handler = async (event) => {
    // process.env = event;
    //   console.log('init api service');
//    const apiKeySecret = await secretManagerService.getSecretManager();
//    const apiKey = apiKeySecret.SecretString.trim();
    const url = process.env.API_AUTHORIZEMVP3_GRAPHQLAPIENDPOINTOUTPUT;
    APIService.init(apiKey, url);
    console.log("init done");
    // console.log('event', JSON.stringify(event));

    try {
        const createUser = await APIService.createUser({
            ...event.arguments.user,
        });

        console.log("response", createUser);
        return createUser;
    } catch (e) {
        console.log(e);
    }

    return { statusCode: 200, response: "done" };
};
