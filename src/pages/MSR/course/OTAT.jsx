import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/OtAt';


const CourseDetails= () => {
    return (
        <Wrapper>
            <SEO pageTitle={' Operation Theatre Technology'} />
            <CourseDetailsMain />
        </Wrapper>
    )
}

export default CourseDetails;