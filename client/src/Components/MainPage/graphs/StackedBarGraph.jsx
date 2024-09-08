import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import InstalledCapacity from "../../../data/IndiaSourceAndInstalledCapacity.json";

const StackedBarGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear any previous content
    d3.select(svgRef.current).selectAll("*").remove();

    // Data processing: Group the data by year and source
    const data = InstalledCapacity.reduce((acc, d) => {
      let yearData = acc.find((year) => year.Year === d.Year);
      if (!yearData) {
        yearData = { Year: d.Year };
        acc.push(yearData);
      }
      // Only include relevant sources
      if (
        [
          "Coal",
          "Oil & Gas",
          "Nuclear",
          "Hydro",
          "Wind",
          "Solar",
          "Bio Power",
          "Small-Hydro",
        ].includes(d.Source)
      ) {
        yearData[d.Source] = d["Installed Capacity (GW)"];
      }
      return acc;
    }, []);

    // Set dimensions and margins
    const margin = { top: 40, right: 20, bottom: 120, left: 60 }; // Increased bottom margin for legends
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.Year))
      .range([0, width])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const yScale = d3.scaleLinear().domain([0, 500]).range([height, 0]);

    const colorScale = d3
      .scaleOrdinal()
      .domain([
        "Coal",
        "Oil & Gas",
        "Nuclear",
        "Hydro",
        "Wind",
        "Solar",
        "Bio Power",
        "Small-Hydro",
      ])
      .range([
        "#222831", // Dark Gray
        "#84703F", // Brown
        "#FF5959", // Red
        "#4AA6A5", // Teal
        "#8EC9DC", // Light Blue
        "#FFD700", // Yellow
        "#5B7536", // Green
        "#3DABA3", // Turquoise
      ]);

    const stack = d3
      .stack()
      .keys([
        "Coal",
        "Oil & Gas",
        "Nuclear",
        "Hydro",
        "Wind",
        "Solar",
        "Bio Power",
        "Small-Hydro",
      ]);
    const stackedData = stack(data);

    // Create a tooltip div element
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "white")
      .style("border", "1px solid #ccc")
      .style("padding", "8px")
      .style("border-radius", "4px")
      .style("box-shadow", "0px 0px 8px rgba(0,0,0,0.1)");

    // Create bars
    svg
      .selectAll(".layer")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("class", "layer")
      .attr("fill", (d) => colorScale(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.Year))
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", xScale.bandwidth())
      .on("mouseover", function (event, d) {
        const sourceName = d3.select(this.parentNode).datum().key;
        tooltip
          .style("visibility", "visible")
          .html(
            `<strong>Source:</strong> ${sourceName}<br><strong>Year:</strong> ${
              d.data.Year
            }<br><strong>Installed Capacity:</strong> ${(d[1] - d[0]).toFixed(
              2
            )} GW`
          );

        // Brighten the hovered bar
        d3.select(this).attr("opacity", 0.7);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("top", `${event.pageY - 10}px`)
          .style("left", `${event.pageX + 10}px`);
      })
      .on("mouseout", function () {
        tooltip.style("visibility", "hidden");

        // Reset the bar brightness
        d3.select(this).attr("opacity", 1);
      });

    // Add the X Axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).tickSize(0).tickPadding(10));

    // Add the Y Axis
    svg.append("g").call(d3.axisLeft(yScale).ticks(10));

    // Add legend
    const legendItemsPerLine = 4; // Number of legend items per line
    const legendSpacing = 110; // Horizontal spacing between legend items
    const legendHeight = 30; // Vertical spacing between lines

    const legend = svg
      .selectAll(".legend")
      .data(colorScale.domain())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => {
        const row = Math.floor(i / legendItemsPerLine);
        const col = i % legendItemsPerLine;
        return `translate(${col * legendSpacing}, ${
          height + 30 + row * legendHeight
        })`;
      });

    legend
      .append("rect")
      .attr("x", 0)
      .attr("width", 18)
      .attr("height", 18)
      .attr("rx", 5) // Add rounded corners
      .attr("ry", 5)
      .style("fill", colorScale);

    legend
      .append("text")
      .attr("x", 25)
      .attr("y", 15)
      .style("text-anchor", "start")
      .text((d) => d);
  }, []);

  return <svg ref={svgRef} className="w-full"></svg>;
};

export default StackedBarGraph;
