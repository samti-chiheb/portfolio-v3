import "./i18n";
import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Loader,
  About,
  // Header,
  Contact,
  Testimonial,
  Hero,
  Navbar,
  Skills,
  Projects,
  Footer,
  SocialBar,
  Experience,
} from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);
  }, [loading]);

  return (
    <BrowserRouter>
      {loading && <Loader />}
      <div
        className="relative z-0 bg-primary main-element scroll-snap-y scroll-container "
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Navbar />
        <Hero />
        <SocialBar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonial />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
