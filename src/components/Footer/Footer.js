import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (



      <div className={`flex-column`}>

          <div className={`flex-row justify-content-center ${styles["footer-all"]}`}>
            <div >
               <h1 className={`${styles["footer-header"]}`}>The HIPAA FORMS Service is developed by</h1>
                <h2 className={`${styles["footer-company"]}`}><a href="https://www.codemonkeysllc.com" target="_blank" rel="noopener">Code Monkeys, LLC</a></h2>
                <h2 className={`${styles["footer-header"]}`}>Hammond, WI USA</h2>
                <h1 className={`${styles["footer-phone"]}`}> <a href="tel:7159411040" target="_blank" rel="noopener">715.941.1040</a></h1>
                <h2 className={`${styles["footer-header"]}`}>Terms And Conditions</h2>
                <h2 className={`${styles["footer-header"]}`}>Privacy Policy</h2>
                <p className={`${styles["footer-copyright"]}`}>© 2020 Code Monkeys LLC</p>
            </div>

          </div>


      <div
          className={`flex-row justify-content-center ${styles["social-icons"]}`} >
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </div>
  );

}
