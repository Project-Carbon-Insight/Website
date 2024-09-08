import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const EnergyConsumptionGraph = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
      width = 550 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const parseDate = d3.timeParse("%d-%m-%Y %H:%M");
    const formatDate = d3.timeFormat("%b %d, %Y %H:%M");

    const formattedData = data.map((d) => ({
      date: parseDate(d.Dates),
      usage: +d.Usage, // Ensure usage is a number
    }));

    // Check for NaN values
    formattedData.forEach((d) => {
      if (!d.date || isNaN(d.usage)) {
        console.error("Invalid data:", d);
      }
    });

    const x = d3
      .scaleTime()
      .domain(d3.extent(formattedData, (d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(formattedData, (d) => d.usage) - 10,
        d3.max(formattedData, (d) => d.usage) + 10,
      ])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.usage))
      .curve(d3.curveMonotoneX);

    const area = d3
      .area()
      .x((d) => x(d.date))
      .y0(height)
      .y1((d) => y(d.usage))
      .curve(d3.curveMonotoneX);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add horizontal grid lines
    svg
      .append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(""))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("stroke", "#e0e0e0")
          .attr("stroke-dasharray", "5,5")
      );

    // Add the colored area under the curve
    svg
      .append("path")
      .datum(formattedData)
      .attr("fill", "rgba(54, 181, 238, 0.2)") // Translucent fill
      .attr("d", area);

    // Add the x-axis with improved styling
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5).tickFormat(d3.timeFormat("%b %d")))
      .call((g) => g.select(".domain").attr("stroke", "#888"))
      .call((g) => g.selectAll(".tick line").attr("stroke", "#888"))
      .call((g) => g.selectAll("text").attr("fill", "#555"));

    // Add the y-axis with only numbers and improved styling
    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat(d3.format("d")))
      .call((g) => g.select(".domain").attr("stroke", "#888"))
      .call((g) => g.selectAll(".tick line").attr("stroke", "#888"))
      .call((g) => g.selectAll("text").attr("fill", "#555"));

    // Add the line to the graph
    svg
      .append("path")
      .datum(formattedData)
      .attr("fill", "none")
      .attr("stroke", "#4A90E2")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Create a tooltip div
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background-color", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "4px")
      .style("padding", "10px")
      .style("pointer-events", "none");

    // Add dots at each data point with improved interactivity and tooltip
    svg
      .selectAll("dot")
      .data(formattedData)
      .enter()
      .append("circle")
      .attr("r", 4)
      .attr("cx", (d) => x(d.date))
      .attr("cy", (d) => y(d.usage))
      .attr("fill", "#FF5959")
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 6)
          .attr("fill", "#E5C76B");

        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`Date: ${formatDate(d.date)}<br/>Usage: ${d.usage}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 4)
          .attr("fill", "#FF5959");

        tooltip.transition().duration(500).style("opacity", 0);
      });
  }, [data]);

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default EnergyConsumptionGraph;
