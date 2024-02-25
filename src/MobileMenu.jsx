

function MobileMenu() {
    return (
        <>
            <div className="navigation-container">
                <div className='mobile-menu'>
                    <a href="#" className='mobile-navigation' aria-label='about'>About</a>
                </div>

                <div className="border-line"></div>
                
                <div className='mobile-menu'>
                    <a href="#" className='mobile-navigation' aria-label='discover'>Discover</a>
                </div>
                
                <div className="border-line"></div>

                <div className='mobile-menu'>
                    <a href="#" className='mobile-navigation' aria-label='get started'>Get Started</a>
                </div>
            </div>
        </>
    );
}

export default MobileMenu