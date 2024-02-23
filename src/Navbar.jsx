import crowdfundLogo from './assets/images/logo.svg'
import hamburgerIcon from './assets/images/icon-hamburger.svg'
import closeIcon from './assets/images/icon-close-menu.svg'

function Navbar() {


    return (
        <nav>
            <a href="#" aria-label='Home'>
                <img src={crowdfundLogo} alt="Crowdfund" />
            </a>

            <button className='navbar-button' aria-label='navbar menu button'>
                <img src={hamburgerIcon} alt="" />
            </button>
        </nav>
    );

}

export default Navbar