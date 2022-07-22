import React, { useState } from "react";
import Tabs from "../../../components/Tabs";
import Table from "./uis/Table";

const Transactions = () => {
  const data = [
    {
      name: "Pending Transactiion",
    },
    {
      name: "Successfull Transactiion",
    },
  ];

  const [activeTab, setactiveTab] = useState(data[0].name);
  return (
    <div className="transactions">
      <Tabs data={data} activeTab={activeTab} setactiveTab={setactiveTab}>
        {activeTab === data[0].name && <Table />}
        {activeTab === data[1].name && <Table />}
      </Tabs>
    </div>
  );
};

export default Transactions;
