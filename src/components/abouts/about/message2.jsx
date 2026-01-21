import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const Message2 = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="gap-bottom-equal edu-about-area about-style-9">
            <div className="container edublink-animated-shape">
                < div className="row g-5 align-items-center" style={{marginTop:'auto'}}>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" src="/assets/images/Management-ED.jpg" alt="About Image" />

                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(25).x,
                                        y: mouseReverse(25).y
                                    }}
                                >
                                    <img src="/assets/images/about/shape-36.png" alt="Shape" />
                                </motion.li>

                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(25).x,
                                        y: mouseDirection(25).y
                                    }}
                                >
                                    <img src="/assets/images/others/shape-34.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-3 circle" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <div className="edu-faq-content">
                            <div className="section-title section-left">

                                <h2 className="title">Executive Director <br /> THIRUMOORTHY A</h2>
                                <span className="pre-title">Executive Director's message</span>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>
                            <div className="faq-accordion" id="faq-accordion">
                                <div className="accordion">

                                    <div className="container">
                                        <div className="row justify-content-center">

                                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">

                                            Preparing our students for today’s competitive world is our primary focus. Identifying right opportunities for students and ensuring that these opportunities have complete visibility through excellence in operations is my targeted approach for our young bright minds.

Rightly said by Marian Edelman that “Education is for improving the lives of others and for leaving your community and world better than you found it”, we resonate this by ensuring no student who walks into our campus is left without the opportunity of learning. Our actions are focused on creating an ambience suitable for fostering quality education along with activities that transform our students as responsible citizens of our countr
                                            </p>

                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={{
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    }}
                >
                    <img src="/assets/images/others/shape-33.png" alt="Shape" />
                </motion.li>
            </ul>
        </div>
        </div >
    )
}

export default Message2;