import FacilitiesMain from '../../MSR_College/component/facilities';
import SEO from '../../components/seo';
import { Wrapper } from '../../MSR_College/layout';


const Facilities = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Facilities'} />
            <FacilitiesMain />
        </Wrapper>
    )
}

export default Facilities;