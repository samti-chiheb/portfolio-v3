import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Loader,
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Skills,
  Works,
  Footer,
  SocialBar,
  StarsCanvas,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <Loader
        className="bg-secondary"
        style={{ visibility: !loading ? "hidden" : "visible" }}
      />
      <StarsCanvas />
      <div
        className="relative z-0 bg-primary main-element"
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Navbar />
        <Hero />
        <SocialBar />
        <About />
        <Skills />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
