import React from "react";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import Gallery from "./core/public/Home/Gallery/Gallery";
import Landing from "./core/public/Home/Landing/landingPage";
import InfoSection from "./core/public/Home/InfoSection/Infosection";
import SectionCards from "./core/public/Home/SectionCards/SectionCards";
import Team from "./core/public/Home/Team/Team";
import GridSection from "./core/public/Home/GridSection/gridSection";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <SectionCards />
      <InfoSection />
      <Team />
      <Gallery />
      <GridSection />
      <Footer />
    </>
  );
}

export default App;
