import React from 'react';

const Data =[
    {
        "Heading": "Laboratories:",
        "Desc": [
            "Anatomy physiology lab",
            "Biochemistry lab",
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
            "Rainbow scans",
            "Kavery Hospital",
            "Visahan Hospital"
        ]
    },
    {
        "Heading": "Faculties:",
        "Desc": [
            "Ms.Ezhilarasai Msc.RIT",
            "Ms.Ishwarya Bsc.RIT"
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
                                <h3 className="title"> Bsc.Radiology and imaging technology</h3>

                                <div className="col-lg-12" style={{ display: 'flex' }}>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <img src="/assets/images/msr/course/radiology.jpg" alt="Blog Image" style={{ maxHeight: 550, maxWidth: 550 }} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="thumbnail">
                                            <p>  A radiographer produces radiography of patients with the help of an X-ray to find the exact medical condition of the patient. In addition to X-ray, a radiographer also considers CT scans, ultrasounds, and MRI for producing radiography. The radiology field is broadly divided into two areas namely diagnostic radiology and interventional radiology. Diagnostic Radiology is the specialization of medicine that uses the images of X-Ray and other imaging techniques to diagnose the disease and injury of the patient. Interventional Radiology is another medical specialty that also uses imaging techniques (X-ray, CT, MRI and ultrasound) for direction. Patients can be treated and diagnosed using minimally invasive procedures.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <h3 className="title">Subjects :</h3>
                            <ul className="blog-pagination-list prev-post" style={{ paddingLeft: 40,listStyle:'none' }}>
                                <li>I Year – Basic Anatomy, Physiology, General Physics,Radiation Physics, Radiographic Equipments</li>
                                <li>II Year – Clinical Radiography, X Ray Film, Contrast & Special Radiography</li>
                                <li>III Year – Equipments Of Advanced Modalities, Modern Imaging Techniques, Quality Control</li>
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