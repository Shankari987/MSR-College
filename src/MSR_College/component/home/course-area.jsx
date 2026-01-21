import Link from "next/link";
import React from "react";
const CourseTypeOne = ({ data, classes }) => {

  return (
    <div
      className={`edu-course all-course ${classes ? classes : ""
        } hover-button-bg-white`}
    >
      <div className="inner" style={{ textAlign: 'center', display: 'inline-block', width: '100%' }}>
        <div className="thumbnail">
          <Link href={`MSR/course/${data.url}`} legacyBehavior>
            <a>
              <img
                src={`${data.img}`}
                alt="Course Meta"
              />
            </a>
          </Link>

        </div>
        <div className="content" style={{ height: '170px' }}>
          <span className="course-level">{data.level}</span>
          <h6 className="title">
            <a href={`MSR/course/${data.url}`}>{data.title}</a>
          </h6>
          <div className="course-price">Course Included  {data.no_of_seats} Internship </div>
        </div>
      </div>

    </div>
  );
};

export default CourseTypeOne;
