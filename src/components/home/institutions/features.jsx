
// // import React from "react";
// // import { Container, Grid, Card, Typography, Box } from "@mui/material";
// // import { keyframes } from "@mui/system";

// // const placementStats = [
// //   { number: "100%", title: "Placement Assurance", description: "Guaranteed job placement for all eligible students" },
// //   { number: "300+", title: "Companies on Campus", description: "Top MNCs and startups visit for recruitment" },
// //   { number: "1000+", title: "Paid Internships", description: "Best internship opportunities across industries" },
// //   { number: "₹1.5Cr+", title: "Total Stipend Earned", description: "Collective amount earned by students through internships" },
// // ];


// // const logoImageNames = [
// //   "logo1.png", "logo2.png", "logo3.png", "logo4.png", "logo5.png",
// //   "logo6.png", "logo7.png", "logo8.png", "logo9.png", "logo10.png",
// //   "logo11.png", "logo12.png", "logo13.png", "logo14.png",
// //   // Add more as needed to fill the scrolling area effectively
// // ];

// // // Construct full paths for the logos
// // const logos = logoImageNames.map(name => `/assets/images/logo/${name}`);

// // // Define the scroll animation using MUI's keyframes utility
// // const scrollAnimationForward = keyframes`
// //   0% { transform: translateX(0); }
// //   100% { transform: translateX(calc(-200px * ${logos.length})); } /* Adjust 200px based on logo width + margin */
// // `;

// // const scrollAnimationBackward = keyframes`
// //   0% { transform: translateX(calc(-200px * ${logos.length})); } /* Start from the end */
// //   100% { transform: translateX(0); } /* Go back to the start */
// // `;

// // const Features = () => {
// //   return (
// //     <Box sx={{ bgcolor: "#f8f9fa", width: '100%' }}>
// //       <Container
// //         maxWidth="xl"
// //         sx={{
// //           py: { xs: 5, md: 8 },
// //           display: "flex",
// //           flexDirection: "column",
// //           gap: { xs: 5, md: 6 },
// //         }}
// //       >
// //         {/* Header */}
// //         <Box sx={{ textAlign: "center" }}>
// //           <Typography
// //             component="h1"
// //             sx={{
// //               fontWeight: 700,
// //               color: "#2c3e50",
// //               lineHeight: 1.2,
// //               fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
// //               mb: 1.5,
// //             }}
// //           >
// //             Placements & Career Opportunities
// //           </Typography>
// //           <Typography
// //             sx={{
// //               color: "#5a6e80",
// //               maxWidth: 700,
// //               mx: "auto",
// //               lineHeight: 1.6,
// //               fontSize: { xs: "1rem", md: "2.1rem" },
// //             }}
// //           >
// //             Your gateway to successful careers with industry leaders
// //           </Typography>
// //         </Box>

// //         {/* Placement Statistics */}
// //         <Grid container spacing={{ xs: 2, md: 3 }}>
// //           {placementStats.map((stat, index) => (
// //             <Grid item xs={12} sm={6} md={3} key={index}>
// //               <Card sx={{
// //                 textAlign: 'center',
// //                 padding: { xs: '1.5rem 1rem', md: '2rem 1rem' },
// //                 backgroundColor: 'white',
// //                 borderRadius: '12px',
// //                 boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
// //                 border: '1px solid rgba(0, 0, 0, 0.08)',
// //                 height: '100%'
// //               }}>
// //                 <Typography variant="h3" sx={{
// //                   fontSize: { xs: '3.5rem', md: '5rem' },
// //                   fontWeight: '700',
// //                   color: '#002b6b',
// //                   mb: 1
// //                 }}>
// //                   {stat.number}
// //                 </Typography>
// //                 <Typography variant="h6" sx={{
// //                   color: '#2c3e50',
// //                   fontWeight: '600',
// //                   mb: 0.5,
// //                   fontSize: { xs: '1rem', md: '2.7rem' },
// //                 }}>
// //                   {stat.title}
// //                 </Typography>
// //                 <Typography variant="body2" sx={{
// //                   color: '#5a6e80',
// //                   fontSize: { xs: '0.8rem', md: '1.3rem' },
// //                   lineHeight: 1.5
// //                 }}>
// //                   {stat.description}
// //                 </Typography>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>

