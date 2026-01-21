import React from 'react';

import TeamTwo from "./team-two";
import Link from 'next/link';

const Members = [
    {
        id: 1, name: 'SHANMUGHAM K',
        title: 'OUR CHAIRMAN',
        img: '/assets/images/Management-01.jpg',
    },
    {
        id: 2, name: 'PRABHAKAR S',
        title: 'OUR VICE-CHAIRMAN',
        img: '/assets/images/prabakar.png',
    },
    {
        id: 3, name: 'THIRUMOORTHY A',
        title: 'OUR EXECUTIVE DIRECTOR',
        img: '/assets/images/Management-ED.jpg',
    }
]
const TeamArea = ({ about_p }) => {
    return (
        <div className={`edu-team-area ${about_p ? 'team-area-5 section-gap-large' : 'team-area-2 edu-section-gap'}`}>
            <div className="container">
                <div className="section-title section-center" data-sal-delay="150"
                    data-sal="slide-up" data-sal-duration="800">

                    <h2 className="title">Our Pillars </h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
                    {Members.map((members) => {
                        return (
                            <div key={members.id} className="col-lg-4 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                                <div className="edu-team-grid team-style-2">
                                    <div className="inner">
                                        <div className="thumbnail-wrap">
                                            <div className="thumbnail">

                                                <img src={`${members.img}`} alt="team images" />

                                            </div>

                                        </div>
                                        <div className="content">
                                            <h5 className="title">
                                                <Link href={`/team-details/${members.id}`} legacyBehavior>
                                                    <a>{members.name}</a>
                                                </Link>
                                            </h5>
                                            <span className="designation">{members.title}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamArea;