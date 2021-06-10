import { API, graphqlOperation } from "aws-amplify";

export const execute = async ({ statement, name }, variables,authMode = "AWS_IAM") => {
    try {
        const operation = graphqlOperation(statement, variables);
        const { data } = await API.graphql({
            ...operation,
            authMode: authMode ? "AWS_IAM" : '',
        });
        return data[name];
    } catch (err) {
        console.log("error in execute", JSON.stringify(err));
        throw err;
    }
};

export const executeContinuously = async (
    { statement, name },
    variables,
    token = null
) => {
    try {
        const limit = 10000;
        const params = { ...variables, limit, nextToken: token };
        const operation = graphqlOperation(statement, params);
        const { data } = await API.graphql({
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

export const subscribeStatement = (statement) => {
    return API.graphql(graphqlOperation(statement));
};