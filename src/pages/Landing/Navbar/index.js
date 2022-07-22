import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../media/images/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(null);
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <>
      <div className="btn-nav hd-dstb" onClick={() => setnavbarOpen(!navbarOpen)}>
        <i className="fa-solid fa-align-left"></i>
      </div>

      <div className={`navbar-landing ${navbarOpen ? "navbar-open" : ""}`}>
        {menuOpen && <div className="bg-menu" onClick={() => setmenuOpen(null)} />}
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="item-wrapper">
            <div className="item">
              <p>Products</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <p>Learn</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <p>Support</p>
            </div>
          </div>
          <div className="line" />
          <div className="item-wrapper">
            <div className="item dash-btn">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div
              className="item"
              onClick={() => {
                navigate("/login");
                setnavbarOpen(false);
              }}
            >
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
