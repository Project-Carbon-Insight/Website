// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import EnergyConsumptionGraph from "../Components/StateWise/EnergyConsumptionGraph";
// import DashboardSidebar from "../Components/DashboardComponents/DashboardSidear";
// import EnergyGenerationGrph from "../Components/StateWise/EnergyGenerationGrph";
// import StateMap from "../Components/StateWise/StateMap";
// import PeakDemandandMet from "../Components/StateWise/PeakDemandandMet";

// const StateWiseDashboard = () => {
//   const location = useLocation();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [state, setState] = useState("");
//   const [month, setMonth] = useState("");
//   const [year, setYear] = useState("");

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const state = queryParams.get("state");
//     const date = queryParams.get("date");

//     const [month, , year] = date ? date.split("/") : ["", "", ""];

//     console.log("State:", state);
//     console.log("Month:", month);
//     console.log("Year:", year);

//     // Set the state, month, and year variables
//     setState(state);
//     setMonth(month);
//     setYear(year);

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         // Construct API URL
//         const apiUrl = `http://127.0.0.1:8000/api/susage/${state}/${month}/${year}`;
//         console.log(apiUrl);
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         console.log(result);
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [location.search]);

//   return (
//     <div className="statewise-dashboard-wrapper flex flex-col">
//       <DashboardSidebar />
//       <div className="ml-64 statewise-dashboard-container p-[50px] ">
//         <div className="flex justify-center items-center pb-[30px]">
//           <h1 className="satodhi-bold text-[40px] font-bold">{state}</h1>
//         </div>
//         <div className="statewise-hero flex flex-row ">
//           <div className="statewise-hero-left w-1/2">
//             <StateMap statename={state} />
//           </div>
//           <div className="statewise-hero-right w-1/2 flex flex-col">
//             <PeakDemandandMet />
//           </div>
//         </div>
//       </div>
//       <div className="ml-64 p-[25px] flex flex-row gap-[10px]">
//         <div className="state-graph-left w-1/2 rounded-xl component-shadow flex flex-col justify-center items-center satoshi-bold text-[20px]">
//           <h1 className=" pb-[15px] bottom-border-1">
//             Energy Consumption graph
//           </h1>
//           <EnergyConsumptionGraph data={data} />
//         </div>
//         <div className="state-graph-right w-1/2 rounded-xl component-shadow">
//           <div className="state-graph-left flex flex-col justify-center items-center satoshi-bold text-[20px]">
//             <h1 className=" pb-[15px] bottom-border-1 mb-[25px]">
//               Energy Sold Sector-Wise
//             </h1>
//             <EnergyGenerationGrph state={state} month={month} year={year} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StateWiseDashboard;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EnergyConsumptionGraph from "../Components/StateWise/EnergyConsumptionGraph";
import DashboardSidebar from "../Components/DashboardComponents/DashboardSidear";
import EnergyGenerationGrph from "../Components/StateWise/EnergyGenerationGrph";
import StateMap from "../Components/StateWise/StateMap";
import PeakDemandandMet from "../Components/StateWise/PeakDemandandMet";

const StateWiseDashboard = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get("state");
    const date = queryParams.get("date");

    const [month, , year] = date ? date.split("/") : ["", "", ""];

    console.log("State:", state);
    console.log("Month:", month);
    console.log("Year:", year);

    // Set the state, month, and year variables
    setState(state);
    setMonth(month);
    setYear(year);

    const fetchData = async () => {
      try {
        setLoading(true);
        // Construct API URL
        const apiUrl = `http://127.0.0.1:8000/api/susage/${state}/${month}/${year}`;
        console.log(apiUrl);
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.search]);

  return (
    <div className="statewise-dashboard-wrapper flex flex-col">
      <DashboardSidebar />
      <div className="ml-64 statewise-dashboard-container p-[50px] ">
        <div className="flex justify-center items-center pb-[30px]">
          <h1 className="satodhi-bold text-[40px] font-bold">{state}</h1>
        </div>
        <div className="statewise-hero flex flex-row ">
          <div className="statewise-hero-left w-1/2">
            <StateMap statename={state} />
          </div>
          <div className="statewise-hero-right w-1/2 flex flex-col">
            <PeakDemandandMet state={state} month={month} year={year} />
          </div>
        </div>
      </div>
      <div className="ml-64 p-[25px] flex flex-row gap-[10px]">
        <div className="state-graph-left w-1/2 rounded-xl component-shadow flex flex-col justify-center items-center satoshi-bold text-[20px]">
          <h1 className="pb-[15px] bottom-border-1">
            Energy Consumption graph
          </h1>
          <EnergyConsumptionGraph data={data} />
        </div>
        <div className="state-graph-right w-1/2 rounded-xl component-shadow">
          <div className="state-graph-left flex flex-col justify-center items-center satoshi-bold text-[20px]">
            <h1 className="pb-[15px] bottom-border-1 mb-[25px]">
              Energy Sold Sector-Wise
            </h1>
            <EnergyGenerationGrph state={state} month={month} year={year} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateWiseDashboard;
