import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import "../../css/satoshi.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isPastSection2, setIsPastSection2] = useState(false);

  useEffect(() => {
    const section2 = document.querySelector(".aboutme-section1-wrapper");
    const handleScrollNav = () => {
      if (window.scrollY > 60) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      if (section2) {
        console.log("i wxit");
        const section2Top = section2.offsetTop;
        if (window.scrollY >= section2Top) {
          setIsPastSection2(true);
        } else {
          setIsPastSection2(false);
        }
      }
    };
    window.addEventListener("scroll", handleScrollNav);

    return () => {
      window.removeEventListener("scroll", handleScrollNav);
    };
  }, []);

  // check reference-docs.txt
  return (
    <>
      <div
        className={`navbar-container flex flex-row justify-between h-[150px]  px-[75px] ${
          isShrunk ? "shrunk" : ""
        }  ${isPastSection2 ? "past-section2" : ""}`}
      >
        <div className="navbar-wrapper flex flex-row justify-between w-full bg-[#f7fee2]">
          <div className="image-container flex flex-row items-center gap-4">
            <img
              src="/images/logo-carbon-insight.png"
              alt="logo"
              className="h w-[150px]"
            />
            <h1 className="navbar-heading">Carbon Insight</h1>
          </div>
          <div className="nav-links flex flex-row items-center">
            <ul className=" flex flex-row gap-7 pr-[33px]">
              <li className="nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-link">Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
