import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import NetCapacityAdditionTrend from "../../data/NetCapacityAdditionTrend.json";

const NetCapacityAdditionGraph = () => {
  const svgRef = useRef(null);
  const width = 600;
  const height = 400; // Increased height to accommodate the legend
  const margin = { top: 20, right: 30, bottom: 80, left: 40 }; // Increased bottom margin for legend

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clean up the previous chart
    svg.selectAll("*").remove();

    // Prepare the data
    const data = NetCapacityAdditionTrend;
    const keys = Object.keys(data[0]).filter((d) => d !== "Year");

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.Year))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.sum(keys, (key) => d[key]))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal().domain(keys).range([
      "#003f5c", // Bio Power
      "#58508D", // Coal
      "#8A508F", // Hydro
      "#BC5090", // Nuclear
      "#DE5A79", // Oil & Gas
      "#FF6361", // Small-Hydro
      "#FF8531", // Solar
      "#FFA600", // Wind
    ]);

    const stack = d3
      .stack()
      .keys(keys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(data);

    // Create a tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("text-align", "center")
      .style("padding", "5px")
      .style("font-size", "12px")
      .style("background", "white")
      .style("border", "1px solid #ddd")
      .style("border-radius", "3px")
      .style("pointer-events", "none")
      .style("white-space", "nowrap")
      .style("opacity", 0);

    svg
      .selectAll("g")
      .data(series)
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
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(
            `Year: ${d.data.Year}<br/>${
              d3.select(event.target.parentNode).datum().key
            }: ${(d[1] - d[0]).toFixed(2)} GW`
          )
          .style("left", event.pageX + 5 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", () => {
        tooltip.transition().duration(500).style("opacity", 0);
      });

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll("text")
      .attr("dy", ".35em")
      .attr("x", 0)
      .attr("y", 10)
      .style("text-anchor", "middle");

    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y))
      .append("text")
      .attr("x", -margin.left)
      .attr("y", 15)
      .attr("fill", "#000")
      .attr("text-anchor", "start");

    // Add legend at the bottom
    const legendWidth = width - margin.left - margin.right;
    const legendHeight = 50; // Height of the legend area
    const itemWidth = legendWidth / 4; // 4 items per row
    const itemHeight = 20; // Height of each legend item

    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        `translate(${margin.left},${height - margin.bottom + 20})`
      );

    const legendItem = legend
      .selectAll("g")
      .data(keys)
      .enter()
      .append("g")
      .attr(
        "transform",
        (d, i) =>
          `translate(${(i % 4) * itemWidth},${Math.floor(i / 4) * itemHeight})`
      );

    legendItem
      .append("rect")
      .attr("x", 0)
      .attr("width", 15)
      .attr("height", 15)
      .attr("fill", (d) => color(d));

    legendItem
      .append("text")
      .attr("x", 20)
      .attr("y", 12)
      .text((d) => {
        // Map legend keys to display names
        const legendNames = {
          "Bio Power Installed Capacity (GW)": "Bio Power",
          "Coal Installed Capacity (GW)": "Coal",
          "Hydro Installed Capacity (GW)": "Hydro",
          "Nuclear Installed Capacity (GW)": "Nuclear",
          "Oil & Gas Installed Capacity (GW)": "Oil & Gas",
          "Small-Hydro Installed Capacity (GW)": "Small-Hydro",
          "Solar Installed Capacity (GW)": "Solar",
          "Wind Installed Capacity (GW)": "Wind",
        };
        return legendNames[d];
      })
      .style("font-size", "12px");
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default NetCapacityAdditionGraph;
