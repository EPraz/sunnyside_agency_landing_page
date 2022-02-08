import React from 'react';
import logo from '../Assets/images/logo.svg'
import facebook from '../Assets/images/icon-facebook.svg'
import instagram from '../Assets/images/icon-instagram.svg'
import pinterest from '../Assets/images/icon-pinterest.svg'
import twitter from '../Assets/images/icon-twitter.svg'

const Footer = () => {
    return <div id='footer'>
        <div className="f_container">
            <a href="#" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <ul className="menu">
                <li><a href="#" >About</a></li>
                <li><a href="#" >Services</a></li>
                <li><a href="#" >Projects</a></li>
            </ul>
            <ul className="social_media">
                <li>
                    <a href="#" >
                        <img src={facebook} alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={instagram} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={pinterest} alt="Pinterest" />
                    </a>
                </li>
                <li>
                    <a href="#" >
                        <img src={twitter} alt="Twitter" />
                    </a>
                </li>
            </ul>
        </div>
    </div>;
};

export default Footer;

