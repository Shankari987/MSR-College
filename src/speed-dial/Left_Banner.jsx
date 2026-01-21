import React, { useState, useEffect } from 'react';
import { Button, Drawer } from '@mui/material';
import Link from 'next/link';

const Left_Banner = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 50000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>

      <img style={{
        position: 'fixed',
        left: 0,
        top: '50%',
        maxWidth: '35vh',
        maxHeight: '15vh',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        color: '#fff',
        zIndex: 1000,
      }} onClick={handleToggle} src='/assets/images/admission_gif.gif' alt='Leftbanner' />

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          style={{
            width: 400,
            height: '100%', // Full height of the drawer
            backgroundImage: 'linear-gradient(to bottom, #1BB69C, #167f54)', // Example gradient background
            color: '#fff',
          }}
        >
          <Button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: '#e74c3c',
              color: ' #fff',
              padding: '5px 10px',
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <div className='text-content' style={{ padding: '20px' }}>
            <h3 className='head-line'>Admission</h3>
            <h5 className='sec-line'>Now Open for Registration</h5>
            <h6 className='third-line'>2025-2026</h6>
            <h6 style={{ color: '#FFD700', fontSize: "20px" }} className='sec-line'>By submitting this form, I consent to receive communications from the college through WhatsApp, SMS, Email, phone Calls, and other channels, even if my number is registered with DND/NDNC</h6>

            <center>
              <Link href='https://admissions.shanmugha.edu.in/' legacyBehavior>
                <center>
                  <button className='enroll-btn' href="/">Enroll Now</button>
                </center>
              </Link>
            </center>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Left_Banner;