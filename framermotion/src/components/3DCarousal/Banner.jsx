import React from "react";
import "./style.css";
const Banner = () => {
  const items = [
    "/images/dragon_1.jpg",
    "/images/dragon_2.jpg",
    "/images/dragon_3.jpg",
    "/images/dragon_4.jpg",
    "/images/dragon_5.jpg",
    "/images/dragon_1.jpg",
    "/images/dragon_2.jpg",
    "/images/dragon_3.jpg",
    "/images/dragon_4.jpg",
    "/images/dragon_5.jpg"
  ];
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": items.length }}>
        {items.map((item,index) => (
          <div className="item" style={{'--position':index}}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
