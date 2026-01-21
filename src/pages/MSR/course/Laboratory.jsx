import SEO from '../../../components/seo';
import { Wrapper } from '../../../layout';
import CourseDetailsMain from '../../../MSR_College/component/course/laboratory';


const CourseDetails= () => {
    return (
        <Wrapper>
            <SEO pageTitle={' Bsc.Medical Laboratory Technology'} />
            <CourseDetailsMain />
        </Wrapper>
    )
}

export default CourseDetails;