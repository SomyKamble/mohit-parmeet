import React from "react";

const Table = () => {
  return (
    <div className="table-twitter">
      <div className="header">
        <div className="col">Date</div>
        <div className="col">Ticker</div>
        <div className="col">Heading</div>
      </div>

      <div className="rows">
        <div className="row">
          <div className="col">2022-02-15</div>
          <div className="col">HDFC</div>
          <div className="col">Lorem Ipsum</div>
        </div>
        <div className="row">
          <div className="col">2022-02-15</div>
          <div className="col">HDFC</div>
          <div className="col">Lorem Ipsum</div>
        </div>
        <div className="row">
          <div className="col">2022-02-15</div>
          <div className="col">HDFC</div>
          <div className="col">Lorem Ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
