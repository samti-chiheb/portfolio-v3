import React from "react";
import {
  background,
  bigMoon,
  bigRocks,
  littleMoon,
  littleMountains,
  mediumMountains,
  mediumRocks,
  sideMoon,
  skySmoke,
  stars,
} from "../../assets";

import "./index.css";

const HeroParallax = () => {
  console.log("hey");
  console.log("backgrooud :" + bigMoon);
  return (
    <div className="parallax-container">
      <img src={background} alt="" className="width-x2 absolute" />
      <img src={stars} alt="" className="width-x2 absolute" />

      {/* header back text */}
      <h1 className="absolute font-black text-[#fff] lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>
      <p className="absolute text-[#fff] font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develope UI and Web App
        <br />
        using JS.
      </p>

      <img src={bigMoon} alt="" className="width-x2 absolute" />

      {/* header front text */}
      <h1 className="absolute front-text font-black lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>

      <img src={littleMoon} alt="" className="width-x2 absolute" />
      <img src={littleMountains} alt="" className="width-x2 absolute" />
      <img src={mediumMountains} alt="" className="width-x2 absolute" />
      <img src={mediumRocks} alt="" className="width-x2 absolute" />

      <p className="absolute front-text font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develope UI and Web App
        <br />
        using JS.
      </p>

      <img src={sideMoon} alt="" className="width-x2 absolute" />
      <img src={skySmoke} alt="" className="width-x2 absolute" />
      <img src={bigRocks} alt="" className="width-x2 absolute" />
    </div>
  );
};

export default HeroParallax;
