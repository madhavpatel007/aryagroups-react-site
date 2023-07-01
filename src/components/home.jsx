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
import { useEffect } from "react";
import { useAnalytics } from "../contexts/AnalyticsContext";

function Home(props) {
  const {
    headerData,
    aboutData,
    rpoData,
    softwareDevelopmentData,
    galleryData,
    testimonialsData,
    teamData,
    careerData,
    contactData,
  } = props;

  const { printFirebaseAnalyticsLog } = useAnalytics();

  useEffect(() => {
    printFirebaseAnalyticsLog("Home Page");
  }, []);

  return (
    <>
      <Navigation />
      <Header data={headerData} />
      <About data={aboutData} />
      <Rpo data={rpoData} />
      <SoftwareDevelopment data={softwareDevelopmentData} />
      <Gallery data={galleryData} />
      {/* <Testimonials data={testimonialsData} /> */}
      {/* <Team data={teamData} /> */}
      {/* <Career data={careerData} /> */}
      <Contact data={contactData} />
    </>
  );
}

export default Home;
