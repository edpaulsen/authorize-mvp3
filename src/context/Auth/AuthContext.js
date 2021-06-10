import React from "react";
import { defaultAuthInterface } from "./AuthContextInterface";

export const AuthContext = React.createContext(defaultAuthInterface);
export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
