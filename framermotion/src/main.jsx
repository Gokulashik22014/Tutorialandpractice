import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Hero from "./Testing/Hero/Hero.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/content" element={<App/>}/>
    </Routes>
  </BrowserRouter>
);
