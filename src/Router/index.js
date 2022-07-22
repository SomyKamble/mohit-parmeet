import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import AddBroker from "../pages/AddBroker";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Portfolio from "../pages/Portfolio";

const Router = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/broker" element={<AddBroker />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/portfolio" replace />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
