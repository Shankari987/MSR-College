import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import ContactUsForm from '../../components/forms/contact-us-form';
import SocialShare from '../../components/social-share/index';

const ContactUsArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <section className="contact-us-area">
            <div className="container" style={{maxWidth:'80%'}}>
                <div className="row g-5">
                    <div className="col-xl-5 col-lg-7">
                        <div className="contact-us-info" style={{width:'80%'}}>
                           <img src='/assets/images/logo/logo-dark_550.png' style={{maxHeight:'80%', maxWidth:'80%'}} alt='Image'></img> <br />
                           <br />
                           
                            <p>The college is located in an Extensive campus of about 120 acres on the state highway connecting Sankari and Tiruchengode.</p>
                            <ul className="address-list">
                                <li>
                                    <h5 className="title">Address</h5>
                                    <p>Sri Shanmugha College of Engineering and Technology, Pullipalayam, Morur(P.O),Sankari (T.K). Salem (D.T.), Tamil Nadu – 637 304.</p>
                                </li>
                                <li>
                                    <h5 className="title">Email</h5>
                                    <p><a href="info@shanmugha.edu.in">info@shanmugha.edu.in</a></p>
                                </li>
                                <li>
                                    <h5 className="title">Phone</h5>
                                    <p><a href="tel:+04283-262901,996">04283-262901/996</a></p>
                                </li>
                            </ul>
                            <ul className="social-share">
                                <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                <SocialShare/>
                            </ul>
                        </div>
                    </div>

                    <div className="offset-xl-2 col-lg-5">
                        <div className="contact-form form-style-2">
                            <div className="section-title">
                                <h4 className="title">Get In Touch</h4>
                                <p>Fill out this form for booking a consultant advising session.</p>
                            </div>
                            {/* form start */}
                            <ContactUsForm />
                            {/* form end */}
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsArea;