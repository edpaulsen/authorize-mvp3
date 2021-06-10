import React from "react";
import styles from "./HomeProductsList.module.css";
import { withRouter } from "react-router";
import { ROUTE_SHOP } from "../../utils/constants";
import {
    FaBriefcaseMedical, FaCloudUploadAlt, FaCreditCard, FaFlagUsa, FaGift, FaHandshake, FaLaptop, FaLifeRing,
    FaLocationArrow, FaLock,
    FaPaintBrush,
    FaPlug, FaRegFilePdf, FaRegThumbsUp, FaRocket,
    FaSignInAlt, FaStopCircle,
    FaUnlink, FaUpload, FaWordpress,
    FaWordpressSimple, FaWpforms
} from 'react-icons/fa';
import { IconContext } from "react-icons";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import HomeProducts from "../../containers/HomeProducts/HomeProducts";

const useStyles = makeStyles({
    root: {
        color: 'white',
        height: 36,
        width:"100%",
        padding: '0 30px 0 60px'

    },
    header2: {
        color: 'white',
        height: 36,
        width:"100%",
        padding: '0 30px 50px 60px',
    },
    headerx: {
        color: '#8c634d',
        height: 36,
        width:"100%",
        padding: '0 30px 50px 60px',
        textAlign: "center"
    },
    root2: {
        color: 'black',
        height: 36,
        width:"100%",
        padding: '0 30px 0 60px',
        textAlign: "center"

    },
});

