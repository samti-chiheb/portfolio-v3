import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { social } from "../../constants";
import { CgPushChevronRight } from "react-icons/cg";
import { CgPushChevronLeft } from "react-icons/cg";

const SocialBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      window.addEventListener("scroll", () => {
        setIsOpen(false);
      });

      container.current.addEventListener("focus", () => {
        setIsOpen(false);
        console.log("focuesd");
      });
    }
  }, []);

  useEffect(() => {
    console.log(isOpen);
  });

  useEffect(() => {
    if (!isOpen) {
      container.current.style.transform = " translateX(-60%)";
      text.current.style.display = "initial";
    } else {
      container.current.style.transform = "";
      text.current.style.display = "none";
    }
  }, [isOpen]);

  return (
    <aside className="badge-container" ref={container}>
      <div className="social-container">
        {social.map((element, index) => (
          <a key={index} href={element.link} target="_blank">
            <img src={element.icon} alt={element.name} />
          </a>
        ))}
      </div>
      <div className="badge-trigger">
        <p ref={text}>Connect</p>
        <a onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <CgPushChevronRight /> : <CgPushChevronLeft />}
        </a>
      </div>
    </aside>
  );
};

export default SocialBar;
