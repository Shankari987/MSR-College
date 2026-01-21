import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/radiology';


const CourseDetails= () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Radiology and imaging technology'} />
            <CourseDetailsMain />
        </Wrapper>
    )
}

export default CourseDetails;