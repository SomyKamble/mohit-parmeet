import React from "react";
import Navbar from "./Navbar";
import globe from "../../media/videos/globe.mp4";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import Splash from "../../layout/Splash";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="left-landing">
        <h1>
          EMPOWERING PEOPLE TO <br /> BECOME GREAT <span>INVESTORS</span>
        </h1>
        <p className="desc">
          Questimate is a technology driven investment platform that provides businesses, financial advisors and traders
          with comprehensive portfolio analytics solutions, automated trade executions and dynamic rebalancing.
        </p>
        <ButtonPrimary text="Get Started" />
      </div>
      <div className="right-landing">
        <video src={globe} playsInline autoPlay muted loop controls={false} />
      </div>
      <Splash />
    </div>
  );
};

export default Landing;
