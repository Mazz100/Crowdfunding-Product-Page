import Product from "./Product";
import Navbar from "./Navbar";
import FundTracker from "./FundTracker";
import CardSelection from "./CardSelection";
import desktopBG from './assets/images/image-hero-desktop.jpg'
import mobileBG from './assets/images/image-hero-mobile.jpg'

function CrowdfundMain() {

    return (
        <>
            <div className="wrapper">
                <header>
                    <picture>
                        <source srcSet={desktopBG} media="(min-width: 43.75rem)" />
                        <img src={mobileBG} alt="" />
                    </picture>
                    <Navbar />
                </header>
                <main className="main">
                    <Product />
                    <FundTracker />
                    <CardSelection />
                </main>
            </div>
        </>
    );
}

export default CrowdfundMain