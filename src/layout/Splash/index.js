import React from "react";
import logo from "../../media/images/logo.svg";

const Splash = () => {
  return (
    <div className="splash">
      <div className="square" />
      <div className="img">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Splash;
