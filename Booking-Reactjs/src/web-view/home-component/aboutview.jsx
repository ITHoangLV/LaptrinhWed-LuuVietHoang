// AboutSection.jsx
import React from "react";
import AboutSection from "../AboutSection";
import Header from "../../share-view/header";
import Footer from "../../share-view/footer";
import HotelIntro from "../../../public/video/HotelIntro.mp4";

const AboutView = () => {
  return (
    <div>
      <Header />

      <video className="videoTag" autoPlay loop muted style={{}}>
        <source src={HotelIntro} type="video/mp4" />
      </video>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutView;
