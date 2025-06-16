import React from "react";
import CustomDiv from "../CustomDiv";
const About = () => {
  return (
    <div className="w-1/2 flex flex-col gap-12 py-5">
      <CustomDiv>
        <h3 className="text-2xl font-semibold text-white-800 border-b-white ">
          What is DesignTrix
        </h3>
        <p className="mt-2 text-lg text-white-700">
          To provide high-quality solutions that empower businesses and
          individuals. To provide high-quality solutions that empower businesses
          and individuals.To provide high-quality solutions that empower
          businesses and individuals.
        </p>
      </CustomDiv>
      <CustomDiv>
        <h2 className="text-3xl font-semibold text-white-800">About Us</h2>
        <p className="mt-4 text-lg text-white-700">
          We are a team of passionate developers creating innovative web
          applications. Our goal is to make the web a better place by building
          useful and engaging platforms.
        </p>
      </CustomDiv>
    </div>
  );
};

export default About;
