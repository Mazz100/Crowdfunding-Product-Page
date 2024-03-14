import React, { useState, useContext } from "react";
import RewardButton from "./RewardButton";
import SuccessModal from "./SuccessModal";

import { cardsMapContext } from "./CrowdfundMain";
import { createPortal } from "react-dom";

function ProductCards() {
    const cards = useContext(cardsMapContext);
    //Complete modal state used for pledge confirmation
    const [modalComplete, setModalIsComplete] = useState(false);

    function handleCompleteState() {
        if (!modalComplete) {
            setModalIsComplete(true);
        }
        else {
            setModalIsComplete(false);
        }
    }

    return (
        <div className="cards-container">
            <h3>About this project</h3>

            <p className="product-description">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="product-description">
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                to allow notepads, pens, and USB sticks to be stored under the stand.
            </p>


            {cards.map(card => <div key={card.title} className="cards" style={card.stock == 0 ? { opacity: 0.6 } : null} >
                <div className="desktop-flex-row">
                    <h4 className="reward-title">{card.title}</h4>

                    <p className="pledge-text">{card.pledge}</p>
                </div>

                <p className="description-text">{card.description}</p>

                <div className="desktop-flex-row">
                    <div className="stock-group">
                        <p className="stock-left">{card.stock}</p>
                        <span>
                            left
                        </span>
                    </div>
                    {/*Passing a stock prop for button conditional rendering*/}
                    <RewardButton cards={cards} stock={card.stock} title={card.title} completeState={handleCompleteState} />

                </div>
            </div>)}

            {/*Modal Complete UI*/}
            {modalComplete && createPortal(
                <div className="complete-modal-container">
                    <SuccessModal completeState={handleCompleteState}/>,
                </div>,

                document.body,
            )}

        </div >
    );
}

export default ProductCards