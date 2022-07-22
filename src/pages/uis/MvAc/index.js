import React from "react";

const MvAc = () => {
  return (
    <div className="mvac">
      <div className="card card-left">
        <p className="mb-3">Your Market Value</p>
        <h1 className="mb-3">
          <span>$</span>1,024.23
        </h1>
        <div className="flex mb-2">
          <p className="grey">Cost</p>
          <p>$4892.95</p>
        </div>
        <div className="flex mb-2">
          <p className="grey">Today's Return</p>
          <p>
            $5062.60 <span className="green">(+100.00%)</span>
          </p>
        </div>
        <div className="flex">
          <p className="grey">Total Return</p>
          <p>
            +5062.60 <span className="green">(+4.31%)</span>
          </p>
        </div>
      </div>
      <div className="card card-right">
        <p className="mb-3">Your Average Cost</p>
        <h1 className="mb-3">
          <span>$</span>940.23
        </h1>
        <div className="flex mb-2">
          <p className="grey">Shares</p>
          <p>14</p>
        </div>
        <div className="flex">
          <p className="grey">Portfolio Diversity</p>
          <p>19.49%</p>
        </div>
      </div>
    </div>
  );
};

export default MvAc;
