import React from 'react';

const ContactMap = () => {
    return (
        <div className="google-map-area">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <center>
                    <h2 className='loc-heading'>We are located here</h2>
                    </center>
                    <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15642.382771141078!2d77.8804707!3d11.4368636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9608a337bbd77%3A0x9b3baa2657341067!2sSri%20Shanmugha%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1698940807702!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactMap;