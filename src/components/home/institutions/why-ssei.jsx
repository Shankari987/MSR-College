// // import React from "react";
// // import CountUp from "react-countup"; // <-- ADD THIS

// // const Features = () => {
// //   const isNumber = (str) => /^\d+/.test(str); // Check if title starts with a number

//   // const highlights = [
//   //   { title: "120+", description: "Acre Green Campus" },
//   //   { title: "3000+", description: "Students" },
//   //   { title: "70+", description: "MOUs Signed for Corporate Collaborations" },
//   //   { title: "300+", description: "Dynamic Mentors" },
//   //   { title: "35+", description: "Funded Projects" },
//   //   { title: "12+", description: "Monthly Calenda Events" },
//   //   { title: "10+", description: "smart Cards Received from Startup TN" },
//   //   { title: "5+", description: "Research Centres" },
//   //   { title: "300+", description: "Eventsin 2024" },
//   // ];

//   // const campusAmenities = [
//   //   { title: "Indoor Auditorium", description: "500 Seats" },
//   //   { title: "Outdoor Auditorium", description: "3,000 Seats" },
//   //   { title: "Fully Equipped", description: "Modern Gym" },
//   //   { title: "Spacious", description: "Dining Areas" },
//   //   { title: "Advanced", description: "Tech Labs" },
//   //   { title: "State-of-the-Art", description: "Libraries" },
//   //   { title: "Student-Chosen", description: "Hostel Menu" },
//   //   { title: "In-House", description: "Doctors & Pharmacy" },
//   //   { title: "24/7", description: "Ambulance Facility" },
//   //   { title: "24/7", description: "Campus Security" },
//   // ];

// //   return (
// //     <div className="pv-features-area">
// //       <div className="container">
// //         <div className="section-title section-center splash-title mt-5">
// //           <span
// //             className="pre-title"
// //             data-sal="slide-up"
// //             data-sal-duration="1000"
// //           >
// //             Why Choose Us
// //           </span>
// //         </div>

// //         <div className="row row--20 mt-4">
// //           {highlights.map((item, index) => (
// //             <div
// //               key={index}
// //               className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 d-flex justify-content-center"
// //             >
// //               <div
// //                 className="highlight-card text-center p-3"
// //                 style={{
// //                   border: "1px solid #eee",
// //                   borderRadius: "8px",
// //                   width: "100%",
// //                 }}
// //               >
// //                 <h4 style={{ marginBottom: "0.5rem", color: "#00264A" }}>
// //                   {isNumber(item.title) ? (
// //                     <>
// //                       <CountUp
// //                         end={parseInt(item.title)}
// //                         duration={2} // 2 seconds
// //                       />
// //                       {item.title.replace(/[0-9]/g, "")}{" "}
// //                       {/* Keep the "+" or others */}
// //                     </>
// //                   ) : (
// //                     item.title
// //                   )}
// //                 </h4>
// //                 <p style={{ fontSize: "0.9rem", color: "#555" }}>
// //                   {item.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Campus Amenities Section */}
// //         <div className="section-title section-center splash-title mt-5">
// //           <span
// //             className="pre-title"
// //             data-sal="slide-up"
// //             data-sal-duration="1000"
// //           >
// //             Campus Amenities
// //           </span>
// //         </div>

// //         <div className="row row--20 mt-4">
// //           {campusAmenities.map((item, index) => (
// //             <div
// //               key={index}
// //               className="col-6 col-sm-4 col-md-3 col-lg-3 mb-3 d-flex justify-content-center"
// //             >
// //               <div
// //                 className="highlight-card text-center p-3"
// //                 style={{
// //                   border: "1px solid #eee",
// //                   borderRadius: "8px",
// //                   width: "100%",
// //                 }}
// //               >
// //                 <h4 style={{ marginBottom: "0.5rem", color: "#00264A" }}>
// //                   {isNumber(item.title) ? (
// //                     <>
// //                       <CountUp end={parseInt(item.title)} duration={2} />
// //                       {item.title.replace(/[0-9]/g, "")}
// //                     </>
// //                   ) : (
// //                     item.title
// //                   )}
// //                 </h4>
// //                 <p style={{ fontSize: "0.9rem", color: "#555" }}>
// //                   {item.description}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Features;

