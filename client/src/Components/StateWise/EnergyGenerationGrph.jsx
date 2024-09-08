import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

const EnergyGenerationGraph = ({ state, year }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const svgRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:8000/api/ssold/${state}/${year}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        console.log("Energy data:", result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (state && year) {
      fetchData();
    }
  }, [state, year]);

  useEffect(() => {
    if (data && data.length > 0) {
      createBarGraph();
    }
  }, [data]);

  const createBarGraph = () => {
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.Sector))
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => parseFloat(d.Energy_Sold))])
      .range([height, 0]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    svg.append("g").call(d3.axisLeft(y));

    svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Sector))
      .attr("y", (d) => y(parseFloat(d.Energy_Sold)))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(parseFloat(d.Energy_Sold)))
      .attr("fill", "#69b3a2");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .attr("text-anchor", "middle")
      .text("Sector");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default EnergyGenerationGraph;
