import SEO from '../components/seo';
import { Wrapper } from '../layout';
import ContactUsMain from '../MSR_College/contact-us';

const ContactUs = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Contact Us'} />
            <ContactUsMain />
        </Wrapper>
    )
}

export default ContactUs;