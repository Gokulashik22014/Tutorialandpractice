import React from "react";

const BlurCard = () => {
  return (
    <div className="w-[500px] h-[360px] bg-transparent backdrop-blur-md absolute rounded-md z-10 top-1/4 left-1/3 border border-white bg-gradient-to-bl from-[rgba(255,255,255,0.5)] to-[rgba(0,0,0,0.7)] bg-repeat bg-[length:20px_20px]">
      <h1 className="text-lg text-white text-center">Welcome to the room</h1>
    </div>
  );
};

export default BlurCard;
