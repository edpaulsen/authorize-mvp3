import React from "react";
import { withRouter } from "react-router";
import PolicyContainer from "../Policy/Policy";
import styles from "./Policy.module.css";
import Navbar from "../Navbar/Navbar";
import{ ROUTE_HOME} from '../../utils/constants';



const PolicyContainer = () => {

    return (

      <React.Fragment>

    <Navbar>

    </Navbar>


      <PolicyContent>
        <div className={`${styles["video-wrapper"]}`}>
            <p>ad;fjaf ad;sf;asldkjf asldf jdlfk asdlfjaldskfja
                asldkjfalsdfjalsdf
                dalfkj adlfjasdlf</p>

        </div>

      </PolicyContent>
    </React.Fragment>

  );
};

export default withRouter(PolicyContainer);
