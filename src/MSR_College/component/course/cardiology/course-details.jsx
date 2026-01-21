import React from 'react';

const Data = [
        {
            "Heading": "Laboratories:",
            "Desc": [
                "Anatomy physiology lab",
                "Biochemistry lab",
                "Microbiology lab"
            ]
        },
        {
            "Heading": "Hospital tie ups:",
            "Desc": [
                "Dasan hospital",
                "Velavan hospital",
                "Mettur Government hospital",
                "Attur Government hospital",
                "MMCH",
                "Sai Deekshi hospital"
            ]
        },
        {
            "Heading": "Faculties:",
            "Desc": [
                "Saiful Islam Bsc. CT",
                "Nesapriyan Bsc.CT"
            ]
        }    
  ];
  

const CourseDetails = () => {
    return (
        <div className="blog-details-area section-gap-equal">
            <div className="container">
                <div className="row row--30">
                    <div className="col-lg-12">
                        <div className="blog-details-content">
                            <div className="entry-content">
                                <span className="category">Course</span>
                                <h3 className="title"> Bsc. Cardiac Technology</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/cardiology.webp" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">

                                            <p>B.Sc. Cardiac Technology or Bachelor of Science in Cardiac Technology is an undergraduate course. Cardiac technology is an area of specialization for allied health professionals. Cardiovascular technologists and technicians assist physicians in the diagnosis and treatment of cardiac (heart) and peripheral vascular (blood vessel) conditions. Cardiac technologists prepare patients for open-heart surgery and the implantation of pacemakers. Technologists monitor patients during these procedures. The course is three years + 1 year internship and career orienting in nature that opens many jobs for them after its successful completion</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

 

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40 ,listStyle:'none'}}>
                                <li>I Year – Basic Anatomy, Physiology, Biochemistry, Pathology, Microbiology,  Pharmacology, Medical Electronics, Biophysics, ECG, English, Computer Science</li>
                                <li>II Year – Clinical Features And Treatment Related To CT, Advanced To Electrocardiography, TMT, Echocardiography</li>
                                <li>III Year – Cardiac Catheterization Laboratory Basics, Cardiac Catheterization Laboratory Advanced</li>
                            </ul>

                        <div className="course-overview">
                            {Data.map((subject, index) => (
                                    <div key={index}>
                                        <h4  className="title">{subject.Heading}</h4>
                                        <ul className="mb--60" style={{listStyle:"none"}}>
                                            {subject.Desc.map((subItem, subIndex) => (
                                                <li key={subIndex}>{subItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                         </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default CourseDetails;