// //         {/* Auto-scrolling Logo Section - Two Rows */}
// //         <Box
// //           sx={{
// //             width: '100%',
// //             overflow: 'hidden',
// //             position: 'relative',
// //             py: 4,
// //             display: 'flex', // Use flexbox for vertical stacking of rows
// //             flexDirection: 'column', // Stack rows vertically
// //             gap: 2, // Gap between the two rows
// //             // Mask for the entire scrolling section (both rows)
// //             WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
// //             maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
// //           }}
// //         >
// //           {/* First Row of Logos */}
// //           <Box
// //             sx={{
// //               display: 'flex',
// //               width: `calc(200px * ${logos.length * 2})`,
// //               animation: `${scrollAnimationForward} 45s linear infinite`, // Forward scroll
// //               alignItems: 'center',
// //               height: '100px', // Fixed height for the logo strip
// //             }}
// //           >
// //             {[...logos, ...logos].map((logoPath, index) => (
// //               <Box
// //                 key={`row1-${index}`} // Unique key for each logo in row 1
// //                 sx={{
// //                   height: '90px',
// //                   width: '180px',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   margin: '0 10px',
// //                   flexShrink: 0,
// //                 }}
// //               >
// //                 <img
// //                   src={logoPath}
// //                   alt={`Partner Logo R1 ${index}`}
// //                   style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
// //                 />
// //               </Box>
// //             ))}
// //           </Box>

// //           {/* Second Row of Logos */}
// //           <Box
// //             sx={{
// //               display: 'flex',
// //               width: `calc(200px * ${logos.length * 2})`,
// //               animation: `${scrollAnimationBackward} 45s linear infinite`, // Backward scroll
// //               alignItems: 'center',
// //               height: '100px',
// //             }}
// //           >
// //             {[...logos, ...logos].map((logoPath, index) => (
// //               <Box
// //                 key={`row2-${index}`} // Unique key for each logo in row 2
// //                 sx={{
// //                   height: '90px',
// //                   width: '180px',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   margin: '0 10px',
// //                   flexShrink: 0,
// //                 }}
// //               >
// //                 <img
// //                   src={logoPath}
// //                   alt={`Partner Logo R2 ${index}`}
// //                   style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
// //                 />
// //               </Box>
// //             ))}
// //           </Box>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default Features;





// import React from "react";
// import { Container, Grid, Card, Typography, Box } from "@mui/material";
// import { keyframes } from "@mui/system";

// const placementStats = [
//   { number: "100%", title: "Placement Assurance", description: "Guaranteed job placement for all eligible students" },
//   { number: "300+", title: "Companies on Campus", description: "Top MNCs and startups visit for recruitment" },
//   { number: "1000+", title: "Paid Internships", description: "Best internship opportunities across industries" },
//   { number: "₹1.5Cr+", title: "Total Stipend Earned", description: "Collective amount earned by students through internships" },
// ];


// const logoImageNames = [
//   "shanmugha-Top-Recruiters-01.jpg",
//   "shanmugha-Top-Recruiters-02.jpg",
//   "shanmugha-Top-Recruiters-03.jpg",
//   "shanmugha-Top-Recruiters-04.jpg",
//   "shanmugha-Top-Recruiters-05.jpg",
//   "shanmugha-Top-Recruiters-06.jpg",
//   "shanmugha-Top-Recruiters-07.jpg",
//   "shanmugha-Top-Recruiters-08.jpg",
//   "shanmugha-Top-Recruiters-09.jpg",
//   "shanmugha-Top-Recruiters-10.jpg",

//   "shanmugha-Top-Recruiters-11.jpg",
//   "shanmugha-Top-Recruiters-12.jpg",
//   "shanmugha-Top-Recruiters-13.jpg",
//   "shanmugha-Top-Recruiters-14.jpg",
//   "shanmugha-Top-Recruiters-15.jpg",
//   "shanmugha-Top-Recruiters-16.jpg",
//   "shanmugha-Top-Recruiters-17.jpg",
//   "shanmugha-Top-Recruiters-18.jpg",
//   "shanmugha-Top-Recruiters-19.jpg",
//   "shanmugha-Top-Recruiters-20.jpg",

