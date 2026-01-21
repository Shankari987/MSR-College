import React from "react";
import { Footer, Header } from "../../layout";
import HeroBanner from "./hero-slider";
import Courses from "./courses";
import AboutArea from "../../components/abouts/about/about-area";

const head_text = "At Shanmugha College of Medical Science and Research, you can choose to specialise in the area that interests you most, thus tailoring your degree to match your specific career ambitions. Our Medical Sciences degrees prepare you to translate scientific discoveries and technological advances into improved healthcare through group sessions, lectures and hands-on laboratory practicals. Medical Science helps you discover how the human body normally works, how things can go wrong in the body due to disease and trauma, and how normal function might be restored.";
const index = () => {

  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        <Header />
        <HeroBanner />
        <AboutArea head_text={head_text} />
        <Courses />
        <Footer dark_bg={true} /> 
      </div>
    </div>
  );
};

export default index;
