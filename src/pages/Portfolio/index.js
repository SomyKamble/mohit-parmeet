import React from "react";
import LineChart from "../../components/charts/LineChart";
import SearchBar from "../../components/SearchBar";
import About from "../uis/About";
import BuyCard from "../uis/BuyCard";
import MvAc from "../uis/MvAc";
import News from "../uis/News";
import StWl from "../uis/StWl";
import Transactions from "../uis/Transactions";
import Twitter from "../uis/Twitter";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <SearchBar className="hd-dstb" />
      <div className="left">
        <LineChart />
        <MvAc />
        <Transactions />
        <About />
        <News />
      </div>
      <div className="right">
        <BuyCard />
        <StWl />
        <Twitter />
      </div>
    </div>
  );
};

export default Portfolio;