//   "shanmugha-Top-Recruiters-21.jpg",
//   "shanmugha-Top-Recruiters-22.jpg",
//   "shanmugha-Top-Recruiters-23.jpg",
//   "shanmugha-Top-Recruiters-24.jpg",
//   "shanmugha-Top-Recruiters-25.jpg",
//   "shanmugha-Top-Recruiters-26.jpg",
//   "shanmugha-Top-Recruiters-27.jpg",
//   "shanmugha-Top-Recruiters-28.jpg",
//   "shanmugha-Top-Recruiters-29.jpg",
//   "shanmugha-Top-Recruiters-30.jpg",

//   "shanmugha-Top-Recruiters-31.jpg",
//   "shanmugha-Top-Recruiters-32.jpg",
//   "shanmugha-Top-Recruiters-33.jpg",
//   "shanmugha-Top-Recruiters-34.jpg",
//   "shanmugha-Top-Recruiters-35.jpg",
//   "shanmugha-Top-Recruiters-36.jpg",
//   "shanmugha-Top-Recruiters-37.jpg",
//   "shanmugha-Top-Recruiters-38.jpg",
//   "shanmugha-Top-Recruiters-39.jpg",
//   "shanmugha-Top-Recruiters-40.jpg",

//   "shanmugha-Top-Recruiters-41.jpg",
//   "shanmugha-Top-Recruiters-42.jpg",
//   "shanmugha-Top-Recruiters-43.jpg",

//   "shanmugha-Top-Recruiters-45.jpg",
//   "shanmugha-Top-Recruiters-46.jpg",
//   "shanmugha-Top-Recruiters-47.jpg",

//   "shanmugha-Top-Recruiters-49.jpg",
//   "shanmugha-Top-Recruiters-50.jpg",


//   "shanmugha-Top-Recruiters-52.jpg",
//   "shanmugha-Top-Recruiters-53.jpg",

//   "shanmugha-Top-Recruiters-55.jpg",
//   "shanmugha-Top-Recruiters-56.jpg",

//   "shanmugha-Top-Recruiters-58.jpg",
//   "shanmugha-Top-Recruiters-59.jpg",


//   "shanmugha-Top-Recruiters-61.jpg",
//   "shanmugha-Top-Recruiters-62.jpg",

//   "shanmugha-Top-Recruiters-64.jpg",
//   "shanmugha-Top-Recruiters-65.jpg",
//   "shanmugha-Top-Recruiters-66.jpg",
//   "shanmugha-Top-Recruiters-67.jpg",

//   "shanmugha-Top-Recruiters-69.jpg",
//   "shanmugha-Top-Recruiters-70.jpg",

//   "shanmugha-Top-Recruiters-71.jpg",
//   "shanmugha-Top-Recruiters-72.jpg",
//   "shanmugha-Top-Recruiters-73.jpg",
//   "shanmugha-Top-Recruiters-74.jpg",
//   "shanmugha-Top-Recruiters-75.jpg",
//   "shanmugha-Top-Recruiters-76.jpg",
//   "shanmugha-Top-Recruiters-77.jpg",

//   "shanmugha-Top-Recruiters-79.jpg",
//   "shanmugha-Top-Recruiters-80.jpg",

//   "shanmugha-Top-Recruiters-81.jpg",
//   "shanmugha-Top-Recruiters-82.jpg",

//   "shanmugha-Top-Recruiters-84.jpg",

//   // Add more as needed to fill the scrolling area effectively
// ];

// // Construct full paths for the logos
// const logos = logoImageNames.map(name => `/assets/images/recuirters/${name}`);

// // Define the scroll animation using MUI's keyframes utility
// const scrollAnimationForward = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(calc(-200px * ${logos.length})); } /* Adjust 200px based on logo width + margin */
// `;

// const scrollAnimationBackward = keyframes`
//   0% { transform: translateX(calc(-200px * ${logos.length})); } /* Start from the end */
//   100% { transform: translateX(0); } /* Go back to the start */
// `;

// const Features = () => {
//   return (
//     <Box sx={{ bgcolor: "#f8f9fa", width: '100%' }}>
//       <Container
//         maxWidth="xl"
//         sx={{
//           py: { xs: 5, md: 6 },
//           display: "flex",
//           flexDirection: "column",
//           gap: { xs: 5, md: 6 },
//         }}
//       >
//         {/* Header */}
//         <Box sx={{ textAlign: "center" }}>
//           <Typography
//             component="h1"
//             sx={{
//               fontWeight: 700,
//               color: "#2c3e50",
//               lineHeight: 1.2,
//               fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
//               mb: 1.5,
//             }}
//           >
//             Placements & Career Opportunities
//           </Typography>
//           <Typography
//             sx={{
//               color: "#5a6e80",
//               maxWidth: 700,
//               mx: "auto",
//               lineHeight: 1.6,
//               fontSize: { xs: "1rem", md: "2.1rem" },
//             }}
//           >
//             Your gateway to successful careers with industry leaders
//           </Typography>
//         </Box>

