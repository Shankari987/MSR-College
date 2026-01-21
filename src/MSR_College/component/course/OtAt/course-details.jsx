import React from 'react';

const Data = [
    {
        "Heading": "Laboratories:",
        "Desc": [
            "Anatomy physiology lab"
        ]
    },
    {
        "Heading": "Hospital tie ups:",
        "Desc": [
            "L.K.M hospital",
            "Velavan hospital",
            "Mettur Government hospital",
            "Attur Government hospital",
            "MMCH",
            "Annai Hospital",
            "Dr. Kumarasamy Hospital",
            "Kavery Hospital"
        ]
    },
    {
        "Heading": "Faculties:",
        "Desc": [
            "Ms.Sowmiya B. Sc OTAT",
            "Ms NithyaSree B.Sc OTAT"
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
                                <h3 className="title"> Bsc.Operation theatre and anesthesia technology</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/operation.jpg" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>Operation Theatre Technology is a detailed technical occupation in the field of health science. Also recognized by the names Operating Theatre Technicians (OTT), Surgical Scrubs and Operating Room Assistants, these nominal medical professionals are an important part of the operation unit team who work alongside with the surgeon, Anaesthetist  and nurse in order to provide quality patient care throughout the surgery.</p>
                                            <p>A wider scope of Operation Theatre Technology is quite prominent in transplant teams, orthopedic clinics, gynecology sections, cancer units, surgery, special care baby units. They are also hired for research, education and training. Some of the professionals are privately hired by doctors, surgeons, physicians or dentists who perform surgery of the patients.</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

 

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40,listStyle:'none' }}>
                                <li>I Year – Basic Anatomy, Physiology, Biochemistry, Pathology , English , Computer Science</li>
                                <li>II Year – Pharmacology, Microbiology, Medicine & Medical Ethics, Principles Of Anaesthesia –I</li>
                                <li>III Year – Sterilization Procedures, Principles Of Anaesthesia –II</li>
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