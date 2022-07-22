import React from "react";
import LineChart from "../../components/charts/LineChart";
import SearchBar from "../../components/SearchBar";
import BuyCard from "../uis/BuyCard";
import BuyingPower from "../uis/BuyingPower";
import MvAc from "../uis/MvAc";
import News from "../uis/News";
import StWl from "../uis/StWl";
import Transactions from "../uis/Transactions";
import Twitter from "../uis/Twitter";
// import Stock from "../../components/charts/LineChart/icici";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SearchBar className="hd-dstb" />
      <div className="left">
        <LineChart />
        <BuyingPower />
        {/* <Stock></Stock> */}
        <Transactions />
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

export default Dashboard;
