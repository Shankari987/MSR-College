import React from 'react';
import { Footer, HeaderThree } from '../../../layout';
import Breadcrumb from './breadcrumb-about';
import WhyChose from './why-chose'
import AboutArea from './about-area';
import TeamArea from './team-area';
import Message1 from './message1';
import Message2 from './message2';
import VisionMission from './vission-mission';

const head_text = "The Sri Shanmugha Educational Charitable Trust is committed to providing quality education to the economically behind sections of rural Tamil Nadu. The Sri Shanmugha Educational Charitable Trust was founded in 2010 with a prime objective of promoting higher and technical education. The Trust was founded by Mr. K.Shanmugham, Chairman of the Trust. It has been established with a mission to redefine the system of Technical Education and disseminating the knowledge, skills in core and frontier disciplines through innovative and educative programs, thereby developing a new group of professionals with high level of competence, deep sense of ethics and social commitment.";
const lists = [
    'Achieving excellence in Teaching & Learning process using state-of-the-art resources.',
    'Extending opportunity to upgrade faculty knowledge and skills.',
    'Implementing the best student training practices for requirements of industrial scenario of the state.',
    'Motivating faculty and students in research activity for real time application.',
];


const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <HeaderThree no_top_bar={true} />
                <Breadcrumb title={'About Us'} current_page="About Us" />
                <WhyChose />
                <VisionMission />
                <AboutArea head_text={head_text} lists={lists} />

                <TeamArea about_p={true} />
                <Message1 />
                <Message2 />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;