// import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import * as d3 from "d3";
// import { feature } from "topojson-client";
// import IndiaMap from "../../data/india.json";

// const WholeIndia = ({ selectedYear }) => {
//   const svgRef = useRef();
//   const [hoveredState, setHoveredState] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     const width = 800;
//     const height = 600;

//     // Clear previous content
//     svg.selectAll("*").remove();

//     // Set up projection and path generator
//     const projection = d3
//       .geoMercator()
//       .fitSize([width, height], feature(IndiaMap, IndiaMap.objects.states));
//     const path = d3.geoPath().projection(projection);

//     // Create an empty color scale
//     const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 1]);

//     // Create a group for the map
//     const mapGroup = svg
//       .attr("width", width)
//       .attr("height", height)
//       .append("g");

//     // Bind data and create one path per GeoJSON feature
//     const states = feature(IndiaMap, IndiaMap.objects.states).features;
//     mapGroup
//       .selectAll("path")
//       .data(states)
//       .enter()
//       .append("path")
//       .attr("d", path)
//       .attr("fill", (d) => {
//         // Replace with the logic to get the data value for each state
//         const value = Math.random(); // Example: Random value
//         return colorScale(value);
//       })
//       .attr("stroke", "#000")
//       .attr("stroke-width", 0.5)
//       .on("mouseover", (event, d) => {
//         setHoveredState(d.properties.name);
//         d3.select(event.target)
//           .attr("stroke", "#000000")
//           .attr("stroke-width", 2);
//       })
//       .on("mouseout", (event) => {
//         setHoveredState(null);
//         d3.select(event.target)
//           .attr("stroke", "#000")
//           .attr("stroke-width", 0.5);
//       })
//       .on("click", async (event, d) => {
//         const formattedDate = `01/01/2019`; // Static date for January 2019
//         navigate(
//           `/dashboard/statewise?state=${d.properties.name}&date=${formattedDate}`
//         );

//         // Fetch data to debug
//         try {
//           const response = await fetch(
//             `http://127.0.0.1:8000/api/energy_data/${selectedYear}`
//           );
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           const data = await response.json();
//           console.log("Fetched data:", data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       });

//     // Add static state labels
//     const stateNames = [
//       "Andhra",
//       "Arunanchal",
//       "Assam",
//       "Bihar",
//       "Chhattisgarh",
//       "Goa",
//       "Gujarat",
//       "Haryana",
//       "Himachal",
//       "Jharkhand",
//       "Karnataka",
//       "Kerala",
//       "Madhya",
//       "Maharashtra",
//       "Manipur",
//       "Meghalaya",
//       "Mizoram",
//       "Nagaland",
//       "Odisha",
//       "Punjab",
//       "Rajasthan",
//       "Sikkim",
//       "Tamil",
//       "Telangana",
//       "Tripura",
//       "Uttar",
//       "Uttarakhand",
//       "Bengal",
//       "Delhi",
//       "Puducherry",
//       "Chandigarh",
//       "Jammu",
//     ];

//     mapGroup
//       .selectAll("text")
//       .data(states)
//       .enter()
//       .append("text")
//       .attr("x", (d) => projection(d3.geoCentroid(d))[0])
//       .attr("y", (d) => projection(d3.geoCentroid(d))[1])
//       .attr("text-anchor", "middle")
//       .attr("font-size", "10px")
//       .attr("font-weight", "bold")
//       .attr("pointer-events", "none")
//       .text((d, i) => stateNames[i]);

//     // Add a text element for the hovered state name
//     svg
//       .append("text")
//       .attr("x", 10)
//       .attr("y", 30)
//       .attr("font-size", "16px")
//       .attr("font-weight", "bold");
//   }, [selectedYear, navigate]);

//   // Update the text element when hoveredState changes
//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     svg.select("text").text(hoveredState || "");
//   }, [hoveredState]);

//   return (
//     <div>
//       <svg ref={svgRef}></svg>
//     </div>
//   );
// };

// export default WholeIndia;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as d3 from "d3";
import { feature } from "topojson-client";
import IndiaMap from "../../data/india.json";

const WholeIndia = ({ selectedYear }) => {
  const svgRef = useRef();
  const [hoveredState, setHoveredState] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;

    // Clear previous content
    svg.selectAll("*").remove();

    // Set up projection and path generator
    const projection = d3
      .geoMercator()
      .fitSize([width, height], feature(IndiaMap, IndiaMap.objects.states));
    const path = d3.geoPath().projection(projection);

    // Create an empty color scale
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 1]);

    // Create a group for the map
    const mapGroup = svg
      .attr("width", width)
      .attr("height", height)
      .append("g");

    // Bind data and create one path per GeoJSON feature
    const states = feature(IndiaMap, IndiaMap.objects.states).features;
    mapGroup
      .selectAll("path")
      .data(states)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", (d) => {
        // Replace with the logic to get the data value for each state
        const value = Math.random(); // Example: Random value
        return colorScale(value);
      })
      .attr("stroke", "#000")
      .attr("stroke-width", 0.5)
      .on("mouseover", (event, d) => {
        setHoveredState(d.properties.name);
        d3.select(event.target)
          .attr("stroke", "#000000")
          .attr("stroke-width", 2);
      })
      .on("mouseout", (event) => {
        setHoveredState(null);
        d3.select(event.target)
          .attr("stroke", "#000")
          .attr("stroke-width", 0.5);
      })
      .on("click", async (event, d) => {
        const formattedDate = `01/01/2019`; // Static date for January 2019
        navigate(
          `/dashboard/statewise?state=${d.properties.name}&date=${formattedDate}`
        );

        // Fetch data to debug
        try {
          const response = await fetch(
            `http://127.0.0.1:8000/api/energy_data/${selectedYear}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Fetched data:", data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      });

    // Add a text element for the hovered state name
    svg
      .append("text")
      .attr("x", 10)
      .attr("y", 30)
      .attr("font-size", "16px")
      .attr("font-weight", "bold");
  }, [selectedYear, navigate]);

  // Update the text element when hoveredState changes
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.select("text").text(hoveredState || "");
  }, [hoveredState]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default WholeIndia;
