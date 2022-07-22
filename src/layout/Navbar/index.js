import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import logo from "../../media/images/logo.svg";

const Navbar = () => {
  const { pathname } = useLocation();

  const [menuOpen, setmenuOpen] = useState(null);
  const [navbarOpen, setnavbarOpen] = useState(false);

  useEffect(() => {
    setmenuOpen(null);
    setnavbarOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="btn-nav hd-dstb" onClick={() => setnavbarOpen(!navbarOpen)}>
        <i className="fa-solid fa-align-left"></i>
      </div>
      <div className={`navbar ${navbarOpen ? "navbar-open" : ""}`}>
        {menuOpen && <div className="bg-menu" onClick={() => setmenuOpen(null)} />}
        <div className="left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <SearchBar className="hd-mb" />
        </div>
        <div className="right">
          <div className="item-wrapper">
            <Link to="">
              <div className={`item ${pathname === "/portfolio" ? "item-active" : ""}`}>
                <p>Cash</p>
              </div>
            </Link>
          </div>
          {/* <div className="item-wrapper">
            <Link to="/portfolio">
              <div className={`item ${pathname === "/portfolio" ? "item-active" : ""}`}>
                <p>Portfolio</p>
              </div>
            </Link>
          </div> */}
          <div className="item-wrapper">
            <Link to="/dashboard">
              <div className={`item ${pathname === "/dashboard" ? "item-active" : ""}`}>
                <p>Dashboard</p>
              </div>
            </Link>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <i className="fa-solid fa-expand"></i>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item">
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>
          <div className="item-wrapper">
            <div
              className="item"
              onClick={() => {
                if (menuOpen === "profile") {
                  setmenuOpen(null);
                } else {
                  setmenuOpen("profile");
                }
              }}
            >
              <i className="fa-solid fa-circle-user"></i>
            </div>
            {menuOpen === "profile" && (
              <div className="menu">
                <div className="user-info">
                  <i className="fa-solid fa-circle-user"></i>
                  <p>
                    Portfolio: <span>$27000.00</span>
                  </p>
                  <p>
                    Buying Power: <span>$5000.00</span>
                  </p>
                </div>

                <div className="menu-item">
                  <i className="fa-solid fa-user"></i>
                  <p>Profile</p>
                </div>
                <div className="menu-item">
                  <i className="fa-solid fa-wallet"></i>
                  <p>My Wallet</p>
                </div>
                <div className="menu-item">
                  <i className="fa-solid fa-gear"></i>
                  <p>Settings</p>
                </div>
                <div className="menu-item">
                  <i className="fa-solid fa-power-off"></i>
                  <p>Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
