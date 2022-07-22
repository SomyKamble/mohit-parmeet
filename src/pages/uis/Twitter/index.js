import React from "react";
import SearchBar from "../../../components/SearchBar";
import Table from "./uis/Table";

const Twitter = () => {
  return (
    <div className="twitter">
      <div className="header">
        <h3>Twitter</h3>
        <SearchBar />
      </div>
      <Table />
    </div>
  );
};

export default Twitter;
