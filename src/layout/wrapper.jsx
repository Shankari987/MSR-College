import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from '../ui/scroll-to-top';
import OpenSpeed from '../speed-dial/speed-dial';
import LeftBanner from '../speed-dial/Left_Banner'
export default function Wrapper({ children }) {
   
    return (
        <>
            {children}
            <ScrollToTop />
            {/* <LeftBanner /> */}
            <OpenSpeed/>
            <ToastContainer />
        </>
    )
}
