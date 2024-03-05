import crowdfundLogo from './assets/images/logo.svg'
import hamburgerIcon from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close-menu.svg'
/*======================================================*/
import MobileMenu from './MobileMenu';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);



    function checkOutsideClick(event) {
        if (isOpenMenu && menuRef.current.contains(event.target)) {
            setIsOpenMenu(false);
        }

    }
    console.log(isOpenMenu);

    useEffect(() => {
        //Add event listiner with the outside of menu function
        document.addEventListener('mousedown', checkOutsideClick);

        return () => {
            document.removeEventListener('mousedown', checkOutsideClick);
        }
    }, [isOpenMenu])


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

                <button onClick={() => !isOpenMenu ? setIsOpenMenu(true) : setIsOpenMenu(false)}
                    className='navbar-button'
                    aria-label='navbar menu button'
                    aria-expanded={isOpenMenu ? "true" : 'false'}>
                    <img src={!isOpenMenu ? hamburgerIcon : closeIcon} alt="" />
                </button>

                {isOpenMenu && createPortal(
                    <div ref={menuRef} className='portal-group'>
                        <MobileMenu />,
                    </div>,
                    document.body

                )}
            </nav>

        </>
    );

}

export default Navbar