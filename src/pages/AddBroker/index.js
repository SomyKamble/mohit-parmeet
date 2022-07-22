import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import logo from "../../media/images/logo.svg";
import { setLogin } from "../../redux/actions/auth";

const data = [
  {
    img: "https://alphafirms.in/wp-content/uploads/2021/05/zerodha-logo.png",
    name: "ZERODHA",
    connected: false,
  },
  {
    img: "https://play-lh.googleusercontent.com/wnNYBAH1m-XJMfduOHfEATQAhCwyKUYeHAD1Fi9-OjtxKyPKjFEmgWvbx-OX2dM65xjp",
    name: "KITE",
    connected: false,
  },
  {
    img: "https://upstox.com/favicon/mstile-310x310.png",
    name: "UPSTOX",
    connected: false,
  },
  {
    img: "https://groww.in/logo-groww270.png",
    name: "GROWW",
    connected: false,
  },
];

const AddBroker = () => {
  const dispatch = useDispatch();
  const [list, setlist] = useState(data);

  function checkItem(index) {
    let dataCopy = JSON.parse(JSON.stringify(list));

    dataCopy[index].connected = true;

    setlist(dataCopy);
  }

  return (
    <div className="add-broker">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <div className="header">
          <p>ADD BROKER</p>
        </div>
        {list.map((item, index) => (
          <div key={item.name} className="card">
            <div className="img">
              <img src={item.img} alt="logo" />
            </div>
            <p className="name">{item.name}</p>
            <p className="reg">Register</p>
            <ButtonPrimary
              text={item.connected ? "Connected" : "Connect"}
              onClick={() => checkItem(index)}
              className={item.connected ? "btn-active" : ""}
            />
            <i className={`fa-solid fa-check ${item.connected ? "check-green" : ""}`}></i>
          </div>
        ))}
        <div className="actions">
          <div className="btn" onClick={() => dispatch(setLogin(true))}>
            <p>Skip</p>
          </div>
          <div className="btn" onClick={() => dispatch(setLogin(true))}>
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBroker;
