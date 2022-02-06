import React from 'react';
import Navbar from './Navbar';
import arrow_down from '../../images/icon-arrow-down.svg'

const Header = () => {
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
