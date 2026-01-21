import React from 'react';

const Data = [
    {
        "Heading": "Laboratories:",
        "Desc": [
            "Anatomy physiology lab",
            "Biochemistry lab",
            "Microbiology lab",
            "Pathology lab"
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
            "Deepa Micro Lab",
            "Ishwaryam Hospital",
            "Visahan Hospital"
        ]
    },
    {
        "Heading": "Faculties:",
        "Desc": [
            "Ms.Subashini. Bsc.MLT"
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
                                <h3 className="title"> Bsc.Medical Laboratory Technology</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/laboratory.jpg" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">

                                            <p>    Bachelor of Science in Medical Laboratory Technology or BSc MLT is an undergraduate course of 3-year, which is divided into six years (two semesters per year). In this course professionals are taught about various aspects of health care. The students perform various diagnostic analysis on body fluids, which include hematology, bacteriology, immunologic, chemical and microscopic during the course. The subjects taught in the program are Clinical Endocrinology & Toxicology Lab, Diagnostic Molecular Biology Lab, and Diagnostic Cytology etc.</p>
                                        </div>

                                    </div>
                                </div>


                            </div>

 

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40 }}>
                                <li>I Year – Sociology, Psychology, Physiology, Basic Chemistry And Biochemistry, General Methodology, English, Physics</li>
                                <li>II Year – Histopathology And Cytology Techniques, Biochemistry, Clinical Pathology & Basic Haematology, Clinical Pathology, Microbiology I And Parasitology And Entomology</li>
                                <li>III Year – Biochemistry, Coagulation And Transfusion Medicine , Immunohematology, Microbiology-II</li>
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