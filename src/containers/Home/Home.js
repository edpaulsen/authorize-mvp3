import React from "react";
import { withRouter } from "react-router";
import HomeProducts from "../HomeProducts/HomeProducts";
import styles from "./Home.module.css";
import homeHeaderImage from "../../assets/images/headerimage.jpg";
import ReactPlayer from "react-player/lazy";



const HomeContainer = () => {

    return (

      <React.Fragment>

              <img
                src={homeHeaderImage}
                alt="HIPAA Forms Header Image"
                className={`${styles["hero-image"]}`}

                />


      <HomeProducts>
        <div className={`${styles["video-wrapper"]}`}>
          <ReactPlayer
              className='react-player fixed-bottom'
            url='https://www.hipaaforms.online/wp-content/uploads/2021/04/HIPAAForms.mp4?_=1'
            controls = {true}
            width="100%"
            height="100%"
          />

        </div>




      </HomeProducts>
    </React.Fragment>

  );
};

export default withRouter(HomeContainer);
