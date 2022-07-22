import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import logo from "../../media/images/logo.svg";
import { setLogin } from "../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const [passVisible, setpassVisible] = useState(false);
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container">
        <h1>Questimate</h1>
        <h2>Welcome back!</h2>
        <p className="subtitle">Login to an existing account.</p>
        <div className="input mb-3">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input mb-1">
          <input type={passVisible ? "text" : "password"} placeholder="Password" />
          {!passVisible ? (
            <i className="fa-solid fa-eye" onClick={() => setpassVisible(true)}></i>
          ) : (
            <i className="fa-solid fa-eye-low-vision" onClick={() => setpassVisible(false)}></i>
          )}
        </div>
        <Link to="/login">Forgot password?</Link>
        <ButtonPrimary text="LOGIN" link="/broker" />
        <div className="new-acc">
          <p>New user?</p>
          <Link to="/Signup">Create new account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