//         {/* Placement Statistics */}
//         <Grid container spacing={{ xs: 2, md: 3 }}>
//           {placementStats.map((stat, index) => (
//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={{
//                 textAlign: 'center',
//                 padding: { xs: '1.5rem 1rem', md: '2rem 1rem' },
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
//                 border: '1px solid rgba(0, 0, 0, 0.08)',
//                 height: '100%'
//               }}>
//                 <Typography variant="h3" sx={{
//                   fontSize: { xs: '3.5rem', md: '5rem' },
//                   fontWeight: '700',
//                   color: '#002b6b',
//                   mb: 1
//                 }}>
//                   {stat.number}
//                 </Typography>
//                 <Typography variant="h6" sx={{
//                   color: '#2c3e50',
//                   fontWeight: '600',
//                   mb: 0.5,
//                   fontSize: { xs: '1rem', md: '2.7rem' },
//                 }}>
//                   {stat.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{
//                   color: '#5a6e80',
//                   fontSize: { xs: '0.8rem', md: '1.3rem' },
//                   lineHeight: 1.5
//                 }}>
//                   {stat.description}
//                 </Typography>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Auto-scrolling Logo Section - Two Rows */}
//         <Box
//           sx={{
//             width: '100%',
//             overflow: 'hidden',
//             position: 'relative',
//             py: 4,
//             display: 'flex', // Use flexbox for vertical stacking of rows
//             flexDirection: 'column', // Stack rows vertically
//             gap: 2, // Gap between the two rows
//             // Mask for the entire scrolling section (both rows)
//             WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
//             maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
//           }}
//         >
//           {/* First Row of Logos */}
//           <Box
//             sx={{
//               display: 'flex',
//               width: `calc(200px * ${logos.length * 2})`,
//               animation: `${scrollAnimationForward} 90s linear infinite`, // Forward scroll
//               alignItems: 'center',
//               height: '100px', // Fixed height for the logo strip
//             }}
//           >
//             {[...logos, ...logos].map((logoPath, index) => (
//               <Box
//                 key={`row1-${index}`} // Unique key for each logo in row 1
//                 sx={{
//                   height: '90px',
//                   width: '180px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 10px',
//                   flexShrink: 0,
//                 }}
//               >
//                 <img
//                   src={logoPath}
//                   alt={`Partner Logo R1 ${index}`}
//                   style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
//                 />
//               </Box>
//             ))}
//           </Box>

//           {/* Second Row of Logos */}
//           <Box
//             sx={{
//               display: 'flex',
//               width: `calc(200px * ${logos.length * 2})`,
//               animation: `${scrollAnimationBackward} 90s linear infinite`, // Backward scroll
//               alignItems: 'center',
//               height: '100px',
//             }}
//           >
//             {[...logos, ...logos].map((logoPath, index) => (
//               <Box
//                 key={`row2-${index}`} // Unique key for each logo in row 2
//                 sx={{
//                   height: '90px',
//                   width: '180px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 10px',
//                   flexShrink: 0,
//                 }}
//               >
//                 <img
//                   src={logoPath}
//                   alt={`Partner Logo R2 ${index}`}
//                   style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
//                 />
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Features;



import React from "react";

import { Container, Grid, Card, Typography, Box } from "@mui/material";

import { keyframes } from "@mui/system";
 
// Placement statistics

const placementStats = [

  { number: "100%", title: "Placement Assurance", description: "Guaranteed job placement for all eligible students" },

  { number: "300+", title: "Companies on Campus", description: "Top MNCs and startups visit for recruitment" },

  { number: "1000+", title: "Paid Internships", description: "Best internship opportunities across industries" },

  { number: "₹1.5Cr+", title: "Total Stipend Earned", description: "Collective amount earned by students through internships" },

];
 
// Logo image names (from /assets/images/recruiters)

