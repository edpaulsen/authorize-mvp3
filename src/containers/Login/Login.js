import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "../../context/Auth/AuthContext";
import { ROUTE_HOME } from "../../utils/constants";

const LoginContainer = ({ history }) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (Object.keys(authContext.user).length) {
      history.push(ROUTE_HOME);
    }
  }, [authContext.user]);

  return (
    <div className="text-align-center">
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            { type: "email" },
            {
              type: "password",
              label: "Password *",
              placeholder: "Enter your password",
              required: true,
            },
          ]}
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default withRouter(LoginContainer);
