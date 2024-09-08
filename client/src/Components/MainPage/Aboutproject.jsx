import React from "react";

const Aboutproject = () => {
  return (
    <>
      <div className="about-project-wrapper h-screen px-[180px] py-[50px]">
        <div className="about-project-container h-full rounded-[30px] p-[20px] flex justify-center items-center  ">
          <div className=" flex flex-col justify-center items-center gap-[20px]">
            <div className="about-project-heading">
              <span className="aboutproject-heading">About Project</span>
            </div>
            <div className="about-project-summary">
              <p className="max-w-[600px] mb-[15px]">
                EnergyInsight is a robust and comprehensive platform designed
                for individuals and organizations dedicated to tracking and
                optimizing energy usage. EnergyInsight offers unparalleled
                transparency and precision, assisting users in understanding and
                enhancing their energy consumption practices, thereby enabling
                them to lead and excel in today’s increasingly
                sustainability-focused world.
              </p>

              <span>🌍🧊🌋🌾🏭🏗️⚙️</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutproject;
