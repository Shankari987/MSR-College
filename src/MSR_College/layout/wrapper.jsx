import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../../ui/scroll-to-top';
export default function Wrapper({ children }) {
   
    return (
        <>
            {children}
            <ScrollToTop />
            <ToastContainer />
        </>
    )
}
