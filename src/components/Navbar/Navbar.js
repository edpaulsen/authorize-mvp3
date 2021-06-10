import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_SHOP } from "../../utils/constants";
import { MdShoppingCart } from "react-icons/md";
import {IconContext} from "react-icons";
import {FaSignInAlt} from "react-icons/fa";

export default function Navbar({
  totalItemsInCart,
  orderHandler,
  isLoggedIn,
  logoutHandler,
}) {
  return (
    <div className={`${styles["container"]}`}>
        <NavLink to={ROUTE_HOME}><img src={logo} alt="HIPAA Forms Logo"  height="80"/></NavLink>




      <div className={`mb-20 ${styles["horizontal-separator"]}`}></div>

      {/* icons layout */}
      <div className={`flex-row`}>
        <div className={`${styles["nav-links"]} flex-row`}>
          <NavLink to={ROUTE_HOME}>Home</NavLink>
          <NavLink to={ROUTE_SHOP}>Shop</NavLink>
            <a href="https://codemonkeysllchelp.freshdesk.com/support/home" target="_blank">Documentation</a>
            <a href="https://codemonkeysllchelp.freshdesk.com/support/tickets/new" target="_blank">Support Ticket</a>




        </div>



        <div className={`${styles["right-nav-links"]}`}>
          {!isLoggedIn && (
            <NavLink className="cursor-pointer" to={ROUTE_LOGIN}>
              Log In
            </NavLink>
          )}
          {isLoggedIn && <button onClick={logoutHandler}>Log Out</button>}
          <MdShoppingCart className={`cursor-pointer`} onClick={orderHandler} />
          <span>{totalItemsInCart}</span>
        </div>
      </div>

      <div className={`${styles["products-button2"]}`}>
        <button
            className={`mb-20 cursor-pointer ${styles["products-button"]}`}>

          <NavLink to={ROUTE_SHOP}>Get Started</NavLink>

        </button>
      </div>
    </div>
  );
}
