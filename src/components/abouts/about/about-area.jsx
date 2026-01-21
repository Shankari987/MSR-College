import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';


const AboutArea = ({head_text, lists}) => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-7">

            <div className="container" style={{ maxWidth: '80%',marginTop:20 }}>
                <div className="row g-5 row--45">
                    <div className="col-lg-7" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">

                                <h2 className="title"> <span className="color-secondary">OUR CORE</span></h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>

                                    {head_text}
                                </p>
                            </div>
                            <ul className="features-list" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                {lists ?.map((l, i) => <li key={i}>{l}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="edu-faq-gallery">
                            <div className="faq-thumbnail thumbnail-2" data-sal-delay="50" data-sal="slide-left" data-sal-duration="800">
                                <img src={'/assets/images/SMG_4399-01.jpg'} alt="Managment Images" />
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >
                                    <img src="/assets/images/faq/shape-12.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    }} style={{ zIndex: 0 }}
                                >
                                    <img src="/assets/images/faq/shape-04.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={{
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    }}
                                >

                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200"></li>
            </ul>
        </div>
    )
}

export default AboutArea;