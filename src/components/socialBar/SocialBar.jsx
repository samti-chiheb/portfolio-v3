import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { social } from "../../constants";
import { CgPushChevronRight } from "react-icons/cg";
import { CgPushChevronLeft } from "react-icons/cg";

const SocialBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const container = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    // Define the event listener functions
    const handleScroll = () => {
      setIsOpen(false);
    };

    const handleFocus = () => {
      setIsOpen(false);
    };

    // Add event listeners if isOpen is true
    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
      if (container.current) {
        container.current.addEventListener("focus", handleFocus);
      }
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (container.current) {
        container.current.removeEventListener("focus", handleFocus);
      }
    };
  }, [isOpen, setIsOpen]);

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
    <aside
      className="badge-container"
      ref={container}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="social-container">
        {social.map((element, index) => (
          <a key={index} href={element.link} target="_blank">
            <img src={element.icon} alt={element.name} />
          </a>
        ))}
      </div>
      <div className="badge-trigger">
        <p ref={text}>Connect</p>
        <a>{!isOpen ? <CgPushChevronRight /> : <CgPushChevronLeft />}</a>
      </div>
    </aside>
  );
};

export default SocialBar;
