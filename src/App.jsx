import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { About, Contact, Certificates, Education, Hero, Navbar, Tech, Project, StarsCanvas, Resume } from './components';
import ReactGA from "react-ga4";
import React from "react";

ReactGA.initialize("G-87L629FQ3W");

const TrackPageView = () => {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null; // This component just tracks pageviews, no UI.
};

const App = () => {
  return (
    <BrowserRouter>
      <TrackPageView /> {/* Add this to track route changes */}
      
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Project />
        <Education />
        {/* <Experience /> */}
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
