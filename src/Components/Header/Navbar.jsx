import React, { useState } from 'react';
import logo from '../../images/logo.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav scrolled" : "nav"}>
            <a href="#" className="logo">
                <img src={logo} alt="Logo" />
            </a>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className='nav-icon'></span>
            </label>
            <ul className="menu">
                <li><a href="#" >About</a></li>
                <li><a href="#" >Services</a></li>
                <li><a href="#" >Projects</a></li>
                <li><a href="#" className="special">Contact</a></li>
            </ul>

        </nav>
    )
};

export default Navbar;
