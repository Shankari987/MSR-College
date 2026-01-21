
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchPrimaryEvents,
//   selectPrimaryEvents,
// } from "../../../redux/features/homepageEventsSlice";

// const HeroSlider = () => {
//   const dispatch = useDispatch();
//   const primary_events = useSelector(selectPrimaryEvents);
//   const [isUpdatesVisible, setIsUpdatesVisible] = useState(true);

//   useEffect(() => {
//     dispatch(fetchPrimaryEvents());
//   }, [dispatch]);

//   const toggleUpdatesVisibility = () => setIsUpdatesVisible(v => !v);

//   return (
//     <>
//       <div className="hero-banner hero-style-1 bg-image">
//         <div className="video-container">
//           <video autoPlay muted loop playsInline className="video-background">
//             <source src="/assets/video/videoplayback.webm" type="video/webm" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Hero Content Overlay */}
//         <div className="hero-content-overlay">
//           <div className="container">
//             <div className="hero-layout">
//               {/* Left Column - Main Content */}
//               <div className="hero-content">
//                 <h1 className="hero-title">
//                   Sri Shanmugha Educational Institutions
//                 </h1>
//                 <h2 className="hero-subtitle">Innovate and Inspire</h2>
//                 <p className="hero-description">
//                   Pioneering Innovation in Higher Education Since 2010. With 15+
//                   Years of Educational Excellence, 20,000+ Students Transformed,
//                   100+ Quality Awards, and 95% Placement Success.
//                 </p>

