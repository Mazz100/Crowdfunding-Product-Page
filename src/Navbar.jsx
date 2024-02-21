import crowdfundLogo from './assets/images/logo.svg'

function Navbar() {
    const links =
        [{
            id: 1, name: 'About',
            id: 2, name: 'Discover',
            id: 3, name: 'Get Started',
        }]

    return (
        <div className='navbar-container'>
            <img src={crowdfundLogo} alt="logo of crowdfund" />

            <div className='navbar-menu'></div>
        </div>
    );

}

export default Navbar