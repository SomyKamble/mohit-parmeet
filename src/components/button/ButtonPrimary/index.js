import React from "react";
import { Link } from "react-router-dom";

const ButtonPrimary = (props) => {
  const { link, onClick, text, className } = props;
  return link ? (
    <Link to={link} className={`button-primary ${className}`}>
      <p>{text}</p>
    </Link>
  ) : (
    <div className={`button-primary ${className}`} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default ButtonPrimary;
