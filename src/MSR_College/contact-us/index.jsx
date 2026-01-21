import React from 'react';
import { Footer, Header } from '../layout';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import ContactMap from './contact-map';
import ContactUsArea from './contact-us-area';

const index= () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <Breadcrumb title="Contact Us" current_page="Contact Us" />
                <ContactUsArea/>
                <ContactMap/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;