import React from "react";
import Navbar from "./Navbar";
import HexagonPattern from "./HexagonPattern";

const Content = ({ children }) => {
  return (
    <>
      <div className="relative h-screen py-2 content-container">
        <Navbar />
        <div className="mt-24 px-12 z-10">
          {children}
        </div>
      </div>
      <HexagonPattern />
    </>
  );
};

export default Content;
