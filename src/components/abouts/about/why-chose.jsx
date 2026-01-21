import React from 'react';
import ChoseBox from './chose-box-item';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const WhyChose = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="why-choose-area-2 section-gap-large">
            <div className="container edublink-animated-shape">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre" style={{ fontSize: '1.3em' }}>

                        Sri Shanmugha Educational Institutions were established in 2011, with the belief that everyone should have accessibility and affordability to quality education. The Group of Educational Institutions are driven by a sublime aim of providing education in various fields such as Engineering, Pharmacy, Nursing and other Medical Sciences, with a marked difference to excel in education, research and innovation.
                    </span>
                    <br />     <br />  
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>

                <ul className="shape-group">
                    <li className="shape-5" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <span></span>
                    </li>
                </ul>
            </div>
            <ul className="shape-group">
                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={{
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    }}
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={{
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    }}
                >
                    <img src="/assets/images/about/shape-13.png" alt="shape" />
                </motion.li>
                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={{
                        x: mouseDirection(30).x,
                        y: mouseDirection(30).y
                    }}
                >
                    <span></span>
                </motion.li>
                <motion.li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                    animate={{
                        x: mouseReverse(30).x,
                        y: mouseReverse(30).y
                    }}
                >
                    <img src="/assets/images/about/shape-40.png" alt="shape" />
                </motion.li>
            </ul>
        </section>
    )
}

export default WhyChose;