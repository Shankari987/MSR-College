import React from 'react';
import { Footer, Header } from '../../layout';
import FacilitiesArea from './Facilities';

const Facilities = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <FacilitiesArea />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default Facilities;