import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import ElectricityDashboard from "./Pages/ElectricityDashboard";
import "./index.css";
import StateWiseDashboard from "./Pages/StateWiseDashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<ElectricityDashboard />} />
        <Route path="/dashboard/statewise" element={<StateWiseDashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
