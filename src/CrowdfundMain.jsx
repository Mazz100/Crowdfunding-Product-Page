import Product from "./Product";
import Navbar from "./Navbar";
import FundTracker from "./FundTracker";
import CardSelection from "./CardSelection";
import desktopBG from './assets/images/image-hero-desktop.jpg'
import mobileBG from './assets/images/image-hero-mobile.jpg'

function CrowdfundMain() {

    return (
        <>
            <header>
                <picture>
                    <source srcSet={desktopBG} media="(min-width: 50rem)" />
                    <img src={mobileBG} alt="" />
                </picture>
                <Navbar />
            </header>
            <main className="main">
                <Product />
                <FundTracker />
                <CardSelection />
            </main>
        </>
    );
}

export default CrowdfundMain