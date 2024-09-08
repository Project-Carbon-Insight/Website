import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import InstalledCapacity from "../../../data/InstalledCapacity.json";

const PieChartInstalledCapacity = () => {
  const svgRef = useRef();
  const [tooltip, setTooltip] = useState({
    display: false,
    name: "",
    value: 0,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Data processing: Flatten the JSON structure to an array of objects with names and percentages
    const data = [];
    Object.keys(InstalledCapacity).forEach((category) => {
      if (category !== "Total Installed Capacity") {
        Object.keys(InstalledCapacity[category]).forEach((resource) => {
          if (
            resource !== "Total Fossil Fuel" &&
            resource !== "Total Non-Fossil Fuel"
          ) {
            data.push({
              name: resource,
              value: parseFloat(
                InstalledCapacity[category][resource]["% of Share in Total"]
              ),
            });
          }
        });
      }
    });

    // Set dimensions and radius
    const width = 400;
    const height = 400;
    const originalRadius = Math.min(width, height) / 2;
    const radius = originalRadius * 0.75;

    // Create SVG element for pie chart
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet") // Center content
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create the pie
    const pie = d3.pie().value((d) => d.value);

    // Create the arc generator for donut chart
    const arc = d3
      .arc()
      .innerRadius(radius * 0.3)
      .outerRadius(radius);

    // Define custom colors
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.name))
      .range([
        "#FF7F7F",
        "#B3A9D1",
        "#A3B55E",
        "#F9D2D2",
        "#AEC6CF",
        "#B29B89",
        "#C3A9C7",
        "#9AB87A",
        "#F4A261",
        "#82B1A8",
        "#EFD469",
        "#8795A1",
        "#8B5B5E",
      ]);

    // Create pie chart
    svg
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.name))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", "scale(1.1)");
        setTooltip({
          display: true,
          name: d.data.name,
          value: d.data.value,
          x: event.pageX,
          y: event.pageY,
        });
      })
      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("transform", "scale(1)");
        setTooltip({ display: false, name: "", value: 0, x: 0, y: 0 });
      });

    // Create legend container
    const legendContainer = d3
      .select(svgRef.current.parentNode)
      .select(".legend-container");
    if (legendContainer.empty()) {
      d3.select(svgRef.current.parentNode)
        .append("div")
        .attr("class", "legend-container")
        .style("display", "flex")
        .style("flex-direction", "column")
        .style("margin-left", "20px")
        .style("font-size", "12px");
    }

    const legendGroup = d3
      .select(svgRef.current.parentNode)
      .select(".legend-container")
      .selectAll(".legend-item")
      .data(data);

    // Enter new legend items
    const legendEnter = legendGroup
      .enter()
      .append("div")
      .attr("class", "legend-item")
      .style("display", "flex")
      .style("align-items", "center")
      .style("margin-bottom", "5px");

    legendEnter
      .append("div")
      .style("width", "15px")
      .style("height", "15px")
      .style("background-color", (d) => color(d.name))
      .style("margin-right", "10px");

    legendEnter.append("span").text((d) => d.name);

    // Remove old legend items
    legendGroup.exit().remove();
  }, []);

  return (
    <div
      className="pie-chart-container pb-[30px]"
      style={{ display: "flex", alignItems: "center" }}
    >
      <svg
        ref={svgRef}
        className="w-[300px] h-[300px] flex justify-center items-center"
      ></svg>
      {tooltip.display && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x + 10,
            top: tooltip.y - 28,
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            padding: "5px",
            borderRadius: "5px",
            pointerEvents: "none",
            opacity: 1,
            transition: "opacity 0.2s",
          }}
        >
          <strong>{tooltip.name}</strong>
          <br />
          {tooltip.value}%
        </div>
      )}
    </div>
  );
};

export default PieChartInstalledCapacity;
