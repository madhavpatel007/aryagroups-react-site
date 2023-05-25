import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./components/home";
import { SoftwareDevelopmentDetails } from "./components/softwareDevelopmentDetails";
import { RpoDetails } from "./components/rpoDetails";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              headerData={landingPageData.Header}
              aboutData={landingPageData.About}
              rpoData={landingPageData.Rpo}
              softwareDevelopmentData={landingPageData.SoftwareDevelopment}
              galleryData={landingPageData.Gallery}
              testimonialsData={landingPageData.Testimonials}
              teamData={landingPageData.Team}
              careerData={landingPageData.Contact}
              contactData={landingPageData.Contact}
            />
          }
        />
        <Route
          path="/sw-development-details"
          element={<SoftwareDevelopmentDetails />}
        />
        <Route
          path="/rpo-details"
          element={<RpoDetails data={landingPageData.RpoDetails} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
