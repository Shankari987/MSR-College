

// import React from "react";
// import { Footer } from "../../../layout";
// import { HeaderThree } from "../../../layout";

// import OpenSpeed from "../../../speed-dial/speed-dial";
// import HeroSlider from "./hero-slider";
// import WhySsei from "./why-ssei";
// import EventArea from "./event-area";
// import SidebarOne from "./blog-sidebar-1";
// import Sets from "./sets";
// import BrandArea from "./brand-area";
// import Features from "./features";
// import InstitutionIntro from "../institution-intro";

// import { Grid, useMediaQuery, useTheme } from "@mui/material";
// import NewPage from "../newPage";
// import AccreditationsAchievements from "../accreditations-achievements";
// import Ecosystem from "../ecosystem";
// import VisualStories from "../visualStories";

// const Institutions = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <div className="sticky-header">
//       <div id="main-wrapper" className="main-wrapper">
//         {/* <OpenSpeed /> */}
//         <HeaderThree />
//         <HeroSlider />
//         <InstitutionIntro />

//         {/* <WhySsei /> */}

//         {/* 15th Year Excellence Page */}
//         {/* <NewPage/> */}
//         <AccreditationsAchievements />

//         {/* <Grid container spacing={10} direction={isMobile ? "column" : "row"}>
//           <Grid item xs={12} md={8}>
//             <EventArea />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <SidebarOne />
//           </Grid>
//         </Grid> */}

//         <Sets />
//         {/* <BrandArea /> */}
//         {/* <VisualStories/> */}
//         <Features />
//         {/* <Ecosystem/> */}
//         <Footer dark_bg={true} />
//       </div>
//     </div>
//   );
// };

// export default Institutions;


// institutions.js
import React from "react";
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles, StyledEngineProvider } from "@mui/material";
import { Footer } from "../../../layout";
import { HeaderThree } from "../../../layout";
import HeroSlider from "./hero-slider";
import InstitutionIntro from "../institution-intro";
import Sets from "./sets";
import Features from "./features";
import Aakam from "../aakam";
import AakamShine from "../aakamshine";
import Snaps from "../snaps";
import NewsSection from "../NewsSection";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const Institutions = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* normalize & ensure fonts flow to MUI */}
        <CssBaseline />
        {/* force Poppins for non-MUI tags/classes inside this tree */}
        <GlobalStyles styles={{
          // root scope
          "html, body": { fontFamily: "'Poppins', sans-serif" },
          // headings and common UI
          "h1, h2, h3, h4, h5, h6": { fontFamily: "'Poppins', sans-serif !important" },
          "button, a, input, textarea, select, .btn": { fontFamily: "'Poppins', sans-serif !important" },
          // known classes from your components
          ".hero-title, .hero-subtitle, .hero-description": { fontFamily: "'Poppins', sans-serif !important" }, // HeroSlider
          ".apply-now-btn .btn, .mainmenu-nav a, .header-action": { fontFamily: "'Poppins', sans-serif !important" }, // HeaderThree
        }} />

        {/* Load the font (make sure weights you use are included) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />

        <div className="sticky-header">
          <div id="main-wrapper" className="main-wrapper">
            <HeaderThree />
            <HeroSlider />
            <InstitutionIntro />
            <Sets />
            <Features />
            <Aakam />
            <AakamShine />
            <Snaps />
            <NewsSection />
            <Footer dark_bg={true} />
          </div>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Institutions;
