import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import logo from "../../media/images/logo.svg";
import { setLogin } from "../../redux/actions/auth";
import Container from 'react-bootstrap/Container';

const Login = () => {
    const dispatch = useDispatch();
    const [passVisible, setpassVisible] = useState(false);
    return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Container style={{height:"auto",width:"100rem"}}>
                <h1>Questimate</h1>
                <h2>We're happy to see you!</h2>
                <p className="subtitle">Enter the following details to get started for free.</p>
                <div className="row" style={{display:"flex" ,justifyContent:"space-between"}}>
                    <div class="left" style={{width:"45%"}}>
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
                    <div class="right" style={{width:"45%"}}>
                        <div className="input mb-3">
                            <input type="text" placeholder="Phone No." />
                        </div>
                        <div className="input mb-3">
                            <input type="date"  placeholder="Date of birth" />
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

            </Container>
        </div>

    );
};

export default Login;



// const Login = () => {
//     const dispatch = useDispatch();
//     const [passVisible, setpassVisible] = useState(false);
//     return (
//         <div >
//             {/* <div className="logo">
//                 <img src={logo} alt="logo" />
//             </div> */}
//             <div className="mvac" >
//                 <div className="card card-left">
//                     <div className="input mb-3">
//                            <input type="text" placeholder="Email" />
//                          </div>
//                         <div className="input mb-3">
//                              <input type={passVisible ? "text" : "password"} placeholder="Password" />
//                              !passVisible ? (
//                                  <i className="fa-solid fa-eye" onClick={() => setpassVisible(true)}></i>
//                              ) : (
//                                  <i className="fa-solid fa-eye-low-vision" onClick={() => setpassVisible(false)}></i>
//                              )
//                          </div>
//                          <div className="input mb-3">
//                              <input type={passVisible ? "text" : "password"} placeholder="Confirm password" />
//                              !passVisible ? (
//                                  <i className="fa-solid fa-eye" onClick={() => setpassVisible(true)}></i>
//                              ) : (
//                                  <i className="fa-solid fa-eye-low-vision" onClick={() => setpassVisible(false)}></i>
//                              )
//                          </div>
//                 </div>
//                 <div className="card card-right">
//                     <p className="mb-3">Your Average Cost</p>
//                     <h1 className="mb-3">
//                         <span>$</span>940.23
//                     </h1>
//                     <div className="flex mb-2">
//                         <p className="grey">Shares</p>
//                         <p>14</p>
//                     </div>
//                     <div className="flex">
//                         <p className="grey">Portfolio Diversity</p>
//                         <p>19.49%</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;

