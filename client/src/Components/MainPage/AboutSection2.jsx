import React from "react";

const AboutSection2 = () => {
  return (
    <>
      <div className="aboutme-section2-wrapper py-[50px]">
        <div className="aboutme-section2-container h-screen flex">
          <div className="aboutme-section2-left w-[55%] overflow-hidden flex justify-start items-center">
            <div className="aboutme-section2-img overflow-hidden p-[10px] pl-[60px] pr-[50px] ">
              <img
                src="/images/mainpage-section2img.png"
                alt="mainpage-section2img"
                className="w-[600px]"
              />
            </div>
          </div>
          <div className="aboutme-section2-right w-[45%] flex flex-col justify-center items-center">
            <div className="flex flex-col gap-[20px]">
              <div className="aboutme-section2-heading mb-[50px]">
                <span className="section2-heading">Getting Started with</span>
                <div className="flex flex-row justify-center">
                  <span className="bg-[#D9D9D9] rounded-[30px] section2-heading1 px-[10px] mr-[5px]">
                    Energy
                  </span>
                  <span className="section2-heading1">Insight</span>
                </div>
              </div>
              <div className="aboutme-section2-summary-med max-w-[500px]">
                Begin your journey towards effective energy management and
                sustainability with FRCF. Our platform is designed to make it
                easy for you to track, analyze, and optimize energy consumption
                and performance across India.
              </div>
              <div className="aboutme-section2-smmary-light max-w-[500px]">
                Access your personalized dashboard to view India's energy
                trends, set efficiency targets, and showcase your commitment to
                a sustainable energy future
              </div>
              <div className="flex mt-[20px]">
                <button className="aboutme-section2-button flex flex-row gap-[10px] items-center">
                  Register
                  <img
                    src="/images/right-arrow.png"
                    alt="right-arrow"
                    className="w-[25px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection2;