const logoImageNames = [
  "shanmugha-Top-Recruiters-01.jpg",
  "shanmugha-Top-Recruiters-02.jpg",
  "shanmugha-Top-Recruiters-03.jpg",
  "shanmugha-Top-Recruiters-04.jpg",
  "shanmugha-Top-Recruiters-05.jpg",
  "shanmugha-Top-Recruiters-06.jpg",
  "shanmugha-Top-Recruiters-07.jpg",
  "shanmugha-Top-Recruiters-08.jpg",
  "shanmugha-Top-Recruiters-09.jpg",
  "shanmugha-Top-Recruiters-10.jpg",

  "shanmugha-Top-Recruiters-11.jpg",
  "shanmugha-Top-Recruiters-12.jpg",
  "shanmugha-Top-Recruiters-13.jpg",
  "shanmugha-Top-Recruiters-14.jpg",
  "shanmugha-Top-Recruiters-15.jpg",
  "shanmugha-Top-Recruiters-16.jpg",
  "shanmugha-Top-Recruiters-17.jpg",
  "shanmugha-Top-Recruiters-18.jpg",
  "shanmugha-Top-Recruiters-19.jpg",
  "shanmugha-Top-Recruiters-20.jpg",

  "shanmugha-Top-Recruiters-21.jpg",
  "shanmugha-Top-Recruiters-22.jpg",
  "shanmugha-Top-Recruiters-23.jpg",
  "shanmugha-Top-Recruiters-24.jpg",
  "shanmugha-Top-Recruiters-25.jpg",
  "shanmugha-Top-Recruiters-26.jpg",
  "shanmugha-Top-Recruiters-27.jpg",
  "shanmugha-Top-Recruiters-28.jpg",
  "shanmugha-Top-Recruiters-29.jpg",
  "shanmugha-Top-Recruiters-30.jpg",

  "shanmugha-Top-Recruiters-31.jpg",
  "shanmugha-Top-Recruiters-32.jpg",
  "shanmugha-Top-Recruiters-33.jpg",
  "shanmugha-Top-Recruiters-34.jpg",
  "shanmugha-Top-Recruiters-35.jpg",
  "shanmugha-Top-Recruiters-36.jpg",
  "shanmugha-Top-Recruiters-37.jpg",
  "shanmugha-Top-Recruiters-38.jpg",
  "shanmugha-Top-Recruiters-39.jpg",
  "shanmugha-Top-Recruiters-40.jpg",

  "shanmugha-Top-Recruiters-41.jpg",
  "shanmugha-Top-Recruiters-42.jpg",
  "shanmugha-Top-Recruiters-43.jpg",

  "shanmugha-Top-Recruiters-45.jpg",
  "shanmugha-Top-Recruiters-46.jpg",
  "shanmugha-Top-Recruiters-47.jpg",

  "shanmugha-Top-Recruiters-49.jpg",
  "shanmugha-Top-Recruiters-50.jpg",


  "shanmugha-Top-Recruiters-52.jpg",
  "shanmugha-Top-Recruiters-53.jpg",

  "shanmugha-Top-Recruiters-55.jpg",
  "shanmugha-Top-Recruiters-56.jpg",

  "shanmugha-Top-Recruiters-58.jpg",
  "shanmugha-Top-Recruiters-59.jpg",


  "shanmugha-Top-Recruiters-61.jpg",
  "shanmugha-Top-Recruiters-62.jpg",

  "shanmugha-Top-Recruiters-64.jpg",
  "shanmugha-Top-Recruiters-65.jpg",
  "shanmugha-Top-Recruiters-66.jpg",
  "shanmugha-Top-Recruiters-67.jpg",

  "shanmugha-Top-Recruiters-69.jpg",
  "shanmugha-Top-Recruiters-70.jpg",

  "shanmugha-Top-Recruiters-71.jpg",
  "shanmugha-Top-Recruiters-72.jpg",
  "shanmugha-Top-Recruiters-73.jpg",
  "shanmugha-Top-Recruiters-74.jpg",
  "shanmugha-Top-Recruiters-75.jpg",
  "shanmugha-Top-Recruiters-76.jpg",
  "shanmugha-Top-Recruiters-77.jpg",

  "shanmugha-Top-Recruiters-79.jpg",
  "shanmugha-Top-Recruiters-80.jpg",

  "shanmugha-Top-Recruiters-81.jpg",
  "shanmugha-Top-Recruiters-82.jpg",

  "shanmugha-Top-Recruiters-84.jpg",

  // Add more as needed to fill the scrolling area effectively
];
 
// Full image URLs

