import React from "react";
import SearchBar from "../../../components/SearchBar";
import Newss from "./uis/Table/index";
import { NewsContextProvider } from "./NewsContext";

const News = () => {

  return (
    <div className="news">
      <div className="header">
        <h3 style={{ paddingRight: "10px" }}>News</h3>
        <SearchBar />
      </div>
      {/* <Table /> */}
      <NewsContextProvider>
        <Newss />
      </NewsContextProvider>
    </div>
  );
};

export default News;


