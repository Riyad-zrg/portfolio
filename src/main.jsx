import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Videos from "./Videos.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<App />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
