import React from 'react';

const Data =[
    {
        "Heading": "Laboratories:",
        "Desc": [
            "Anatomy physiology lab",
            "Biochemistry lab",
            "Pathology lab",
            "Physics lab",
            "Microbiology lab"
        ]
    },
    {
        "Heading": "Hospital tie ups:",
        "Desc": [
            "Agarwal Eye Hospital –Erode",
            "Agarwal Eye Hospital –Salem",
            "Kathir Eye Hospital- Thiruchengodu",
            "Mettur Government hospital",
            "Attur Government hospital"
        ]
    },
    {
        "Heading": "Faculties:",
        "Desc": [
            "Ms.Geetha M.Optom",
            "Ms.Madhu Mitha M.Optom"
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
                                <h3 className="title"> B.Optometry</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/optometry.jpg" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>Bachelor of Science degree in Optometry field provides extensive training and medical knowledge about the human eye. Apart from making the fundamentals of the human eye clear, this course will also teach how to operate various types of medical equipment that are a must for every optometry student and practitioner to know.</p>
                                            <p>Communication skills will also be focused on since it is imperative that the students know how to properly communicate with patients. The duration of the course is three years (four years in some universities which include one year of internship) and it is an important and career orienting in nature which provides widespread scopes to the candidates.
</p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40,listStyle:'none' }}>
                                <li>I Year – Physical Optics, Geometric Optics I, Geometric Optics Ii, General Anatomy, General Physiology, Ocular Anatomy, Ocular Physiology, Basic Biochemistry I, Basic Biochemistry Ii, Nutrition</li>
                                <li>II Year – Ocular Diseases (1 &II), Visual Optics I&II, Optometric Instruments, Pathology, Microbiology, Pharmacology</li>
                                <li>III Year – Binocular vision , Glaucoma , Low vision aids , Dispensing Optics , Pediatric Optometry and Geriatric Optometry, Contact lens , Law & optometry and Occupational Optometry, project and paper presentation.</li>
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