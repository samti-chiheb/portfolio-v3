import React, { useEffect } from "react";
import {
  bigMoon,
  bigRocks,
  littleMoon,
  littleMountains,
  mediumMountains,
  mediumRocks,
  sideMoon,
} from "../../assets";

import "./index.css";

const HeroParallax = () => {
  useEffect(() => {
    const parallaxEl = document.querySelectorAll(".parallax-container img");
    let xValue, yValue;

    window.addEventListener("mousemove", (e) => {

      if (window.innerWidth > 768) {
        
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;
  
        parallaxEl.forEach((el) => {
          let speedX = el.dataset.speedx;
          let speedY = speedX * 0.9;
          let speedZ = speedY * 1.1;
  
          let inLeft =
            parseFloat(getComputedStyle(el).left) < window.innerWidth ? 1 : -1;
          let zValue = e.clientX - parseFloat(getComputedStyle(el).left) * inLeft;
  
          el.style.transform = `
          translateX(calc(-48% + ${-xValue * speedX }px)) 
          translateY(calc(-50% + ${yValue * speedY }px))
          perspective(2300px)
          translateZ(${zValue * speedZ}px )
          `;
        });
      }


    });
  }, []);

  return (
    <div className="parallax-container">

      {/* header back text */}
      <h1 className="absolute font-black text-[#fff] lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>
      <p className="absolute text-[#fff] font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develope UI and Web App
        <br />
        using JS.
      </p>

      <img data-speedx="0.27" src={littleMoon} alt="" className=" absolute" />
      <img data-speedx="0.2" src={bigMoon} alt="" className=" absolute" />
      <img
        data-speedx="0.23"
        src={littleMountains}
        alt=""
        className=" absolute"
      />
      <img
        data-speedx="0.19"
        src={mediumMountains}
        alt=""
        className=" absolute"
      />
      <img data-speedx="0.16" src={mediumRocks} alt="" className=" absolute" />
      <img data-speedx="0.1" src={sideMoon} alt="" className=" absolute" />
      <img data-speedx="0.08" src={bigRocks} alt="" className=" absolute" />

      {/* header front text */}
      <h1 className="absolute front-text font-black lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>
      <p className="absolute front-text font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develope UI and Web App
        <br />
        using JS.
      </p>
    </div>
  );
};

export default HeroParallax;