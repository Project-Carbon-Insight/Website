import React from "react";

const AboutSection1 = () => {
  return (
    <>
      <div className="px-[70px]">
        <div className="aboutme-section1-wrapper h-screen px-[110px] py-[30px]">
          <div className="aboutme-section1-container rounded-[30px] h-full bg-[#EBEBEB] component-shadow flex flex-row justify-between">
            <div className="aboutme-section1-left p-[40px] flex flex-col gap-3 justify-center items-center">
              <div className="aboutme-section1-heading flex flex-col leading-tight">
                <span className="aboutme-heading-bluetext text-[#39a9d9] underline ">
                  Who we are ?
                </span>
                <span className="aboutme-heading-text mt-[15px]">
                  Energy Efficiency Solution{" "}
                </span>
                <span className="aboutme-heading-text">
                  Driving & Achieving
                </span>
                <span className="aboutme-heading-text">True Power</span>
                <span className="aboutme-heading-text mb-[20px]">
                  Optimization
                </span>
              </div>
              <div className="aboutme-section1-summary">
                <p className="n max-w-[500px]">
                  CarbonInsight provides an innovative and comprehensive
                  approach to achieving true net zero. Our platform accelerates
                  sustainability efforts by offering detailed tracking of carbon
                  emissions, actionable insights, and personalized
                  recommendations. With a focus on transparency and credibility,
                  we empower individuals and businesses to make informed
                  decisions and take impactful actions. Join us in driving the
                  transition to a greener future and delivering genuine net zero
                  results.
                </p>
              </div>
            </div>
            <div className="aboutme-section1-right flex items-center overflow-hidden w-[40%]">
              <img
                src="/images/aboutmesection1img.png"
                alt="aboutmesection1img"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection1;
