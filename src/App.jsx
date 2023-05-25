import { BrowserRouter } from "react-router-dom";
import {
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
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
          <SocialBar />
        </div>
        <About />
        <Skills />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
