import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import logo from "../../media/images/logo.svg";



const Signup = () => {
    // const dispatch = useDispatch();
    const [passVisible, setpassVisible] = useState(false);
    return (
        <div className="signup">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="container" >
                <h1>Questimate</h1>
                <h2>We're happy to see you!</h2>
                <p className="subtitle">Enter the following details to get started for free.</p>
                <div className="content-input">
                    <div className="left">
                        <div className="input mb-3">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="input mb-3">
                            <input type={passVisible ? "text" : "password"} placeholder="Password" />
                            {!passVisible ? (
                                <i className="fa-solid fa-eye" onClick={() => setpassVisible(true)}></i>
                            ) : (
                                <i className="fa-solid fa-eye-low-vision" onClick={() => setpassVisible(false)}></i>
                            )}
                        </div>
                        <div className="input mb-3">
                            <input type={passVisible ? "text" : "password"} placeholder="Confirm password" />
                            {!passVisible ? (
                                <i className="fa-solid fa-eye" onClick={() => setpassVisible(true)}></i>
                            ) : (
                                <i className="fa-solid fa-eye-low-vision" onClick={() => setpassVisible(false)}></i>
                            )}
                        </div>
                    </div>
                    {/* right */}
                    <div className="right">
                        <div className="input mb-3">
                            <input type="text" placeholder="Phone No." />
                        </div>
                        <div className="input mb-3">
                            <input type="date" placeholder="Date of birth" />
                        </div>
                        <div className="input mb-3">
                            <input type="text" placeholder="State of residence" />
                        </div>
                    </div>
                </div>
                <ButtonPrimary text="SIGNUP" link="/broker" />
                <div className="new-acc">
                    <p>Existing User?</p>
                    <Link to="/login">Login</Link>
                </div>
            </div>
           
        </div>
    );
};

export default Signup;


