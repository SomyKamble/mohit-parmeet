import React from "react";

const Tabs = (props) => {
  const { data, activeTab, setactiveTab, children } = props;

  return (
    <div className="tabs">
      <div className="tabs-container">
        {data.map((item) => (
          <div
            className={`tab ${item.name === activeTab ? "tab-active" : ""}`}
            key={item.name}
            onClick={() => setactiveTab(item.name)}
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Tabs;
