import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const VisionMission = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-6">
            <div className="container" style={{ maxWidth: '80%' }}>
                < div className="row g-5 align-items-center" style={{ marginTop: 'auto' }}>
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <div className="main-img-1">
                                <img src="/assets/images/book.webp" alt="About Image" />
                            </div>
                            <div className="main-img-2 bounce-slide">
                                <img src="/assets/images/about/vision.webp" alt="About Image" />
                            </div>
                            <ul className="shape-group">

                                <li className="shape-2" style={{ animation: 'none', bottom: '140px' }}>
                                    <img src="/assets/images/about/logo-shape.webp" alt="Shape" />
                                </li>
                                <motion.li className="shape-3 scene"
                                    animate={{
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-content" style={{ maxWidth: '100%' }}>
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">

                                <h2 className="title">EMPOWERING LIVES THROUGH EDUCATION</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>
                                    The Sri Shanmugha community is driven by a shared purpose: to make a better world through education and
                                    Shanmugha was founded with a vision to accelerate the area’s educational & industrial development. With ingenuity and drive, our graduates have moved on to excel in jobs and fundamental technologies. Through teaching and research, we continue to pursue our mission of service and free education to the underprivileged and rural areas of Tamil Nadu and beyond. At the same time,
                                    and without the slightest sense of contradiction, we are welcoming of people regardless of where they come from.
                                </p>
                            </div>
                            <div className="about-mission" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="row g-5 row--20">
                                    <div className="col-lg-6">
                                        <h5 className="title">Our Vision</h5>
                                        <p>Our founding ethos remains at the core of the Institution’s vision. To be an institute of repute in all fields of education by implementing the best practices akin to global standards for fostering domain knowledge and developing research attitude among students to make them globally competent.</p>

                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="title">Our Mission</h5>

                                        <div className="about-content">
                                            <ul className="features-list">
                                                <li >Achieving excellence in Teaching & Learning process using state-of-the-art resources.  </li>
                                            </ul>
                                        </div>

                                        <div className="about-content">
                                            <ul className="features-list">
                                                <li >Extending opportunity to upgrade faculty knowledge and skills.  </li>
                                            </ul>
                                        </div>
                                        <div className="about-content">
                                            <ul className="features-list">
                                                <li >Implementing the best student training practices for requirements of industrial scenario of the state.  </li>
                                            </ul>
                                        </div>

                                        <div className="about-content">
                                            <ul className="features-list">
                                                <li >Motivating faculty and students in research activity for real time application.  </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <Link href="/contact-us" legacyBehavior>
                                <a className="edu-btn btn-curved" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Contact Us <i className="icon-4"></i></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMission;