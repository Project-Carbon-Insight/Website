import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../Components/DashboardComponents/DashboardSidear";
import DashboardNavbar from "../Components/DashboardComponents/DashboardNavbar";
import NetCapacityAdditionGraph from "../Components/DashboardComponents/NetCapacityAdditionGraph";
import PowergenerationTrends from "../Components/DashboardComponents/PowergenerationTrends";
import TopfiveCoal from "../Components/DashboardComponents/TopfiveCoal";
import TopfiveHydro from "../Components/DashboardComponents/TopfiveHydro";
import TopfiveRen from "../Components/DashboardComponents/TopfiveRen";
import WholeIndia from "../Components/DashboardComponents/WholeIndia";

const ElectricityDashboard = () => {
  const [searchState, setSearchState] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("1");
  const [selectedYear, setSelectedYear] = useState("2020");

  const navigate = useNavigate();

  const regionData = [
    {
      name: "North Region",
      value: "109.52",
      color: "#f5f6fa",
      image: "north.png",
    },
    {
      name: "West Region",
      value: "194.05",
      color: "#f5f6fa",
      image: "west.png",
    },
    { name: "East Region", value: "250", color: "#f5f6fa", image: "east.png" },
    {
      name: "South Region",
      value: "87.15",
      color: "#f5f6fa",
      image: "south.png",
    },
    {
      name: "North-East Region",
      value: "14.79",
      color: "#f5f6fa",
      image: "north-east.png",
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedYearIn, setSelectedYearIn] = useState(2018);

  const handleYearChange = (e) => {
    setSelectedYearIn(parseInt(e.target.value));
  };

  const years = ["2018", "2019", "2020", "2021", "2022"];

  const handleSearch = () => {
    const formattedMonth = selectedMonth.padStart(2, "0"); // Ensure month is in MM format
    const formattedDate = `${formattedMonth}/01/${selectedYear}`;
    navigate(`/dashboard/statewise?state=${searchState}&date=${formattedDate}`);
  };

  return (
    <div className="flex bg-[#f5f6fa]  min-h-screen">
      <DashboardSidebar />

      <div className="ml-64 flex flex-col items-center w-full">
        <div className="h-screen w-full flex flex-col justify-center items-center mt-[20px]">
          <h1 className="satoshi-bold font-bold text-[40px] mb-[50px] mt-[20px] pr-[130px]">
            India Map
          </h1>
          <WholeIndia />
        </div>
        <div>
          <div className="dashboard-state-seach-wrapper w-full flex flex-row justify-center p-[10px] items-center gap-[10px] mt-[40px]">
            <div className="dashboard-state-seach-container flex flex-row gap-[20px] items-center bg-white px-[10px] py-[5px] rounded-xl component-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                className="ml-[7px]"
              >
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                />
              </svg>
              <input
                type="text"
                className="w-[400px] p-[5px]"
                placeholder="Search...."
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
              />
            </div>
            <select
              className="dashboard-state-month p-[10px] rounded-xl component-shadow bg-white"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="dashboard-state-year p-[10px] rounded-xl component-shadow bg-white"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <button
              className="search-button p-[10px] bg-blue-500 text-white rounded-xl"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="dashoard-card-container w-full   my-[50px] p-[20px] ">
          <div className="uppergraph-data-r1 flex gap-[30px] flex-wrap justify-center bg-white rounded-xl component-shadow p-[25px]">
            {regionData.map((item) => (
              <div key={item.name} className="flex flex-col items-center">
                <div
                  className="uppergraph-data-container1 rounded-full component-shadow flex justify-center items-center w-[300px] h-[300px]"
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    src={`/images/dashboardimages/${item.image}`}
                    alt={item.name}
                    className="w-[250px]"
                  />
                </div>
                <div className="flex flex-col items-center mt-[10px]">
                  <span className="upper-data-heading text-center">
                    {item.name}
                  </span>
                  <span className="upper-data-subtxt text-center">
                    {item.value} MW
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-wrapper flex flex-row p-[20px] pb-[50px] gap-[20px]">
          <div className="dashboard-graph-left w-1/2 component-shadow rounded-xl bg-white flex flex-col justify-center items-center">
            <h1 className="graph1-heading">Net Capacity Addition Trend</h1>
            <NetCapacityAdditionGraph />
          </div>
          <div className="dashboard-graph-right w-1/2 component-shadow rounded-xl bg-white flex flex-col justify-center items-center">
            <h1 className="graph1-heading">Power Generation Trends</h1>
            <PowergenerationTrends />
          </div>
        </div>
        <div className="map-wrapper p-[10px] flex flex-row">
          <div className="map-container p-[10px] flex justify-center w-full flex-wrap item">
            <div className="flex flex-col justify-center items-center gap-[30px] w-1/2 ">
              <h1 className="graph1-heading">
                Top 5 States with Coal Capacities
              </h1>
              <TopfiveCoal />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px] w-1/2 ">
              <h1 className="graph1-heading">
                Top 5 States with Hydro Capacities
              </h1>
              <TopfiveHydro />
            </div>
            <div className="flex flex-col justify-center items-center gap-[30px] w-1/2">
              <h1 className="graph1-heading">
                Top 5 States with Renewable Capacities
              </h1>
              <TopfiveRen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityDashboard;
