import React from "react";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <section className="hero-section px-[70px]">
        <div className="hero-container">
          <div className="hero-text flex flex-col py-8 justify-center items-center">
            <div className="hero-h1 text-center flex flex-col leading-tight">
              <span> Optimize Your Energy</span>{" "}
              <span>Efficiency with Our Data-Driven and </span>{" "}
              <span>Modular Electricity Management Platform</span>
            </div>
            <div className="hero-p flex justify-center items-center mt-[50px]">
              <p className=" text-center flex flex-col">
                <span>
                  Manage all your energy data, reduce operational costs, and
                  drive
                </span>{" "}
                <span>
                  meaningful impact—all within our comprehensive platform,
                </span>{" "}
                <span>supported by our industry experts.</span>
              </p>
            </div>
            <div className="hero-button-continer mt-[50px]">
              <Link to={"/dashboard"}>
                <button className="hero-button">Discover More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