// import React from "react";
// import CountUp from "react-countup";

// const Features = () => {
//   const isNumber = (str) => /^\d+/.test(str);

//   const whyChooseUsData = [
//     { title: "120+", description: "Acre Green Campus" },
//     { title: "3000+", description: "Students" },
//     { title: "70+", description: "MOUs Signed for Corporate Collaborations" },
//     { title: "300+", description: "Dynamic Mentors" },
//     { title: "35+", description: "Funded Projects" },
//     { title: "12+", description: "Monthly Calendar Events" },
//     { title: "10+", description: "Smart Cards Received from Startup TN" },
//     { title: "5+", description: "Research Centres" },
//     { title: "300+", description: "Events in 2024" },
//   ];

//   const campusAmenities = [
//     { title: "500", description: "Indoor Auditorium Seats" },
//     { title: "3000", description: "Outdoor Auditorium Seats" },
//     { title: "1", description: "Fully Equipped Modern Gym" },
//     { title: "4", description: "Spacious Dining Areas" },
//     { title: "165", description: "Advanced Tech Labs" },
//     { title: "2", description: "State-of-the-Art Libraries" },
//     { title: "Custom", description: "Student-Chosen Hostel Menu" },
//     { title: "2", description: "In-House Doctors & Pharmacy" },
//     { title: "24/7", description: "Ambulance Facility" },
//     { title: "24/7", description: "Campus Security" },
//   ];

//   const renderStatCards = (data, isAmenity = false) => {
//     return (
//       <div className="row" style={{ justifyContent: "center" }}>
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
//           >
//             <div
//               className="stat-card text-center p-3"
//               style={{
//                 backgroundColor: "#fff",
//                 border: "none",
//                 borderRadius: "8px",
//                 width: "100%",
//                 minHeight: "150px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                 transition: "transform 0.3s ease",
//                 margin: "0 5px",
//                 ':hover': {
//                   transform: "translateY(-5px)"
//                 }
//               }}
//             >
//               <h4
//                 style={{
//                   marginBottom: "0.5rem",
//                   color: "#00264A",
//                   fontSize: "32px",
//                   fontWeight: "700"
//                 }}
//               >
//                 {isNumber(item.title) ? (
//                   <>
//                     <CountUp
//                       end={parseInt(item.title.replace(/[^0-9]/g, ""))}
//                       duration={2}
//                     />
//                     {item.title.replace(/[0-9]/g, "")}
//                   </>
//                 ) : (
//                   item.title
//                 )}
//               </h4>
//               <p
//                 style={{
//                   fontSize: "14px",
//                   color: "#555",
//                   lineHeight: "1.4",
//                   marginBottom: "0",
//                   textAlign: "center"
//                 }}
//               >
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="pv-features-area" style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
//       <div className="container">
//         {/* Why Choose Us Section */}
//         <div className="section-title section-center splash-title">
//           <span
//             className="pre-title"
//             data-sal="slide-up"
//             data-sal-duration="1000"
//             style={{
//               display: "block",
//               fontSize: "28px",
//               fontWeight: "600",
//               color: "#00264A",
//               marginBottom: "40px",
//               textAlign: "center"
//             }}
//           >
//             Why Choose Us
//           </span>
//         </div>
//         {renderStatCards(whyChooseUsData)}

//         {/* Campus Amenities Section */}
//         <div className="section-title section-center splash-title mt-5">
//           <span
//             className="pre-title"
//             data-sal="slide-up"
//             data-sal-duration="1000"
//             style={{
//               display: "block",
//               fontSize: "28px",
//               fontWeight: "600",
//               color: "#00264A",
//               marginBottom: "40px",
//               textAlign: "center"
//             }}
//           >
//             Campus Amenities
//           </span>
//         </div>
//         {renderStatCards(campusAmenities)}
//       </div>
//     </div>
//   );
// };

// export default Features;

