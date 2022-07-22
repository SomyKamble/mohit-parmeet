import React from "react";

const Table = () => {
  return (
    <div className="table-transactions">
      <div className="header">
        <div className="col">Symbol</div>
        <div className="col">Type</div>
        <div className="col">Expires</div>
        <div className="col">Order Type</div>
        <div className="col">Status</div>
        <div className="col">Limit Price</div>
        <div className="col">Price</div>
      </div>

      <div className="rows">
        <div className="row">
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
        </div>
        <div className="row">
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
          <div className="col">-</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
