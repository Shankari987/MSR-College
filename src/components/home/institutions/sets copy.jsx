

// import React from 'react';
// import Link from 'next/link';
// import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const institutions = [
//   {
//     title: "Engineering & Technology",
//     description: "Cutting-edge programs in AI, Computer Science, and Engineering",
//     link: "/Engineering_College",
//     imgSrc: "engglogo-01-4-1.svg",
//     programs: "5 UG Programs",
//     students: "500+ Students"
//   },
//   {
//     title: "Pharmacy",
//     description: "Comprehensive pharmaceutical education and research",
//     link: "https://shanmughapharmacy.edu.in/",
//     imgSrc: "pharmacylogo-01-3.svg",
//     programs: "6 Programs",
//     students: "500+ Students"
//   },
//   {
//     title: "Nursing",
//     description: "Excellence in nursing education with international recognition",
//     link: "https://shanmughanursing.edu.in/",
//     imgSrc: "Shanmugha-Nursing-For-Women.svg",
//     programs: "3 Programs",
//     students: "195+ Students" // Corrected from "195 Years"
//   },
//   {
//     title: "Allied Health Sciences",
//     description: "Specialized healthcare programs for modern medical needs",
//     link: "/DHI_College",
//     imgSrc: "ahslogo.svg",
//     programs: "4 Programs",
//     students: "425+ Students" // Corrected from "425 Years"
//   }
// ];

// const stats = [
//   { number: "4", label: "Institutions" },
//   { number: "3000+", label: "Students" },
//   { number: "300+", label: "Corporate Partners" },
//   { number: "120+", label: "Aero Campus" }
// ];

// const Sets = () => {
//   return (
//     <div className="institutions-area" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
//       <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
//         {/* Header Section */}
//         <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
//           <span className="pre-title" style={{ 
//             color: '#000059', 
//             fontWeight: '600', 
//             fontSize: '3.2rem', // Adjusted for better scaling
//             textTransform: 'uppercase',
//             letterSpacing: '1px'
//           }}>
//             Our Institutions
//           </span>

//           <p style={{ 
//             fontSize: '1.8rem', // Adjusted for better scaling
//             color: '#555', 
//             maxWidth: '800px', 
//             margin: '0 auto',
//             lineHeight: '1.6'
//           }}>
//           Leading the Future of Education with UGC Autonomous Institution, 300+ Corporate Collaborations, 100% Placement Assurance, and World-Class Infrastructure.
//           </p>
//         </div>

//         {/* Statistics Section */}
//         <Grid container spacing={3} style={{ marginBottom: '4rem' }}>
//           {stats.map((stat, index) => (
//             <Grid item xs={6} md={3} key={index}>
//               <div style={{ 
//                 textAlign: 'center', 
//                 padding: '2rem 1rem',
//                 backgroundColor: 'white',
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//               }}>
//                 <Typography variant="h3" style={{ 
//                   fontSize: '2.7rem', 
//                   fontWeight: 'bold', 
//                   color: '#000059',
//                   marginBottom: '0.5rem'
//                 }}>
//                   {stat.number}
//                 </Typography>
//                 <Typography variant="body1" style={{ 
//                   color: '#555', 
//                   fontWeight: '600',
//                   fontSize: '1.5rem'
//                 }}>
//                   {stat.label}
//                 </Typography>
//               </div>
//             </Grid>
//           ))}
//         </Grid>

//         {/* Institutions Grid */}
//         <Grid container direction="column" spacing={4}>
//           {institutions.map((institution, index) => (
//             <Grid item  key={index}>
//               <Card sx={{ 
//                 height: '100%', 
//                 borderRadius: '12px',
//                 boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
//                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                 '&:hover': {
//                   transform: 'translateY(-4px)',
//                   boxShadow: '0 12px 32px rgba(0,0,0,0.18)'
//                 }
//               }}>
//                 <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
//                   <Grid container spacing={3} alignItems="center">
//                     {/* Logo */}
//                     <Grid item xs={12} sm={3}>
//                       <Box sx={{ 
//                         display: 'flex', 
//                         justifyContent: 'center', 
//                         alignItems: 'center',
//                         backgroundColor: '#fff',
//                         borderRadius: '8px',
//                         padding: '1rem',
//                         height: '150px' // Corrected height
//                       }}>
//                         <img
//                           src={`/assets/images/logo/${institution.imgSrc}`}
//                           alt={institution.title}
//                           style={{ 
//                             maxWidth: '100%', 
//                             maxHeight: '120px',
//                             objectFit: 'contain'
//                           }}
//                         />
//                       </Box>
//                     </Grid>

//                     {/* Content */}
//                     <Grid item xs={12} sm={9}>
//                       <Typography variant="h5" component="h3" sx={{ 
//                         fontSize: '2.3rem',
//                         fontWeight: 'bold', 
//                         color: '#2c3e50',
//                         mb: 1
//                       }}>
//                         {institution.title}
//                       </Typography>
                      
//                       <Typography variant="body2" sx={{ 
//                         color: '#555', 
//                         mb: 2,
//                         lineHeight: 1.5,
//                         fontSize: '1.6rem',
//                       }}>
//                         {institution.description}
//                       </Typography>

//                       <Grid container spacing={2} sx={{ mb: 2 }}>
//                         <Grid item xs={6}>
//                           <Typography variant="body2" sx={{ 
//                             fontWeight: '500', 
//                             color: '#000059',
//                             fontSize: '1.5rem',
//                           }}>
//                             {institution.programs}
//                           </Typography>
//                         </Grid>
//                         <Grid item xs={6}>
//                           <Typography variant="body2" sx={{ 
//                             fontWeight: '500', 
//                             color: '#000059',
//                             fontSize: '1.5rem',
//                           }}>
//                             {institution.students}
//                           </Typography>
//                         </Grid>
//                       </Grid>

