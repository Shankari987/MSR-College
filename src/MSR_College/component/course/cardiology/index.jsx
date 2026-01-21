import React from 'react';
import { Footer, Header } from '../../../layout';
import CourseDetails from './course-details';

const Course = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <CourseDetails />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default Course;