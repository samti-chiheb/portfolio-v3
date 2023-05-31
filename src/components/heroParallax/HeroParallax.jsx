import React, { useEffect, useRef } from "react";
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
  const parallaxContainerRef = useRef(null);

  useEffect(() => {
    const parallaxContainer = parallaxContainerRef.current;
    let xValue = 0;
    let yValue = 0;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;

      xValue = e.clientX - window.innerWidth / 2;
      yValue = - e.clientY - window.innerHeight / 2;

      requestAnimationFrame(updateParallax);
    };

    const updateParallax = () => {
      const parallaxEl = parallaxContainer.querySelectorAll("img");

      parallaxEl.forEach((el) => {
        const speedX = parseFloat(el.getAttribute("data-speedx")) * 0.7;
        const speedY = speedX * 0.7;
        const speedZ = speedY * 1.1;

        const inLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth ? 1 : -1;
        const zValue = xValue - parseFloat(getComputedStyle(el).left) * inLeft;

        el.style.transform = `
          translateX(calc(-48% + ${-xValue * speedX}px)) 
          translateY(calc(-50% + ${yValue * speedY}px))
          perspective(2300px)
          translateZ(${zValue * speedZ}px)
        `;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container" ref={parallaxContainerRef}>
      {/* Header back text */}
      <h1 className="absolute font-black text-[#fff] lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>
      <p className="absolute text-[#fff] font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develop Web Apps
        <br />
        using JS.
      </p>

      {/* Images */}
      <img data-speedx="0.27" src={littleMoon} alt="" className="absolute" />
      <img data-speedx="0.2" src={bigMoon} alt="" className="absolute" />
      <img
        data-speedx="0.23"
        src={littleMountains}
        alt=""
        className="absolute"
      />
      <img
        data-speedx="0.19"
        src={mediumMountains}
        alt=""
        className="absolute"
      />
      <img data-speedx="0.16" src={mediumRocks} alt="" className="absolute" />
      <img data-speedx="0.1" src={sideMoon} alt="" className="absolute" />
      <img data-speedx="0.08" src={bigRocks} alt="" className="absolute" />

      {/* Header front text */}
      <h1 className="absolute front-text font-black lg:text-[90px] sm:text-[70px] xs:text-[60px] text-[50px] lg:leading-[98px]">
        I'M Chiheb
      </h1>
      <p className="absolute front-text font-medium lg:text-[36px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
        I develop Web Apps
        <br />
        using JS.
      </p>
    </div>
  );
};

export default HeroParallax;
