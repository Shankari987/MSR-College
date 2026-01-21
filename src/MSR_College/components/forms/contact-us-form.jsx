import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add your API call here
            // await axios.post('/api/contact', formData);
            toast.success('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                ></textarea>
            </div>
            <button type="submit" className="edu-btn btn-medium">
                Send Message <i className="icon-arrow-right-line-right"></i>
            </button>
        </form>
    );
};

export default ContactUsForm;

