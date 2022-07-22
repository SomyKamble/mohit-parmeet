import React from "react";

const SearchBar = (props) => {
  const { className } = props;
  return (
    <div className={`search-bar ${className}`}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input placeholder="Search" />
    </div>
  );
};

export default SearchBar;
