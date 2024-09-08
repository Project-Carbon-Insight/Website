import React from "react";
import { Link } from "react-router-dom";

const AboutSection3 = () => {
  return (
    <>
      <div className="aboutme-section3-wrapper py-[50px] h-screen">
        <div className="aboutme-section3-container flex flex-col gap-[90px]">
          <div className="aboutme-section3-heading flex justify-center items-center">
            <span className="section3-heading">Dashboard Overview</span>
          </div>
          <div className="aboutme-features flex flex-row gap-[30px] items-center justify-center">
            <div className="section3-feature1 flex flex-col max-w-[300px] gap-[10px] ">
              <img
                src="/images/Aboutmesection3/1.png"
                alt=""
                className="hover-link-section3 w-[300px]"
              />
              <span className="section3-medium">Visualize and calculate</span>
              <span className="section3-light">
                Visualize and calculate your company's carbon footprint and
                sustainability performance.
              </span>
            </div>
            <div className="section3-feature2 flex flex-col max-w-[300px] gap-[10px] ">
              <img
                src="/images/Aboutmesection3/2.png"
                alt=""
                className="hover-link-section3 w-[300px]"
              />
              <span className="section3-medium">
                State wise energy consumption
              </span>
              <span className="section3-light">
                Visualize and calculate your company's carbon footprint and
                sustainability performance.
              </span>
            </div>
            <div className="section3-feature3 flex flex-col max-w-[300px] gap-[10px] ">
              <img
                src="/images/Aboutmesection3/3.png"
                alt=""
                className="hover-link-section3 w-[300px]"
              />
              <span className="section3-medium">Choropleth map</span>
              <span className="section3-light">
                Visualize and calculate your company's carbon footprint and
                sustainability performance.
              </span>
            </div>
            <div className="section3-feature4 flex flex-col max-w-[300px] gap-[10px] ">
              <img
                src="/images/Aboutmesection3/4.png"
                alt=""
                className="hover-link-section3 w-[300px]"
              />
              <span className="section3-medium">Electricity at a glance</span>
              <span className="section3-light">
                Visualize and calculate your company's carbon footprint and
                sustainability performance.
              </span>
            </div>
          </div>
          <div className="aboutme-section3-button flex justify-center items-center">
            <Link to={"/dashboard"}>
              <button className="section3-button flex flex-row items-center gap-3">
                Visit Dashboard{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection3;
