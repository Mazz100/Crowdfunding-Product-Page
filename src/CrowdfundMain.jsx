import Product from "./Product";
import Navbar from "./Navbar";
import BackedTracker from "./BackedTracker";
import ProductCards from "./ProductCards";
import desktopBG from './assets/images/image-hero-desktop.jpg'
import mobileBG from './assets/images/image-hero-mobile.jpg'
import SuccessModal from "./SuccessModal";
import React, { useState } from "react";
import { createPortal } from "react-dom";

//Contexts management
export const backedContext = React.createContext();
export const totalBackersContext = React.createContext();
export const cardsMapContext = React.createContext();

function CrowdfundMain() {
    const [backed, setBacked] = useState(89914);
    const [totalBacker, setTotalBackers] = useState(5007);

    //Complete modal state
    const [modalComplete, setModalIsComplete] = useState(false);

    function handleCompleteState() {
        if (!modalComplete) {
            setModalIsComplete(true);
        }
        else {
            setModalIsComplete(false);
        }
    }

    const cards = [
        {
            title: "Bamboo Stand",
            pledge: "Pledge $25 or more",
            description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            stock: 101
        },
        {
            title: "Black Edition Stand",
            pledge: "Pledge $75 or more",
            description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 64
        },
        {
            title: "Mahogany Special Edition",
            pledge: "Pledge $200 or more",
            description: "  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 0
        },
    ]



    return (
        <div className="wrapper">
            <header>
                <picture>
                    <source srcSet={desktopBG} media="(min-width: 50rem)" />
                    <img src={mobileBG} alt="" />
                </picture>
                <Navbar />
            </header>
            <main className="main">
                {/*Providing context reference of backed state and cards object arrays */}
                <backedContext.Provider value={[backed, setBacked]}>
                    <cardsMapContext.Provider value={cards}>
                        <totalBackersContext.Provider value={[totalBacker, setTotalBackers]}>
                            <Product completeState={handleCompleteState} completeCondition={modalComplete} />
                            <BackedTracker />
                            <ProductCards completeState={handleCompleteState} completeCondition={modalComplete} />
                        </totalBackersContext.Provider>
                    </cardsMapContext.Provider>
                </backedContext.Provider>
            </main>

            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/Mazz100">Mazen Hassan</a>.
            </footer>

            {/*Modal Complete UI*/}
            {modalComplete && createPortal(
                <div className="complete-modal-container">
                    <SuccessModal completeState={handleCompleteState} />,
                </div>,

                document.body,
            )}
        </div>

    );
}

export default CrowdfundMain