//                 <div className="hero-cta-buttons">
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => {
//                       window.location.href =
//                         "https://admissions.shanmugha.edu.in/";
//                     }}
//                   >
//                     Apply Now
//                   </button>

//                   <a
//                     href="/assets/docs/brochure.pdf"
//                     className="btn btn-secondary"
//                     download
//                   >
//                     Download Brochure
//                   </a>
//                 </div>
//               </div>

//               {/* Right Column - Campus Updates */}
//               <aside
//                 className={`campus-updates ${
//                   isUpdatesVisible ? "visible" : "hidden"
//                 }`}
//                 aria-live="polite"
//                 aria-hidden={!isUpdatesVisible}
//               >
//                 <div className="updates-header">
//                   <h3>Campus Updates</h3>
//                   <p>Notifications & alerts</p>

//                   {/* FIX: ensure always a button, not submit; lift z-index */}
//                   <button
//                     className="close-updates"
//                     type="button"
//                     onClick={toggleUpdatesVisibility}
//                     aria-label="Close updates"
//                   >
//                     &times;
//                   </button>
//                 </div>

//                 <div className="updates-content">
//                   <div className="update-item highlight">
//                     <h4>Admissions Open 2025–26</h4>
//                     <p>Application now being accepted for all programs</p>
//                   </div>

//                   <div className="update-item stat">
//                     <span className="update-number">3500+</span>
//                     <span className="update-label">Students</span>
//                   </div>

//                   <div className="update-item">
//                     <h4>100% Placements</h4>
//                   </div>

//                   <div className="contact-info">
//                     <p className="phone">0428-335-9999</p>
//                     <p className="email">admissions@shanmugha.edu.in</p>
//                     <p className="address">Sankari, Salem, TN</p>
//                   </div>
//                 </div>
//               </aside>

//               {/* Toggle Button — now shows on ALL screens when hidden */}
//               <button
//                 className={`updates-toggle ${!isUpdatesVisible ? "visible" : "hidden"}`}
//                 type="button"
//                 onClick={toggleUpdatesVisibility}
//                 aria-label="Show updates"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//                   <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//                 </svg>
//                 <span>Updates</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

//         .hero-banner {
//           position: relative;
//           width: 100%;
//           height: 95vh;
//           overflow: hidden;
//           font-family: "Poppins", sans-serif;
//         }
//         .video-container { position: relative; width: 100%; height: 100%; }
//         .video-background {
//           position: absolute; top: 50%; left: 50%;
//           transform: translate(-50%, -50%);
//           min-width: 90%; min-height: 90%;
//           object-fit: cover; z-index: 1;
//         }

//         .hero-content-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(
//             180deg,
//             rgba(66, 95, 189, 0.85) 0%,
//             rgba(66, 95, 189, 0.5) 50%,
//             rgba(66, 95, 189, 0.2) 100%
//           );
//           z-index: 2; display: flex; align-items: center; color: white;
//         }

//         .container { width: 100%; max-width: 1700px; margin: 0 auto; padding: 0 20px; }
//         .hero-layout { display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; }

//         /* Left Column */
//         .hero-content {
//           margin-top: 5%; flex: 1; max-width: 620px; margin-left: 2%;
//         }
//         .hero-title { font-size: 4.8rem; font-weight: 700; margin-bottom: 1rem; color: #fff; max-width: 26ch; }
//         .hero-subtitle { font-size: 3rem; font-weight: 600; margin-bottom: 1.2rem; color: #facc15; }
//         .hero-description { font-size: 1.6rem; line-height: 1.55; margin-bottom: 1.6rem; color: #fff; }
//         .hero-cta-buttons { display: flex; gap: 1rem; margin-bottom: 1.5rem; max-width: 460px; }

//         .btn {
//           display: inline-flex; align-items: center; justify-content: center;
//           padding: 14px 24px; border-radius: 12px; font-weight: 700; font-size: 1.2rem;
//           min-height: 52px; border: 2px solid transparent; cursor: pointer; transition: all 0.25s ease;
//         }
//         .btn-primary { background-color: #facc15; border-color: #facc15; color: rgb(7, 46, 162); }
//         .btn-primary:hover { background: transparent; border-color: #fff; color: #fff; }
//         .btn-secondary { background: transparent; color: #fff; border-color: #fff; }
//         .btn-secondary:hover { background: rgba(255,255,255,0.12); }

//         /* Campus Updates (centered content) */
//         .campus-updates {
//           width: 400px; background: #fff; border-radius: 16px; padding: 20px;
//           color: #1f2937; box-shadow: 0 8px 25px rgba(0,0,0,0.15);
//           margin-top: 4%; margin-right: 2%; text-align: center;
//           max-height: 75vh; overflow-y: auto; position: relative; z-index: 3;
//         }
//         .campus-updates.visible { display: block; opacity: 1; transform: translateY(0); }
//         .campus-updates.hidden { display: none; opacity: 0; transform: translateY(6px); }

//         .updates-header {
//           position: relative; margin-bottom: 15px; padding-bottom: 10px;
//           border-bottom: 1px solid rgba(0,0,0,0.08);
//         }
//         .updates-header h3 { margin: 0; font-size: 2rem; font-weight: 700; color: #111827; }
//         .updates-header p { margin: 6px 0 0; font-size: 1.05rem; color: #6b7280; }

//         /* FIX: clickable close */
//         .close-updates {
//           position: absolute; top: 0; right: 0;
//           background: rgba(0,0,0,0.04); border: none; border-radius: 8px;
//           width: 34px; height: 34px; font-size: 20px; line-height: 1;
//           display: grid; place-items: center; cursor: pointer; color: #4b5563;
//           z-index: 4; /* ensure above any scrollbars/content */
//         }
//         .close-updates:hover { background: rgba(0,0,0,0.08); color: #111827; }

//         .updates-content .update-item { margin-bottom: 14px; }
//         .update-item.highlight { background: #e8f5e9; border-radius: 10px; padding: 10px; }
//         .update-item h4 { margin: 0 0 6px; font-size: 1.2rem; color: #111827; }
//         .update-item p { margin: 0; font-size: 1.05rem; color: #4b5563; }
//         .update-item.stat .update-number { display: block; font-size: 2.4rem; font-weight: 800; color: #3b82f6; }
//         .update-item.stat .update-label { font-size: 0.98rem; color: #6b7280; }

//         .contact-info { margin-top: 10px; }
//         .contact-info p { margin: 4px 0; font-size: 1rem; }
//         .email { color: #2563eb; }

//         /* Toggle (bottom-right placement) */
// .updates-toggle {
//   position: fixed;
//   bottom: 24px;         /* moved from top to bottom */
//   right: 24px;
//   display: none;
//   align-items: center;
//   gap: 8px;
//   background: rgba(17, 24, 39, 0.92);
//   color: #fff;
//   border: 0;
//   outline: none;
//   border-radius: 9999px;
//   padding: 12px 16px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
//   z-index: 5;
//   cursor: pointer;
//   font-weight: 600;
//   font-size: 0.95rem;
//   transition: transform 0.2s ease, background 0.2s ease;
// }
// .updates-toggle:hover {
//   background: rgba(17, 24, 39, 1);
//   transform: translateY(-2px);
// }
// .updates-toggle.visible {
//   display: flex;
// }
// .updates-toggle.hidden {
//   display: none;
// }


//         @media (max-width: 1200px) { .campus-updates { width: 360px; } }
//         @media (max-width: 1024px) {
//           .hero-layout { gap: 20px; }
//           .campus-updates { width: 340px; margin-right: 3%; }
//           .hero-content { max-width: 520px; margin-left: 5%; }
//         }
//         @media (max-width: 768px) {
//           .hero-banner { height: auto; min-height: 100vh; }
//           .hero-layout { flex-direction: column; }
//           .hero-content { max-width: 100%; margin-top: 14%; margin-left: 0; padding: 0 15px; text-align: center; }
//           .campus-updates { width: calc(100% - 24px); margin: 14px auto 0; max-height: none; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroSlider;


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPrimaryEvents,
  selectPrimaryEvents,
} from "../../../redux/features/homepageEventsSlice";

