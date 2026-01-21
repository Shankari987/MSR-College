// import Head from "next/head";

// const SEO = ({ pageTitle, font }) => (
//     <Head>
//         <title>
//             {pageTitle && `${pageTitle}`}
//         </title>
//         <meta httpEquiv="x-ua-compatible" content="ie=edge" />
//         <meta name="description" content="Top Engineering Colleges in Tamil Nadu, India" />
//         <meta name="robots" content="noindex, follow" />
//         <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         {font && <link href={font} rel="stylesheet" />}
//         <link rel="icon" href="/favicon.ico" />
//     </Head>
// )

// export default SEO;


import Head from "next/head";

const SEO = ({ pageTitle, font, description, image, url }) => (
  <Head>
    <title>{pageTitle ? `${pageTitle}` : "Sri Shanmugha College of Engineering and Technology"}</title>
    <link rel="canonical" href="https://shanmugha.edu.in/" />
    <meta charSet="UTF-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    
    <meta
      name="description"
      content={
        description ||
        "Sri Shanmugha College of Engineering and Technology – Top Engineering College in Tamil Nadu offering quality education."
      }
    />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    {/* Google Search Console Verification */}
  <meta name="google-site-verification" content="75e646fb910d3de9" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url || "https://shanmugha.edu.in/"} />
    <meta property="og:title" content={pageTitle || "Sri Shanmugha College of Engineering and Technology"} />
    <meta
      property="og:description"
      content={
        description ||
        "Sri Shanmugha College of Engineering and Technology offers courses in Biomedical, Mechanical, and more."
      }
    />
    <meta property="og:image" content={image || "https://shanmugha.edu.in/images/cover-image.jpg"} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url || "https://shanmugha.edu.in/"} />
    <meta name="twitter:title" content={pageTitle || "Sri Shanmugha College of Engineering and Technology"} />
    <meta
      name="twitter:description"
      content={
        description ||
        "Sri Shanmugha College of Engineering and Technology – Empowering future engineers in Tamil Nadu."
      }
    />
    <meta name="twitter:image" content={image || "https://shanmugha.edu.in/images/cover-image.jpg"} />

    {font && <link href={font} rel="stylesheet" />}
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
