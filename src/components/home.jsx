import React from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { About } from "./about";
import { Rpo } from "./rpo";
import { SoftwareDevelopment } from "./softwareDevelopment";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Career } from "./career";
import { Contact } from "./contact";
import { useState } from "react";
import { useEffect } from "react";
import JsonData from "../data/data.json"

function Home() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Rpo data={landingPageData.Rpo} />
      <SoftwareDevelopment data={landingPageData.SoftwareDevelopment} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Career data={landingPageData.Contact} />
      <Contact data={landingPageData.Contact} />
    </>
  );
}

export default Home;
