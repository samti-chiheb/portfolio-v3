import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Skills,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
