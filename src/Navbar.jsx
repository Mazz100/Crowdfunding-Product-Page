import crowdfundLogo from './assets/images/logo.svg'
import hamburgerIcon from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close-menu.svg'
import React, {useState} from 'react';

function Navbar() {


    return (
        <nav>
            <a href="#" aria-label='Home'>
                <img src={crowdfundLogo} alt="Crowdfund" />
            </a>

            <div className='desktop-navigation'>
                <a href="#" className='navigations' aria-label='about'>About</a>

                <a href="#" className='navigations' aria-label='discover'>Discover</a>

                <a href="#" className='navigations' aria-label='get started'>Get Started</a>
            </div>

            <button className='navbar-button' aria-label='navbar menu button' aria-expanded="false">
                <img src={hamburgerIcon} alt="" />
            </button>

        </nav>
    );

}

export default Navbar