const HeroSlider = () => {
  const dispatch = useDispatch();
  const primary_events = useSelector(selectPrimaryEvents);
  const [isUpdatesVisible, setIsUpdatesVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchPrimaryEvents());
  }, [dispatch]);

  const toggleUpdatesVisibility = () => setIsUpdatesVisible((v) => !v);

  return (
    <>
      <div className="hero-banner hero-style-1 bg-image">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="video-background">
            <source src="/assets/video/videoplayback.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content Overlay */}
        <div className="hero-content-overlay">
          <div className="container">
            <div className="hero-layout">
              {/* Left Column - Main Content */}
              <div className="hero-content">
                <h1 className="hero-title">
                  Sri Shanmugha Educational Institutions
                </h1>
                <h2 className="hero-subtitle">Innovate and Inspire</h2>
                <p className="hero-description">
                  Pioneering Innovation in Higher Education Since 2010. With 15+
                  Years of Educational Excellence, 20,000+ Students Transformed,
                  100+ Quality Awards, and 95% Placement Success.
                </p>

                <div className="hero-cta-buttons">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href =
                        "https://admissions.shanmugha.edu.in/";
                    }}
                  >
                    Apply Now
                  </button>

                  <a
                    href="/assets/docs/brochure.pdf"
                    className="btn btn-secondary"
                    download
                  >
                    Download Brochure
                  </a>
                </div>
              </div>

              {/* Right Column - Campus Updates */}
              <aside
                className={`campus-updates ${
                  isUpdatesVisible ? "visible" : "hidden"
                }`}
                aria-live="polite"
                aria-hidden={!isUpdatesVisible}
              >
                <div className="updates-header">
                  <h3>Campus Updates</h3>
                  <p>Notifications & alerts</p>

                  <button
                    className="close-updates"
                    type="button"
                    onClick={toggleUpdatesVisibility}
                    aria-label="Close updates"
                  >
                    &times;
                  </button>
                </div>

                <div className="updates-content">
                  <div className="update-item highlight">
                    <h4>Admissions Open 2025–26</h4>
                    <p>Application now being accepted for all programs</p>
                  </div>

                  <div className="update-item stat">
                    <span className="update-number">3500+</span>
                    <span className="update-label">Students</span>
                  </div>

                  <div className="update-item">
                    <h4>100% Placements</h4>
                  </div>

                  <div className="contact-info">
                    <p className="phone">0428-335-9999</p>
                    <p className="email">admissions@shanmugha.edu.in</p>
                    <p className="address">Sankari, Salem, TN</p>
                  </div>
                </div>
              </aside>

              {/* Toggle Button — shows bottom-right when hidden */}
              <button
                className={`updates-toggle ${
                  !isUpdatesVisible ? "visible" : "hidden"
                }`}
                type="button"
                onClick={toggleUpdatesVisibility}
                aria-label="Show updates"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span>Updates</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

        .hero-banner {
          position: relative;
          width: 100%;
          height: 92vh;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
        }
        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .video-background {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 90%;
          min-height: 90%;
          object-fit: cover;
          z-index: 1;
        }

        .hero-content-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(66, 95, 189, 0.85) 0%,
            rgba(66, 95, 189, 0.5) 50%,
            rgba(66, 95, 189, 0.2) 100%
          );
          z-index: 2;
          display: flex;
          align-items: center;
          color: white;
        }

        .container {
          width: 100%;
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .hero-layout {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }

        /* Left Column */
        .hero-content {
          margin-top: 5%;
          flex: 1;
          max-width: 620px;
          margin-left: 2%;
        }
        .hero-title {
          font-size: 4.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
          max-width: 26ch;
        }
        .hero-subtitle {
          font-size: 3rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: #facc15;
        }
        .hero-description {
          font-size: 1.6rem;
          line-height: 1.55;
          margin-bottom: 2rem;
          color: #fff;
          font-weight: 400;
        }

        /* CTA Buttons – full width of text */
        .hero-cta-buttons {
          display: flex;
          gap: 1rem;
          width: 100%;
          max-width: 620px; /* match text width */
          justify-content: flex-start;
        }
        .btn {
          flex: 1;
          text-align: center;
          padding: 16px 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.2rem;
          min-height: 60px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .btn-primary {
          background-color: #facc15;
          border-color: #facc15;
          color: rgb(7, 46, 162);
        }
        .btn-primary:hover {
          background: transparent;
          border-color: #fff;
          color: #fff;
        }
        .btn-secondary {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* Campus Updates */
        .campus-updates {
          width: 400px;
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          color: #1f2937;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          margin-top: 4%;
          margin-right: 2%;
          text-align: center;
          max-height: 75vh;
          overflow-y: auto;
          position: relative;
          z-index: 3;
        }
        .campus-updates.visible {
          display: block;
          opacity: 1;
        }
        .campus-updates.hidden {
          display: none;
        }

        .updates-header {
          position: relative;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .updates-header h3 {
          margin: 0;
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
        }
        .updates-header p {
          margin: 6px 0 0;
          font-size: 1.05rem;
          color: #6b7280;
        }

        .close-updates {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.04);
          border: none;
          border-radius: 8px;
          width: 34px;
          height: 34px;
          font-size: 20px;
          display: grid;
          place-items: center;
          cursor: pointer;
          color: #4b5563;
          z-index: 4;
        }
        .close-updates:hover {
          background: rgba(0, 0, 0, 0.08);
          color: #111827;
        }

        .update-item {
          margin-bottom: 14px;
        }
        .update-item.highlight {
          background: #e8f5e9;
          border-radius: 10px;
          padding: 10px;
        }
        .update-item h4 {
          margin: 0 0 6px;
          font-size: 1.2rem;
          color: #111827;
        }
        .update-item p {
          margin: 0;
          font-size: 1.05rem;
          color: #4b5563;
        }
        .update-item.stat .update-number {
          display: block;
          font-size: 2.4rem;
          font-weight: 800;
          color: #3b82f6;
        }
        .update-item.stat .update-label {
          font-size: 0.98rem;
          color: #6b7280;
        }

        .contact-info {
          margin-top: 10px;
        }
        .contact-info p {
          margin: 4px 0;
          font-size: 1rem;
        }
        .email {
          color: #2563eb;
        }

        /* Toggle (bottom-right placement) */
        .updates-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: none;
          align-items: center;
          gap: 8px;
          background: rgba(17, 24, 39, 0.92);
          color: #fff;
          border: 0;
          outline: none;
          border-radius: 9999px;
          padding: 12px 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
          z-index: 5;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.95rem;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .updates-toggle:hover {
          background: rgba(17, 24, 39, 1);
          transform: translateY(-2px);
        }
        .updates-toggle.visible {
          display: flex;
        }
        .updates-toggle.hidden {
          display: none;
        }

        @media (max-width: 1200px) {
          .campus-updates {
            width: 360px;
          }
        }
        @media (max-width: 1024px) {
          .hero-layout {
            gap: 20px;
          }
          .campus-updates {
            width: 340px;
            margin-right: 3%;
          }
          .hero-content {
            max-width: 520px;
            margin-left: 5%;
          }
        }
        @media (max-width: 768px) {
          .hero-banner {
            height: auto;
            min-height: 100vh;
          }
          .hero-layout {
            flex-direction: column;
          }
          .hero-content {
            max-width: 100%;
            margin-top: 14%;
            margin-left: 0;
            padding: 0 15px;
            text-align: center;
          }
          .campus-updates {
            width: calc(100% - 24px);
            margin: 14px auto 0;
            max-height: none;
          }
          .hero-cta-buttons {
            flex-direction: column;
          }
          .hero-content-overlay {
            padding-top: 190px; 
          }
  }

        }
      `}</style>
    </>
  );
};

export default HeroSlider;