//                       <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
//                         <Link href={institution.link} passHref>
//                           <Button
//                             variant="outlined"
//                             endIcon={<ArrowForwardIcon />}
//                             sx={{
//                               fontSize: '1.5rem',
//                               fontWeight: '600',
//                               color: '#000059',
//                               borderColor: '#000059',
//                               '&:hover': {
//                                 backgroundColor: '#000059',
//                                 color: 'white',
//                                 borderColor: '#000059'
//                               }
//                             }}
//                           >
//                             Explore
//                           </Button>
//                         </Link>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>

//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        
//         .institutions-area {
//           font-family: 'Poppins', sans-serif;
//         }

//         @media (max-width: 768px) {
//           .section-header h2 {
//             font-size: 2rem;
//           }
          
//           .institutions-area {
//             padding: 2rem 0;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .section-header h2 {
//             font-size: 1.8rem;
//           }
          
//           .stats-grid {
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Sets;

import React from 'react';
import Link from 'next/link';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const institutions = [
  {
    title: "Engineering & Technology",
    description: "Cutting-edge programs in AI, Computer Science, and Engineering",
    link: "/Engineering_College",
    imgSrc: "engglogo-01-4-1.svg",
    programs: "5 UG Programs",
    students: "500+ Students"
  },
  {
    title: "Pharmacy",
    description: "Comprehensive pharmaceutical education and research",
    link: "https://shanmughapharmacy.edu.in/",
    imgSrc: "pharmacylogo-01-3.svg",
    programs: "6 Programs",
    students: "500+ Students"
  },
  {
    title: "Nursing",
    description: "Excellence in nursing education with international recognition",
    link: "https://shanmughanursing.edu.in/",
    imgSrc: "Shanmugha-Nursing-For-Women.svg",
    programs: "3 Programs",
    students: "195+ Students"
  },
  {
    title: "Allied Health Sciences",
    description: "Specialized healthcare programs for modern medical needs",
    link: "/DHI_College",
    imgSrc: "ahslogo.svg",
    programs: "4 Programs",
    students: "425+ Students"
  }
];

const stats = [
  { number: "4", label: "Institutions" },
  { number: "3000+", label: "Students" },
  { number: "300+", label: "Corporate Partners" },
  { number: "120+", label: "Aero Campus" }
];

const Sets = () => {
  return (
    <div className="institutions-area" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header Section */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="pre-title" style={{ 
            color: '#000059', 
            fontWeight: '600', 
            fontSize: '3rem', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Our Institutions
          </span>
          <p style={{
            fontSize: '2.2rem',
            color: '#555',
            maxWidth: '1100px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Leading the Future of Education with UGC Autonomous Institution, 300+ Corporate Collaborations, 100% Placement Assurance, and World-Class Infrastructure.
          </p>
        </div>

        {/* Quick Stats (tighter) */}
        <Grid container spacing={2} style={{ marginBottom: '2.85rem' }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div style={{
                textAlign: 'center',
                padding: '2.25rem',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.06)'
              }}>
                <Typography variant="h3" style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 'bold', 
                  color: '#000059',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number}
                </Typography>
                <Typography variant="body1" style={{
                  color: '#2c3e50',
                  fontWeight: 600,
                  fontSize: '1.95rem'
                }}>
                  {stat.label}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>

        {/* Institutions Grid — TWO across on md+; removes dead space */}
        <Grid container spacing={2} alignItems="stretch">
          {institutions.map((institution, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 28px rgba(0,0,0,0.14)' }
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
                  <Grid container spacing={2} alignItems="center">
                    {/* Logo */}
                    <Grid item xs={12} sm={4}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          bgcolor: '#fff',
                          borderRadius: '8px',
                          p: 0.2,
                          height: 110
                        }}
                      >
                        <img
                          src={`/assets/images/logo/${institution.imgSrc}`}
                          alt={institution.title}
                          style={{ maxWidth: '100%', maxHeight: '90px', objectFit: 'contain' }}
                        />
                      </Box>
                    </Grid>

                    {/* Content */}
                    <Grid item xs={12} sm={8}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#2c3e50', mb: .5, fontSize: '2.25rem' }}>
                        {institution.title}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#555', mb: 1.25, lineHeight: 1.45, fontSize: '2.25rem' }}>
                        {institution.description}
                      </Typography>

                      <Grid container spacing={1} sx={{ mb: 1.25 }}>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ 
                            fontWeight: '500', 
                            color: '#000059',
                            fontSize:15,
                          }}>
                            {institution.programs}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ 
                            fontWeight: '500', 
                            color: '#000059',
                            fontSize:15,
                          }}>
                            {institution.students}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                        <Link href={institution.link} passHref>
                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                fontSize:18,
                              color: '#000059',
                              borderColor: '#000059',
                              '&:hover': {
                                backgroundColor: '#000059',
                                color: 'white',
                                borderColor: '#000059'
                              }
                            }}
                          >
                            Explore
                          </Button>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .institutions-area { font-family: 'Poppins', sans-serif; }
        @media (max-width: 768px) {
          .institutions-area { padding: 1.75rem 0; }
          .section-header h2 { font-size: 1.7rem; }
        }
      `}</style>
    </div>
  );
};

export default Sets;
