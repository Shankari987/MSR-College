import MSR_College from "../MSR_College/component/home";
import SEO from "../components/seo";
import { Wrapper } from "../MSR_College/layout";

export default function MSR_CollegePage() {

  return (
    <Wrapper>
      <SEO pageTitle={"SCET - Medical Science & Research Home"} />
      <MSR_College />
    </Wrapper>
  );
}
