import React, {useState, useEffect} from "react";
import { Footer, Header } from "../../layout";
import CategoryArea from "./category-area";
import CoursesArea from "./course-components/courses-area";
import Cta from "./cta";
import EventArea from "./event-area";
import HeroSlider from "./hero-slider";
import VideoArea from "./video-area";
import FaqArea from "./faq-area";
import Pop from '../../popup/Popup/Pop';
import OpenSpeed from "../../speed-dial/speed-dial";

const index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
      {showPopup && <Pop onClose={closePopup} />}
        <OpenSpeed/>
        <Header />
        <HeroSlider />
        <CategoryArea />
        <CoursesArea />
        <VideoArea />
        <EventArea />
        <Cta />
        <FaqArea />
        <Footer dark_bg={true} />
      </div>
    </div>
  );
};

export default index;
