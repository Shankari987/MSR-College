import React from 'react';
import { useState } from 'react';
import { course_home } from '../../../data';
import SortingArea from './sorting-area';
import CourseTypeOne from './course-type-one';

const CourseArea = () => {
    const coursePerView = 8;
    const [next, setNext] = useState(coursePerView);
    const [courses,setCourses] = useState(course_home);
    return (
        <div className="edu-course-area course-area-1 gap-tb-text">
            <div className="container">
                <SortingArea course_items={course_home} num={courses.length} setCourses={setCourses} courses={courses} />

                <div className="row g-5">
                    {courses.map((course) => {
                        return (
                            <div key={course.id} className="col-md-6 col-xl-3">
                                <CourseTypeOne data={course} classes="course-box-shadow" />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default CourseArea;