import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [countersVisible, setCountersVisible] = useState(false);

  const isNumber = (str) => /^\d+/.test(str);

  const whyChooseUsData = [
    { title: "120+", description: "Acre Green Campus" },
    { title: "3000+", description: "Students" },
    { title: "70+", description: "MOUs Signed for Corporate Collaborations" },
    { title: "300+", description: "Dynamic Mentors" },
    { title: "35+", description: "Funded Projects" },
    { title: "12+", description: "Monthly Calendar Events" },
    { title: "10+", description: "Smart Cards Received from Startup TN" },
    { title: "5+", description: "Research Centres" },
    { title: "300+", description: "Events in 2024" },
  ];

  const campusAmenities = [
    { title: "500", description: "Indoor Auditorium Seats" },
    { title: "3000", description: "Outdoor Auditorium Seats" },
    { title: "1", description: "Fully Equipped Modern Gym" },
    { title: "4", description: "Spacious Dining Areas" },
    { title: "165", description: "Advanced Tech Labs" },
    { title: "2", description: "State-of-the-Art Libraries" },
    { title: "Custom", description: "Student-Chosen Hostel Menu" },
    { title: "2", description: "In-House Doctors & Pharmacy" },
    { title: "24/7", description: "Ambulance Facility" },
    { title: "24/7", description: "Campus Security" },
  ];

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !countersVisible) {
      setCountersVisible(true);
    }
  };

  const renderNumber = (title) => {
    const number = parseInt(title.replace(/[^0-9]/g, ""));
    const suffix = title.replace(/[0-9]/g, "");

    return (
      <CountUp
        start={0}
        end={number}
        duration={2.5}
        separator=","
        decimals={0}
        delay={0}
        suffix={suffix}
      />
    );
  };

  const renderStatCards = (data, section) => {
    return (
      <div
        className="row"
        style={{ justifyContent: "center", position: "relative" }}
      >
        {/* <h3>15 years of extenc</h3> */}
        {data.map((item, index) => {
          const cardId = `${section}-${index}`;
          const isHovered = hoveredCard === cardId;

          return (
            <div
              key={cardId}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
              style={{
                transition: "all 0.3s ease",
                zIndex: isHovered ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredCard(cardId)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <VisibilitySensor
                onChange={(isVisible) => {
                  if (isVisible && !countersVisible) setCountersVisible(true);
                }}
                partialVisibility
                offset={{ top: 200 }}
              >
                <div
                  className="stat-card text-center p-3"
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    width: "100%",
                    minHeight: isHovered ? "180px" : "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: isHovered
                      ? "0 10px 25px rgba(0,0,0,0.15)"
                      : "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    margin: "0 5px",
                    position: "relative",
                    overflow: "hidden",
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <h4
                    style={{
                      marginBottom: "0.5rem",
                      color: "#00264A",
                      fontSize: isHovered ? "36px" : "32px",
                      fontWeight: "700",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isNumber(item.title) && !item.title.includes("/") ? (
                      countersVisible ? (
                        renderNumber(item.title)
                      ) : (
                        <>0{item.title.replace(/[0-9]/g, "")}</>
                      )
                    ) : (
                      item.title
                    )}
                  </h4>
                  <p
                    style={{
                      fontSize: isHovered ? "15px" : "14px",
                      color: "#555",
                      lineHeight: "1.4",
                      marginBottom: "0",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {item.description}
                  </p>
                  {isHovered && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #00264A, #0066CC)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  )}
                </div>
              </VisibilitySensor>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="pv-features-area"
      style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}
    >
      <div className="container">
        {/* Why Choose Us Section */}
        <div className="section-title section-center splash-title">
          <span
            className="pre-title"
            data-sal="slide-up"
            data-sal-duration="1000"
            style={{
              display: "block",
              fontSize: "28px",
              fontWeight: "600",
              color: "#00264A",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Why Choose Us
          </span>
        </div>
        {renderStatCards(whyChooseUsData, "whyChooseUs")}

        {/* Campus Amenities Section */}
        <div className="section-title section-center splash-title mt-5">
          <span
            className="pre-title"
            data-sal="slide-up"
            data-sal-duration="1000"
            style={{
              display: "block",
              fontSize: "28px",
              fontWeight: "600",
              color: "#00264A",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Campus Amenities
          </span>
        </div>
        {renderStatCards(campusAmenities, "amenities")}
      </div>
    </div>
  );
};

export default Features;
