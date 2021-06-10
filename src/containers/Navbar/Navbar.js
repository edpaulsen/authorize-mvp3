import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router";
import { CartContext } from "../../context/Cart/CartContext";
import { AuthContext } from "../../context/Auth/AuthContext";

import { ROUTE_ORDER } from "../../utils/constants";

const NavbarContainer = ({ children, history }) => {
  const cartContext = useContext(CartContext);
  const authContext = useContext(AuthContext);

  const isLoggedIn = authContext.checkAuthentication();

  const orderHandler = () => {
    history.push(ROUTE_ORDER);
  };

  const logoutHandler = () => {
    authContext.logOut();
  };


  return (
    <React.Fragment>
      <div className="mt-40 mb-100">
        <Navbar
          totalItemsInCart={cartContext.cart.length || 0}
          orderHandler={orderHandler}
          isLoggedIn={isLoggedIn}
          logoutHandler={logoutHandler}
        />
      </div>
      {children}
      <div className="mt-100 mb-20">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default withRouter(NavbarContainer);
