import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import indiaData from "../../data/india.json";

const StateMap = ({ statename }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 400;

    // Clear any previous content
    svg.selectAll("*").remove();

    // Extract the specified state geometry from TopoJSON
    const state = topojson
      .feature(indiaData, indiaData.objects.states)
      .features.find(
        (d) => d.properties.id.toLowerCase() === statename.toLowerCase()
      );

    if (!state) {
      console.error(`State "${statename}" not found in the data`);
      return;
    }

    // Set the projection and path generator
    const projection = d3.geoMercator().fitSize([width, height], state);

    const path = d3.geoPath().projection(projection);

    // Create color scale (example with random data values)
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 100]);

    // Render the state
    svg
      .append("g")
      .selectAll("path")
      .data([state])
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", (d) => colorScale(Math.random() * 100))
      .attr("stroke", "#000")
      .attr("stroke-width", 1);

    // Calculate the centroid and add state name label if valid
    const centroid = path.centroid(state);

    if (centroid && !isNaN(centroid[0]) && !isNaN(centroid[1])) {
      svg
        .append("text")
        .attr("x", centroid[0])
        .attr("y", centroid[1])
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "#000")
        .text(statename);
    } else {
      console.error(
        `Centroid could not be calculated for the state "${statename}"`
      );
    }
  }, [statename]);

  return (
    <div>
      <svg ref={svgRef} width={600} height={400}></svg>
    </div>
  );
};

export default StateMap;
