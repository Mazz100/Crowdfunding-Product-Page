import crowdfundLogo from './assets/images/logo.svg'
import hamburgerIcon from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close-menu.svg'
import MobileMenu from './MobileMenu';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <>
            <nav>
                <a href="#" aria-label='Home'>
                    <img src={crowdfundLogo} alt="Crowdfund" />
                </a>

                <div className='desktop-navigation'>
                    <a href="#" className='navigations' aria-label='about'>About</a>

                    <a href="#" className='navigations' aria-label='discover'>Discover</a>

                    <a href="#" className='navigations' aria-label='get started'>Get Started</a>
                </div>

                <button onClick={() => !openMenu ? setOpenMenu(true) : setOpenMenu(false)}
                    className='navbar-button'
                    aria-label='navbar menu button'
                    aria-expanded={openMenu ? "true" : 'false'}>
                    <img src={!openMenu ? hamburgerIcon : closeIcon} alt="" />
                </button>

                {openMenu && createPortal(
                    <div className='portal-group'>
                        <MobileMenu />,
                    </div>,
                    document.body

                )}

            </nav>

        </>
    );

}

export default Navbar