// Construct full paths for the logos
const logos = logoImageNames.map(name => `/assets/images/recuirters/${name}`);

const scrollAnimationForward = keyframes`

  0% { transform: translateX(0); }

  100% { transform: translateX(calc(-200px * ${logos.length})); }

`;
 
const scrollAnimationBackward = keyframes`

  0% { transform: translateX(calc(-200px * ${logos.length})); }

  100% { transform: translateX(0); }

`;
 
const Features = () => {

  return (
<Box sx={{ bgcolor: "#f8f9fa", width: '100%' }}>
<Container

        maxWidth="xl"

        sx={{

          py: { xs: 5, md: 6 },

          display: "flex",

          flexDirection: "column",

          gap: { xs: 5, md: 6 },

        }}
>

        {/* Header */}
<Box sx={{ textAlign: "center" }}>
<Typography

            component="h1"

            sx={{

              fontWeight: 700,

              color: "#2c3e50",

              lineHeight: 1.2,

              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },

              mb: 1.5,

            }}
>

            Placements & Career Opportunities
</Typography>
<Typography

            sx={{

              color: "#5a6e80",

              maxWidth: 700,

              mx: "auto",

              lineHeight: 1.6,

              fontSize: { xs: "1.5rem", md: "2.1rem" },

            }}
>

            Your gateway to successful careers with industry leaders
</Typography>
</Box>
 
        {/* Placement Stats */}
<Grid container spacing={{ xs: 2, md: 3 }}>

          {placementStats.map((stat, index) => (
<Grid item xs={12} sm={6} md={3} key={index}>
<Card

                sx={{

                  textAlign: 'center',

                  p: { xs: '1.5rem 1rem', md: '2rem 1rem' },

                  backgroundColor: 'white',

                  borderRadius: '12px',

                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',

                  border: '1px solid rgba(0, 0, 0, 0.08)',

                  height: '100%',

                }}
>
<Typography variant="h3" sx={{

                  fontSize: { xs: '3.5rem', md: '5rem' },

                  fontWeight: '700',

                  color: '#002b6b',

                  mb: 1,

                }}>

                  {stat.number}
</Typography>
<Typography variant="h6" sx={{

                  color: '#2c3e50',

                  fontWeight: '600',

                  mb: 0.5,

                  fontSize: { xs: '1.5rem', md: '2.1rem' },

                }}>

                  {stat.title}
</Typography>
<Typography variant="body2" sx={{

                  color: '#5a6e80',

                  fontSize: { xs: '1.4rem', md: '1.1rem' },

                  lineHeight: 1.5,

                }}>

                  {stat.description}
</Typography>
</Card>
</Grid>

          ))}
</Grid>
 
        {/* Scrolling Logos */}
<Box

          sx={{

            width: '100%',

            overflow: 'hidden',

            py: 4,

            display: 'flex',

            flexDirection: 'column',

            gap: 2,

            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',

            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',

          }}
>

          {/* Row 1 */}
<Box

            sx={{

              display: 'flex',

              width: `calc(200px * ${logos.length * 2})`,
              animation: `${scrollAnimationForward} 90s linear infinite`, // Forward scroll
              alignItems: 'center',

              height: '100px',

            }}
>

            {[...logos, ...logos].map((logo, idx) => (
<Box

                key={`row1-${idx}`}

                sx={{

                  height: '90px',

                  width: '180px',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  margin: '0 10px',

                  flexShrink: 0,

                }}
>
<img

                  src={logo}

                  alt={`Logo-${idx}`}

                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}

                />
</Box>

            ))}
</Box>
 
          {/* Row 2 */}
<Box

            sx={{

              display: 'flex',

              width: `calc(200px * ${logos.length * 2})`,
              animation: `${scrollAnimationBackward} 90s linear infinite`, // Backward scroll
              alignItems: 'center',

              height: '100px',

            }}
>

            {[...logos, ...logos].map((logo, idx) => (
<Box

                key={`row2-${idx}`}

                sx={{

                  height: '90px',

                  width: '180px',

                  display: 'flex',

                  alignItems: 'center',

                  justifyContent: 'center',

                  margin: '0 10px',

                  flexShrink: 0,

                }}
>
<img

                  src={logo}

                  alt={`Logo-${idx}`}

                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}

                />
</Box>

            ))}
</Box>
</Box>
</Container>
</Box>

  );

};
 
export default Features;

 