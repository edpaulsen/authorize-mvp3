import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import awsConfig from "./custom-aws-exports";
import Routes from "./containers/Routes/Routes";
import NavbarContainer from "./containers/Navbar/Navbar";
import { IconContext } from "react-icons";
import ProductsContextContainer from "./context/Products/ProductsContextContainer";
import CartContextContainer from "./context/Cart/CartContextContainer";
import AuthContextContainer from "./context/Auth/AuthContextContainer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

Amplify.configure(awsConfig);

function App() {
  return (
      <BrowserRouter>
        <AuthContextContainer>
          <ProductsContextContainer>
            <CartContextContainer>
              <IconContext.Provider value={{ className: "icons" }}>
                <div id="site-root">
                  <ToastContainer />
                  <NavbarContainer>
                    <Routes />
                  </NavbarContainer>
                </div>
              </IconContext.Provider>
            </CartContextContainer>
          </ProductsContextContainer>
        </AuthContextContainer>
      </BrowserRouter>
  );
}

export default App;
