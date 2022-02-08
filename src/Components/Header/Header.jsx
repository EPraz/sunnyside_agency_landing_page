import React from 'react';
import Navbar from './Navbar';
import arrow_down from '../../Assets/images/icon-arrow-down.svg'
// Mobile Images
import mobileImage from '../../Assets/images/mobile/image-header.jpg'
// esktop Images
import desktopImage from '../../Assets/images/desktop/image-header.jpg'
import useMediaQuery from '../../Hooks/useMediaQuery';

const Header = () => {

    // const isItMobile = useMediaQuery('(max-width: 767px');
    // console.log(isItMobile)

    return (
        <div id="header">
            <Navbar />
            <div className="h_container">
                <h1>We are creatives</h1>
                <img src={arrow_down} alt="Image Header" />
            </div>
        </div>
    );
};

export default Header;
