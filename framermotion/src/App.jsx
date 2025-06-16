import React from "react";
import SliceText from "./components/SliceText";
import SliceTextIndividual from "./components/SliceTextIndividual";
import Banner from "./components/3DCarousal/Banner";
import BlurCard from "./components/BlurCard";
import FancyBorderCard from "./components/FancyBorderCard/FancyBorderCard";
import ParticleEffect from "./components/Particles/ParticleEffect";
// import Hero from "./Testing/Hero/Hero";
import { motion } from "framer-motion";
import About from "./Testing/About/About";
import Content from "./Testing/Content";
import CustomDiv from "./Testing/CustomDiv";
import CuteAnimal from "./Testing/CuteAnimal";
import { Canvas } from "@react-three/fiber";
import CuteAnimalModel from "./Testing/CuteAnimalModel";
const App = () => {
  return (
    <Content>
      <div className="w-full">
        <CustomDiv>
          <h1 className="text-5xl text-white text-center mb-4">
            DesignTrix 2025
          </h1>
        </CustomDiv>
        <div className="w-full flex flex-row">
          <About />
          {/* 3d carousal */}
          <div className="w-1/2 ">
            <CuteAnimal/>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default App;
