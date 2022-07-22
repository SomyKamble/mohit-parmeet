import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const StWl = () => {
  const menuData = [
    {
      name: "Market Order",
    },
    {
      name: "Limit order",
    },
    {
      name: "Stop loss order",
    },
    {
      name: "Stop limit order",
    },
    {
      name: "Trailing stop order",
    },
  ];

  const stocksData = [
    {
      name: "IDEA",
      price: "11.20",
      qty: 20,
      rate: "3.70",
      color: "green",
    },
    {
      name: "ASHOKA",
      price: "96.25",
      qty: 10,
      rate: "0.26",
      color: "red",
    },
    {
      name: "TATACHEM",
      price: "959.80",
      qty: 4,
      rate: "-0.80",
      color: "green",
    },
    {
      name: "BAFNAPH",
      price: "178.10",
      qty: 10,
      rate: "1.23",
      color: "green",
    },
    {
      name: "TCS",
      price: "11.20",
      qty: 20,
      rate: "3.70",
      color: "red",
    },
  ];

  const { pathname } = useLocation();
  const [menuOpen, setmenuOpen] = useState(null);

  useEffect(() => {
    setmenuOpen(null);
  }, [pathname]);

  return (
    <div className="stwl">
      {menuOpen && <div className="bg-menu" onClick={() => setmenuOpen(null)} />}
      <div className="header">
        <div className="title">
          <h3>Stocks</h3>
        </div>
        <div className="menu-wrapper">
          <i className="fa-solid fa-caret-down" onClick={() => setmenuOpen("stocks")}></i>
          {menuOpen === "stocks" && (
            <div className="menu">
              <p className="menu-title">Order Type</p>
              {menuData.map((item) => (
                <div
                  key={item.name}
                  className="menu-item"
                  onClick={() => {
                    setmenuOpen(null);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="list">
        {stocksData.map((item) => (
          <div key={item.name} className="item">
            <div className="top">
              <h3>{item.name}</h3>
              <h3>
                <span>$</span>
                {item.price}
              </h3>
            </div>
            <div className="bottom">
              <p>{item.qty} shares</p>
              <p className="rate-green">{item.rate}%</p>
            </div>
          </div>
        ))}
      </div>

      <div className="header">
        <div className="title">
          <h3>Watchlist</h3>
        </div>
        <div className="menu-wrapper">
          <i className="fa-solid fa-caret-down" onClick={() => setmenuOpen("watchlist")}></i>
          {menuOpen === "watchlist" && (
            <div className="menu">
              <p className="menu-title">Order Type</p>
              {menuData.map((item) => (
                <div
                  key={item.name}
                  className="menu-item"
                  onClick={() => {
                    setmenuOpen(null);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="list">
        {stocksData.map((item) => (
          <div key={item.name} className="item">
            <div className="top">
              <h3>{item.name}</h3>
              <h3>
                <span>$</span>
                {item.price}
              </h3>
            </div>
            <div className="bottom">
              <p>{item.qty} shares</p>
              <p className="rate-green">{item.rate}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StWl;
