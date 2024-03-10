import Product from "./Product";
import Navbar from "./Navbar";
import FundTracker from "./FundTracker";
import ProductCards from "./ProductCards";
import desktopBG from './assets/images/image-hero-desktop.jpg'
import mobileBG from './assets/images/image-hero-mobile.jpg'
import React, { useState } from "react";
function CrowdfundMain() {


    return (
        <>
            <div className="wrapper">
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
                    <ProductCards />
                </main>

                <footer className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/Mazz100">Mazen Hassan</a>.
                </footer>
            </div>
        </>
    );
}

export default CrowdfundMain