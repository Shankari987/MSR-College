import React from 'react';

const social_share = [
    { link: 'http://facebook.com', target: '_blank', icon: 'icon-facebook',},
    { link: 'http://twitter.com', target: '_blank', icon: 'icon-twitter', },
    { link: 'https://www.linkedin.com/company/sri-shanmugha-educational-institutions', target: '_blank', icon: 'icon-linkedin2'},
];

const SocialShare = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}
export default SocialShare;