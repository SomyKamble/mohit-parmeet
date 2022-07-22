import React, { useState, useEffect } from "react";
import axios from "axios"
import Chart from "react-apexcharts";



export default function SampleLine() {
  const [activeTab, setactiveTab] = useState("1D");
  const tabData = [{ name: "1D" }, { name: "1M" }, { name: "3M" }, { name: "6M" }, { name: "1Y" }, { name: "5Y" }];

  // async function fetchData() {
  //   const url = "http://173.230.130.191:9000/getdata/HDFC?format=json";
  //   const response = await fetch(url);
  //   const datapoints = await response.json();
  //   console.log(datapoints);

  // }
  const fetchNotes = async() =>{
    const data = await axios.get("https://cors-anywhere.herokuapp.com/https://173.230.130.191:9000/getdata/HDFC?format=json");
    console.log(data);
  }


  const series = [
    {
      name: "Desktops",
      data: [10, 49, 35, 51, 49, 62, 69, 91, 148],
    },
  ];
  useEffect(() => {
    fetchNotes();
  }, [])

  var options = {
    chart: {
      height: 350,
      type: "line",
      foreColor: "#373d3f",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["var(--color-success)"],
      //   show: true,
      //   curve: "smooth",
      //   lineCap: "butt",
      //   colors: undefined,
      width: 2,
      //   dashArray: 0,
    },
    // title: {
    //   text: "Product Trends by Month",
    //   align: "left",
    // },
    grid: {
      show: false,
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      colors: ["#fff"],
      labels: {
        style: {
          colors: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
  };
  return (
    <div className="line-chart">
      <div className="header">
        <h2>TATA MOTORS</h2>
        <h1>
          <span>$</span>7.80
        </h1>
        <p>+$1.00 (+1.45%)</p>
      </div>
      <Chart className="chart" options={options} type="line" series={series} width="100%" height="100%" />
      <div className="actions">
        {tabData.map((item) => (
          <div
            key={item.name}
            className={`tab ${activeTab === item.name ? "tab-active" : ""}`}
            onClick={() => setactiveTab(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
