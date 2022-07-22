import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonPrimary from "../../../components/button/ButtonPrimary";

const BuyCard = () => {
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

  const { pathname } = useLocation();

  const [menuOpen, setmenuOpen] = useState(null);
  const [tradeType, settradeType] = useState("buy");
  const [activeMenu, setactiveMenu] = useState("Market Order");
  // const [selectedRadioBtn, setSelectRadioBtn] = useState({
  //   isAgree: false,
  //   mode: ""
  // });




  useEffect(() => {
    setmenuOpen(null);
  }, [pathname]);

  return (
    <div className="buy-card">
      {menuOpen && <div className="bg-menu" onClick={() => setmenuOpen(null)} />}
      <div className="header">

        <div className="flex">
          <div className={`btn mr-2 ${tradeType === "buy" ? "btn-buy" : ""}`} onClick={() => settradeType("buy")}>
            <p className="sub">Buy IDEA</p>
          </div>
          <div className={`btn ${tradeType === "sell" ? "btn-sell" : ""}`} onClick={() => settradeType("sell")}>
            <p className="sub">Sell IDEA</p>
          </div>
        </div>
        



        <div className="menu-wrapper">
          <i className="fa-solid fa-caret-down" onClick={() => setmenuOpen("buy")}></i>
          {menuOpen === "buy" && (
            <div className="menu">
              <p className="menu-title">Order Type</p>
              {menuData.map((item) => (
                <div
                  key={item.name}
                  className="menu-item"
                  onClick={() => {
                    setactiveMenu(item.name);
                    setmenuOpen(null);
                  }}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex radio-btn">
          <div className="radio-btn">
            <label>Intraday: </label>
            <input type="radio" name="mode" value="Intraday" />
          </div>
          <div className="radio-btn">
            <label>C and C: </label>
            <input type="radio" name="mode" value="CashNCarry" />
          </div>
        </div>
      </div>

      <div className="content">
        <p className="title">{activeMenu}</p>

        <div className="input">
          <p>Quantity</p>
          <input type="text" placeholder="Qty" />
        </div>

        <div className="market">
          <p>Market price</p>
          <h3>
            <span>$</span>7.80
          </h3>
        </div>

        {(activeMenu === "Limit order" || activeMenu === "Stop loss order" || activeMenu === "Stop limit order") && (
          <div className="input">
            <p>Limit Price</p>
            <input
              type="text"
              placeholder={activeMenu !== "Stop loss order" ? "Qty" : ""}
              disabled={activeMenu === "Stop loss order" ? true : false}
            />
          </div>
        )}
        {(activeMenu === "Stop loss order" || activeMenu === "Stop limit order") && (
          <div className="input">
            <p>Trigger Price</p>
            <input type="text" placeholder="Qty" />
          </div>
        )}

        <p className="msg">Enter enough buying power. Enter money into the account.</p>
        <div className="cost">
          <p>Estimated cost</p>
          <h3>
            <span>$</span>78.00
          </h3>
        </div>
        <div className="actions">
          <ButtonPrimary link="/" text="Review Order" className={tradeType === "buy" ? "btn-buy" : "btn-sell"} />
          <ButtonPrimary
            link="/"
            text="Remove from Watchlist"
            className={tradeType === "buy" ? "btn-buy" : "btn-sell"}
          />
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
