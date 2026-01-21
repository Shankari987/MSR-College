import React from 'react';

const Data =[
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
            "Dasan Hospital",
            "MMCH",
            "Dr. Kumarasamy Hospital",
            "Sai Deekshi Hospital",
            "Mettur Government hospital",
            "Attur Government hospital",
            "Kavery Hospital"
        ]
    },
    {
        "Heading": "Faculties:",
        "Desc": [
            "Ms. Sivabharathi Bsc.CPPCT",
            "Ms. Bharanibala Bsc.CPPCT"
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
                                <h3 className="title"> B.Sc Cardio Pulmonary Perfusion Care Technology</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/pulmonary.jpg" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                           <p> Cardiovascular perfusion is the science of providing extracorporeal circulation in order to artificially support and temporarily replace a patient’s respiratory and circulatory systems. Clinical Perfusionists are expert members of the cardiac surgical team, and provide lifesaving support of patients requiring extracorporeal circulation, including but not limited to major cardiothoracic, vascular and transplant surgeries, as well as support of the critically-ill patient.
Cardiovascular Perfusionists are important members of the open-heart surgical team whose primary role is to conduct cardiopulmonary bypass using a heart-lung machine and other ancillary equipment. They closely monitor the patient’s blood flow and other vital signs during open heart surgery and are also responsible for administering intravenous fluids, blood products and anesthetic drugs</p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40,listStyle:'none' }}>
                                <li>I Year – Basic Anatomy, Computer Science, Physiology, Bio Chemistry, Pathology ,</li>
                                <li>II Year – Pharmacology, Microbiology, Pathology , Principles Of Perfusion Care Technology -1</li>
                                <li>III Year – Introduction To Surgery And CSSD, Cardiopulmonary Bypass And Perfusion Technology , Cardiopulmonary Bypass And Its Complications , Sterile Techniques And Surgical Asepsis Maintenance</li>
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