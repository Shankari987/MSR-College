import Link from 'next/link';
import CourseTypeOne from './course-area';

const course_home = [
    {
      id: 1,
      img: "/assets/images/msr/course/cardiology.webp",
      level: "COURSE DURATION : 4 YEARS",
      title: " B.Sc Cardiac Technology",
      no_of_seats: "1 Year ",
      url:'Cardiac_Technology'
    },
    {
      id: 2,
      img: "/assets/images/msr/course/operation.jpg",
      level: "COURSE DURATION : 4 YEARS",
      title: "B.Sc Operation theatre and Anesthesia technology",
      no_of_seats: "1 Year ",
      url:'OTAT'
   
    },
    {
      id: 3,
      img: "/assets/images/msr/course/radiology.jpg",
      level: "COURSE DURATION : 4 YEARS",
      title: "B.sc Radiography and imaging Technology",
      no_of_seats: "1 Year ",
      url:'Radiology_Technology'
    },
    {
      id: 4,
      img: "/assets/images/msr/course/laboratory.jpg",
      level: "COURSE DURATION : 4 YEARS",
      title: "B.Sc Medical Laboratory technology",
      no_of_seats: "1 Year ",
      url:'Laboratory'
    },
    {
      id: 5,
      img: "/assets/images/msr/course/pulmonary.jpg",
      level: "COURSE DURATION : 4 YEARS",
      title: "B.Sc Cardio Pulmonary Perfusion Care Technology",
      no_of_seats: "1 Year ",
      url:'Cardio_care'
    },
    {
      id: 6,
      img: "/assets/images/msr/course/optometry.jpg",
      level: "COURSE DURATION : 4 YEARS",
      title: "B.Optometry ",
      no_of_seats: "1 Year ",
      url:'Optometry'
    },
  ];

const Courses = () => {
  return (
        <div className="edu-course-area course-area-2 gap-tb-text" >
            <div className="container" >
                <div className="section-title section-center" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Educational Programs</span>
                    <h2 className="title">Our Courses</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    {course_home.slice(0,6).map((course) => {
                        return (
                            <div className="col-md-6 col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" key={course.id}>
                                <CourseTypeOne data={course} image_location_path='02' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Courses;