const HomeProductsList = ({ children, history }) => {

    const classes = useStyles();
    return (

    <React.Fragment>
      <div className={`flex-column align-items-center pt-20`}>

        <button
          className={`mb-20 cursor-pointer ${styles["products-button"]}`}
          onClick={() => history.push(ROUTE_SHOP)}
        > <IconContext.Provider value={{color: "white"}}>
            <div>
                Start for Free <FaSignInAlt />
            </div>
        </IconContext.Provider>


        </button>

              <div className={`${styles["compliancy-logo"]}`}>
              <a href="https://ece88010.isrefer.com/go/wordpress-forms/a671/" target="_blank" rel="noopener">
                  <img className="aligncenter wp-image-13813" src="https://compliancy-group.com/wp-content/uploads/2020/07/HIPAA-Website-Verified-Seal.png"                                        />
              </a>
          </div>
      </div>
      {children}

        <div className={`${styles["column-section"]}`}>
            <IconContext.Provider value={{color: "white"}}>
                <div className={`${styles["column-row"]}`}>
                    <div className={`${styles["blue-column"]}`}>
                        <GridContainer>
                            <GridItem xs={12}>
                                <h2 className={classes.header2}>Features</h2>

                                <h5 className={classes.root}><FaSignInAlt />    Fully Secure & HIPAA Compliant</h5>
                                <h5 className={classes.root}><FaUnlink />     No Redirects to 3rd Party Websites</h5>
                                <h5 className={classes.root}><FaWordpressSimple />    Build & Manage Forms in WordPress</h5>
                                <h5 className={classes.root}><FaPlug />    Integrates With Gravity Forms</h5>
                                <h5 className={classes.root}><FaPaintBrush />    Optional Drag ‘N Draw Signature</h5>
                                <h5 className={classes.root}><FaLocationArrow />    Ability to Separate Forms by Location</h5>
                                <h5 className={classes.root}><FaBriefcaseMedical />    Ability to Separate Forms by Doctor</h5>
                                <h5 className={classes.root}><FaRegFilePdf />    Create Secure PDF’s of Submitted Forms</h5>
                                <h5 className={classes.root}><FaUpload />    Secure Unlimited File Upload Option</h5>

                            </GridItem>
                        </GridContainer>
                    </div>
                    <div className={`${styles["green-column"]}`}>
                        <GridContainer>

                            <GridItem xs={12}>
                                <h2 className={classes.header2}>Pricing</h2>

                                <h5 className={classes.root}><FaHandshake />    Basic or Standard Options</h5>
                                <h5 className={classes.root}><FaStopCircle />     Cancel Any Time</h5>
                                <h5 className={classes.root}><FaGift />    Basic – FREE (Limit 1 form & 25 submissions/mo)</h5>
                                <h5 className={classes.root}><FaCreditCard />    Standard – $55/mo or $600/yr</h5>
                                <h5 className={classes.root}><FaLaptop />    Supports 1 Live Domain & 1 Staging</h5>
                                <h5 className={classes.root}><FaWpforms />    Unlimited Forms</h5>
                                <h5 className={classes.root}><FaCloudUploadAlt />    Unlimited Form Submissions</h5>
                                <h5 className={classes.root}><FaLifeRing />    Outstanding Customer Support</h5>
                                <h5 className={classes.root}><FaUpload />    File Upload Add-On $30/mo or $300/yr</h5>

                            </GridItem>
                        </GridContainer>
                    </div>

                </div>
            </IconContext.Provider>
        </div>

        <div>
            <IconContext.Provider value={{color: "#8c634d"}}>
                <GridContainer>
                    <GridItem xs={4}>
                        <h2 className={classes.headerx}><FaRocket />    EFFICIENT</h2>
                        <h5 className={classes.root2}>PATIENTS SPEND OVER 20 MINUTES ON AVERAGE FILLING OUT FORMS IN YOUR OFFICE…</h5>
                    </GridItem>
                    <GridItem xs={4}>
                        <h2 className={classes.headerx}><FaRegThumbsUp />    SIMPLE</h2>
                        <h5 className={classes.root2}>HIPAA FORMS ARE SIMPLE TO SETUP & USE…</h5>
                    </GridItem>
                    <GridItem xs={4}>
                        <h2 className={classes.headerx}><FaLock />     SECURE</h2>
                        <h5 className={classes.root2}>ENCRYPTED, COVERED UNDER A BAA & NEVER SAVES E-PHI ON YOUR HOSTING SERVER…</h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={3}>

                    </GridItem>
                    <GridItem xs={3}>
                        <h2 className={classes.headerx}><FaWordpress />    WORDPRESS</h2>
                        <h5 className={classes.root2}>THE ONLY HIPAA FORM SOLUTION SPECIFICALLY FOR WORDPRESS!</h5>
                    </GridItem>
                    <GridItem xs={3}>
                        <h2 className={classes.headerx}><FaFlagUsa />   MADE IN THE USA</h2>
                        <h5 className={classes.root2}>DEVELOPED & SUPPORTED IN THE USA!</h5>
                    </GridItem>
                </GridContainer>


            </IconContext.Provider>

        </div>

        <div className={`flex-column align-items-center pt-20`}>

            <button
                className={`mb-20 cursor-pointer ${styles["products-button"]}`}
                onClick={() => history.push(ROUTE_SHOP)}
            > <IconContext.Provider value={{color: "white"}}>
                <div>
                    Get Started Today <FaSignInAlt />
                </div>
            </IconContext.Provider>


            </button>

        </div>

        <div className={`${styles["hipaacompliant"]}`}>
            <h1 className={`${styles["hipaaheader"]}`}>ARE YOU HIPAA COMPLIANT?</h1>
            <h5 className={`${styles["hipaaheader2"]}`}>If you intend to accept health information over a website you need HIPAA compliant forms!</h5>
            <p className={`${styles["hipaacontent"]}`}>
                Traditional forms are designed to email the form data on submission, this is how most form builders are setup for WordPress & is NOT HIPAA compliant.
                If you configure your forms to save to a database instead of sending through email you still won’t be HIPAA compliant if that database is not encrypted & if
                you don’t have a BAA in place with your hosting provider. Even if you do get a BAA in place with your hosting provider, encrypt your forms & encrypt your
                database you still need to ensure that accessing the data is secured behind login protection AND ensure that it’s logged each time someone accesses it.
                There are a lot of factors to consider when it comes to taking patient health information or “E-PHI” over online forms from a website, complying with all
                regulations except one means you’re still not HIPAA compliant. Fortunately our HIPAA Forms plugin & API service solves these complex compliance issues enabling
                you to take electronic health information over your website securely, easily & affordably. Our plugin makes things easy by allowing you to simply check a box
                next to a specific form built with Caldera or Gravity and instantly making your Caldera or Gravity forms HIPAA compliant forms.&nbsp;&nbsp;
                <button
                    className={`mb-20 cursor-pointer ${styles["hipaa-button"]}`}
                    onClick={() => history.push(ROUTE_SHOP)}
                > <IconContext.Provider value={{color: "black"}}>
                    <div>
                        Start using HIPAA Web Forms for FREE now!
                    </div>
                </IconContext.Provider>
                </button>
            </p>


        </div>

    </React.Fragment>

  );

};

export default withRouter(HomeProductsList);
