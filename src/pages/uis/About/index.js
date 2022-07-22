import React, { useState } from "react";

const About = () => {
  const para =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const [truncate, settruncate] = useState(true);

  return (
    <div className="about">
      <h1>About</h1>
      {para.length > 200 && truncate ? (
        <p>
          {`${para.substring(0, 200)}...`}

          <span onClick={() => settruncate(false)}>Show More</span>
        </p>
      ) : (
        <p>
          {para}
          <span onClick={() => settruncate(true)}>Show Less</span>
        </p>
      )}

      <div className="grid">
        <div className="item">
          <h3>CEO</h3>
          <p>Mr. Praveen Sinha</p>
        </div>
        <div className="item">
          <h3>Employeers</h3>
          <p>18626</p>
        </div>
        <div className="item">
          <h3>Headquaters</h3>
          <p>Mumbai, IN</p>
        </div>
        <div className="item">
          <h3>Founded</h3>
          <p>1915</p>
        </div>
        <div className="item">
          <h3>Market Cap</h3>
          <p>744.83B</p>
        </div>
        <div className="item">
          <h3>Price-Earnings Ratio</h3>
          <p>16.66</p>
        </div>
        <div className="item">
          <h3>Dividend Yield</h3>
          <p>0.01</p>
        </div>
        <div className="item">
          <h3>Average Volume</h3>
          <p>66.92M</p>
        </div>
      </div>
    </div>
  );
};

export default About;
