import React from "react";
import PieChartInstalledCapacity from "./graphs/PieChartInstalledCapacity";
import StackedBarGraph from "./graphs/StackedBarGraph";

const data = [
  { name: "Coal", value: 205235, color: "#c8c9cb", image: "coal.png" },
  {
    name: "Oil and Gas",
    value: 24824,
    color: "#e6e6e6",
    image: "oilandgas.png",
  },

  { name: "Nuclear", value: 6780, color: "#ffd5d5", image: "nuclear.png" },
  { name: "Total RE", value: 173619, color: "#d7e2a4", image: "totalRE.png" },
  { name: "Wind", value: 42868, color: "#ddeff3", image: "wind.png" },
  { name: "Solar", value: 67078, color: "#fef3d6", image: "solar.png" },
];

const MainpageGraphSection = () => {
  return (
    <>
      <div className="px-[70px]">
        <div className="mainpage-graph-wrapper my-[50px] lg:px-[120px] sm:px-[5px] md:px[50px] h-screen flex flex-col gap-[30px]">
          <div className="mainpage-graph-container ">
            <div className="mainpage-upper-graph component-shadow bg-white flex">
              <div className="mainpage-upper-graph-container p-[15px] w-full flex flex-col">
                <div className="uppergraph-data-r1 flex gap-[10px] flex-wrap justify-center">
                  {data.map((item) => (
                    <div
                      key={item.name}
                      className="uppergraph-data-container2 flex flex-row w-[250px] p-[10px] px-[15px] justify-between gap-[10px]"
                      style={{ backgroundColor: item.color }}
                    >
                      <div className="flex">
                        <img
                          src={`images/mainpagegraphs/${item.image}`}
                          alt={item.name}
                          className="w-[60px]"
                        />
                      </div>
                      <div className="flex flex-col justify-around mx-[20px]">
                        <span className="upper-data-heading">{item.name}</span>
                        <span className="upper-data-subtxt">
                          {item.value} MW
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mainpage-bottom-graphs flex lg:flex-row gap-[30px] sm:flex-col md:flex-col">
            <div className="mainpage-left flex justify-between items-center mb-[30px] lg:h-[430px] md:h-[430px] flex-col gap-[10px] component-shadow bg-white lg:w-[40%] sm:w-full md:w-full rounded-[30px] p-[10px] ">
              <h1 className="mainpage-left-heading">Installed Capacity</h1>
              <PieChartInstalledCapacity />
            </div>
            <div className="mainpage-right lg:h-[430px] md:h-[430px] component-shadow bg-white lg:w-[60%] sm:w-full md:w-full rounded-[30px] p-[10px] flex flex-col justify-center items-center">
              <h1 className="mainpage-left-heading max-w-[350px] ">
                Power Sources Trend Installed Capacity
              </h1>
              <StackedBarGraph />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpageGraphSection;
