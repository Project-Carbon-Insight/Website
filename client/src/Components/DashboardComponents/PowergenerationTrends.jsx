import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { schemeTableau10 } from "d3-scale-chromatic";
import PowerGenerationTrendsData from "../../data/powergenerationtrends.json";

const PowerGenerationTrends = () => {
  const svgRef = useRef();
  const tooltipRef = useRef(); // Tooltip reference

  useEffect(() => {
    // Filter out "Total YoY" and "Growth Rate"
    const filteredData = PowerGenerationTrendsData.filter(
      (d) => d.Source !== "Total" && d.Source !== "YoY Growth Rate"
    );

    // Transform the filtered data into the format we need
    const data = filteredData.reduce((acc, curr) => {
      const year = curr.Year;
      if (!acc[year]) {
        acc[year] = { Year: year };
      }
      acc[year][curr.Source] = curr["Generation (BU)"];
      return acc;
    }, {});

    const formattedData = Object.values(data);

    const margin = { top: 30, right: 30, bottom: 100, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Get unique sources from filtered data
    const sources = [...new Set(filteredData.map((d) => d.Source))];

    // Create stack generator
    const stack = d3.stack().keys(sources);
    const stackedData = stack(formattedData);

    const x = d3
      .scaleBand()
      .domain(formattedData.map((d) => d.Year))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(stackedData, (d) => d3.max(d, (d) => d[1]))])
      .range([height, 0]);

    // Create color scale
    const color = d3
      .scaleOrdinal()
      .domain(sources)
      .range([
        "#58508d",
        "#9656A2",
        "#369ACC",
        "#95CF92",
        "#F8E16F",
        "#F4895F",
        "#DE324C",
        "#6F1926",
      ]);

    // Create bars
    const bars = svg
      .selectAll(".bar")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.data.Year))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .on("mouseover", (event, d) => {
        const year = d.data.Year;
        const source = d3.select(event.currentTarget).attr("fill");
        const sourceName = d3
          .select(event.currentTarget.parentNode)
          .datum().key; // Get source from parent node

        d3.select(tooltipRef.current)
          .style("opacity", 1)
          .html(
            `Year: ${year}<br/>Source: ${sourceName}<br/>Generation: ${
              d[1] - d[0]
            }`
          )
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        d3.select(tooltipRef.current).style("opacity", 0);
      });

    // Add X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    // Add Y-axis
    svg.append("g").call(d3.axisLeft(y).ticks(null, "s"));

    // Add Y-axis label
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Generation (BU)");

    // Add title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold");

    // Add legend at the bottom
    const legendWidth = width;
    const itemWidth = legendWidth / sources.length;

    const legend = svg
      .append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .attr("transform", `translate(0,${height + 60})`);

    const legendItem = legend
      .selectAll("g")
      .data(sources)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) => `translate(${i * itemWidth + itemWidth / 2},0)`
      );

    legendItem
      .append("rect")
      .attr("x", -10)
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d) => color(d));

    legendItem
      .append("text")
      .attr("y", 30)
      .text((d) => d);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg ref={svgRef}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          padding: "5px",
          borderRadius: "3px",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      ></div>
    </div>
  );
};

export default PowerGenerationTrends;
