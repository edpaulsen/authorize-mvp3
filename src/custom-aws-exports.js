import awsconfig from "./aws-exports";

const { host } = window.location;

// Fix issues with multiple redirect urls.
// Try to figure out which one to use...
if (awsconfig.oauth.redirectSignIn.includes(",")) {
    const filterHost = (url) => new URL(url).host === host;
    awsconfig.oauth.redirectSignIn = awsconfig.oauth.redirectSignIn
        .split(",")
        .filter(filterHost)
        .shift();
    awsconfig.oauth.redirectSignOut = awsconfig.oauth.redirectSignOut
        .split(",")
        .filter(filterHost)
        .shift();
}
export default awsconfig;