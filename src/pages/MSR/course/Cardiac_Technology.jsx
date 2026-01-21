import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/cardiology';


const CourseDetails= () => {
    return (
        <Wrapper>
            <SEO pageTitle={'B.Sc Cardiac Technology'} />
            <CourseDetailsMain />
        </Wrapper>
    )
}

export default CourseDetails;