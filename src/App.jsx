import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./components/home";
import { SoftwareDevelopmentDetails } from "./components/softwareDevelopmentDetails";
import { RpoDetails } from "./components/rpoDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAnalytics } from "@firebase/analytics";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  // In Future If We Want to See the Activity Of A Specific User, We Will Replace The 'USER ID' With Actual UserId
  // analytics.setUserId('USER ID');

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
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
            element={
              <SoftwareDevelopmentDetails
                data={landingPageData.SoftwareDevelopmentDetails}
              />
            }
          />
          <Route
            path="/rpo-details"
            element={<RpoDetails data={landingPageData.RpoDetails} />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
