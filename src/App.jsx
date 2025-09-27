import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Certificates,
  Education,
  Hero,
  Navbar,
  Tech,
  Project,
  StarsCanvas,
  Resume,
} from './components';
import ReactGA from "react-ga4";

ReactGA.initialize("G-87L629FQ3W");

const TrackPageView = () => {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <TrackPageView />

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Project />
        <Education />
        <Resume />
        <Certificates />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
