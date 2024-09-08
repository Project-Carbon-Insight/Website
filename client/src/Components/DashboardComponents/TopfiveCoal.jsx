import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import indiaMap from "../../data/india.json";

const TopfiveCoaldata = [
  {
    State: "Uttar",
    "Generation (MU)": 58372.96,
    "Other Sources Generation (MU)": 4275.46,
  },
  {
    State: "Chhattisgarh",
    "Generation (MU)": 57645.06,
    "Other Sources Generation (MU)": 1015.92,
  },
  {
    State: "Madhya",
    "Generation (MU)": 50744.65,
    "Other Sources Generation (MU)": 5981.1,
  },
  {
    State: "Maharashtra",
    "Generation (MU)": 45587.74,
    "Other Sources Generation (MU)": 13907.44,
  },
  {
    State: "Gujarat",
    "Generation (MU)": 32065.83,
    "Other Sources Generation (MU)": 27315.17,
  },
];

const TopfiveCoal = () => {
  const svgRef = useRef();

  useEffect(() => {
    console.log("TopfiveCoaldata:", TopfiveCoaldata);
    console.log("indiaMap:", indiaMap);

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 400;

    const projection = d3
      .geoMercator()
      .fitSize([width, height], feature(indiaMap, indiaMap.objects.states));
    const path = d3.geoPath().projection(projection);

    // Scale for coloring
    const colorScale = d3
      .scaleSequential()
      .domain([0, d3.max(TopfiveCoaldata, (d) => d["Generation (MU)"])])
      .interpolator(d3.interpolateBlues);

    // Function to find matching state data
    const findStateData = (properties) => {
      if (!properties || !properties.id) {
        console.log("Invalid properties:", properties);
        return null;
      }
      const stateData = TopfiveCoaldata.find(
        (state) => state.State === properties.id
      );
      if (!stateData) {
        console.log(`No matching data found for state: ${properties.id}`);
      }
      return stateData;
    };

    const states = svg
      .selectAll("path")
      .data(feature(indiaMap, indiaMap.objects.states).features)
      .join("path")
      .attr("d", path)
      .attr("fill", (d) => {
        const stateData = findStateData(d.properties);
        const color = stateData
          ? colorScale(stateData["Generation (MU)"])
          : "#ccc";
        console.log(`State: ${d.properties?.id}, Color: ${color}`);
        return color;
      })
      .attr("stroke", "#333")
      .attr("stroke-width", 0.5);

    // Add text labels for generation values
    svg
      .selectAll("text")
      .data(feature(indiaMap, indiaMap.objects.states).features)
      .join("text")
      .attr("x", (d) => path.centroid(d)[0])
      .attr("y", (d) => path.centroid(d)[1])
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "black")
      .text((d) => {
        const stateData = findStateData(d.properties);
        const text = stateData
          ? Math.round(stateData["Generation (MU)"]).toString()
          : "";
        console.log(`State: ${d.properties?.id}, Label: ${text}`);
        return text;
      });

    // Add tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("padding", "5px 10px")
      .style("background", "rgba(0, 0, 0, 0.6)")
      .style("color", "#fff")
      .style("border-radius", "4px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    states
      .on("mouseover", (event, d) => {
        const stateData = findStateData(d.properties);
        if (stateData) {
          d3.select(event.currentTarget)
            .attr("stroke", "#ffffff")
            .attr("stroke-width", 1);
        }
        tooltip
          .style("opacity", 1)
          .html(
            `${d.properties?.id || "Unknown"}<br/>Generation: ${
              stateData ? stateData["Generation (MU)"].toFixed(2) : "N/A"
            } MU`
          )
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY}px`);
      })
      .on("mousemove", (event) => {
        tooltip
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY}px`);
      })
      .on("mouseout", (event, d) => {
        d3.select(event.currentTarget)
          .attr("stroke", "#333")
          .attr("stroke-width", 0.5);
        tooltip.style("opacity", 0);
      });

    // Clean up tooltip on component unmount
    return () => {
      tooltip.remove();
    };
  }, []);

  return <svg ref={svgRef} width={500} height={450}></svg>;
};

export default TopfiveCoal;
