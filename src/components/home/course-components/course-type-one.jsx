import Link from "next/link";
import React from "react";
const CourseTypeOne = ({ data, classes }) => {

  return (
    <div
      className={`edu-course all-course ${
        classes ? classes : ""
      } hover-button-bg-white`}
    >
      <div className="inner">
        <div className="thumbnail">
          <Link href={`Engineering/Department/${data.url}`}>
            <a>
              <img
                src={`${data.img}`}
                alt="Course Meta"
              />
            </a>
          </Link>
          <div className="time-top">
            <span className="duration">
              <i className="icon-61"></i>
              {data.duration}
            </span>
          </div>
        </div>
        <div className="content" style={{height: '170px'}}>
          <span className="course-level">{data.level}</span>
          <h6 className="title">
            <a href={`/Department/${data.url}`}>{data.title}</a>
          </h6>
          <div className="course-price">Available Seats: {data.no_of_seats}</div>
        </div>
      </div>

    </div>
  );
};

export default CourseTypeOne;
