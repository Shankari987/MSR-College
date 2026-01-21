  import MSR_College from "../MSR_College/component/home";
  import SEO from "../components/seo";

  export default function Home() {
    return (
      <>
        <SEO
          pageTitle="Shanmugha College of Medical Science and Research – Official Website"
          description="Welcome to Shanmugha College of Medical Science and Research – Discover our medical science courses, campus life, and admission details in Tamil Nadu."
          url="https://shanmugha.edu.in/Medical_Science&Research_College"
          image="https://shanmugha.edu.in/images/cover-image.jpg"
        />
        <MSR_College />
      </>
    );
  }
