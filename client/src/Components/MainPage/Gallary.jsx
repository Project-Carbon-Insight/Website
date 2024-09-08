import React, { useEffect, useState } from "react";
import "./Gallary.css";

const Gallary = () => {
  return (
    <>
      <div className="gallary-wrapper py-[50px]">
        <div className="gallary-container  flex flex-col gap-[10px]">
          <div className="gallary-r1 flex flex-row gap-[10px] overflow-hidden">
            <img src="images/gallary/1.png" alt="" />
            <img src="images/gallary/2.png" alt="" />
            <img src="images/gallary/3.png" alt="" />
            <img src="images/gallary/4.png" alt="" />
            <img src="images/gallary/5.png" alt="" />
          </div>
          <div className="gallary-r2 flex flex-row gap-[10px] overflow-hidden">
            <img src="images/gallary/6.png" alt="" />
            <img src="images/gallary/7.png" alt="" />
            <img src="images/gallary/8.png" alt="" />
            <img src="images/gallary/9.png" alt="" />
          </div>
          <div className="gallary-r3 flex flex-row gap-[10px] overflow-hidden">
            <img src="images/gallary/10.png" alt="" />
            <img src="images/gallary/11.png" alt="" />
            <img src="images/gallary/12.png" alt="" />
            <img src="images/gallary/13.png" alt="" />
            <img src="images/gallary/14.png" alt="" />
            <img src="images/gallary/15.png" alt="" />
            <img src="images/gallary/16.png" alt="" />
          </div>
          <div className="gallary-r4 flex flex-row gap-[10px] overflow-hidden">
            <img src="images/gallary/17.png" alt="" />
            <img src="images/gallary/18.png" alt="" />
            <img src="images/gallary/19.png" alt="" />
            <img src="images/gallary/20.png" alt="" />
            <img src="images/gallary/21.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallary;
