import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Herosection from "./Components/MainPage/Herosection";
import MainpageGraphSection from "./Components/MainPage/MainpageGraphSection";
import AboutSection1 from "./Components/MainPage/AboutSection1";
import AboutSection2 from "./Components/MainPage/AboutSection2";
import AboutSection3 from "./Components/MainPage/AboutSection3";
import Aboutproject from "./Components/MainPage/Aboutproject";
import Gallary from "./Components/MainPage/Gallary";
import MainpageFooter from "./Components/MainPage/MainpageFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="index-page-container gradient-background ">
        <Navbar />
        <Herosection />
        <MainpageGraphSection />
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <Aboutproject />
        <Gallary />
        <MainpageFooter />
      </div>
    </>
  );
}

export default App;
