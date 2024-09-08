import React, { useEffect, useState } from "react";

const PeakDemandandMet = ({ state, month, year }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:8000/api/energy_data/${state}/${month}/${year}/`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result[0]); // Accessing the first item in the array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (state && month && year) {
      fetchData();
    }
  }, [state, month, year]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col w-full">
      <div className="r1 flex flex-row gap-[15px] p-[15px]">
        <div className="com1 w-1/2 rounded-xl component-shadow h-full p-[25px]">
          <h1 className="com1-heading">Peak Demand</h1>
          <span className="comp1-sum flex flex-col gap-[10px]">
            <span className="satoshi-regular text-lg">Value:</span>
            <span className="satoshi-light">
              {data?.peak_demand_mw || "N/A"} MW
            </span>
          </span>
        </div>
        <div className="com2 w-1/2 rounded-xl component-shadow h-full p-[25px]">
          <h1 className="com1-heading">Peak Met</h1>
          <span className="comp1-sum flex flex-col gap-[10px]">
            <span className="satoshi-regular text-lg">Value:</span>
            <span className="satoshi-regular text-lg">
              {data?.peak_production_mw || "N/A"} MW
            </span>
            <span className="satoshi-regular text-lg">Shortfall:</span>
            <span className="satoshi-regular text-lg">
              {data
                ? (data.peak_demand_mw - data.peak_production_mw).toFixed(2)
                : "N/A"}{" "}
              MW
            </span>
          </span>
        </div>
      </div>
      <div className="r2 flex flex-row flex-wrap gap-[15px] justify-center p-[15px]">
        <div className="flex flex-col justify-center items-center px-[60px] py-[10px] rounded-xl component-shadow">
          <h1 className="r2-heading satoshi-bold">Solar Production</h1>
          <span className="satoshi-regular">
            {data?.solar_production_mw || "N/A"} MW
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-[60px] py-[10px] rounded-xl component-shadow">
          <h1 className="r2-heading satoshi-bold">Coal Production</h1>
          <span className="satoshi-regular">
            {data?.coal_production_mw || "N/A"} MW
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-[60px] py-[10px] rounded-xl component-shadow">
          <h1 className="r2-heading satoshi-bold">Wind Production</h1>
          <span className="satoshi-regular">
            {data?.wind_production_mw || "N/A"} MW
          </span>
        </div>
        <div className="flex flex-col justify-center items-center px-[60px] py-[10px] rounded-xl component-shadow">
          <h1 className="r2-heading satoshi-bold">Next Month Forcast</h1>
          <span className="satoshi-regular">4480176046490</span>
        </div>
      </div>
    </div>
  );
};

export default PeakDemandandMet;
