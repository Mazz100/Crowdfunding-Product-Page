import React, { useContext, useEffect, useState } from "react"
import closeIcon from './assets/images/icon-close-modal.svg'
//Importing the backed context
import { backedContext } from "./FundTracker";

function PledgeModal({ cards, closeModal }) {
    const [selectedPledge, setSelectedPledge] = useState('');
    const [pledge, setPledge] = useState('');

    function handleSelectedPledge(event) {
        setSelectedPledge(event.target.value);
    }

    function handlePledgeValue(event) {
        setPledge(event.target.value);
    }


    return (
        <>
            <div className="pledge-form">
                <div className="title-flex">
                    <button
                        className="closeModal-button"
                        onClick={closeModal}
                        aria-label="pledge modal close button">
                        <img src={closeIcon} alt="" />
                    </button>
                    <h2>Back this project</h2>
                </div>
                <p className="description-text">
                    Want to support us in bringing
                    Mastercraft Bamboo Monitor Riser out in the world?
                </p>

                <form action="">
                    <div className="modal-input">
                        <div className="pledgeRadio-flex-row">
                            <input type="radio"
                                name="pledges"
                                id="Pledge with no reward"
                                value="Pledge with no reward"
                                onChange={handleSelectedPledge}
                            />
                            <div>
                                <label style={{ fontWeight: 700 }} htmlFor="Pledge with no reward">Pledge with no reward</label>
                            </div>
                        </div>

                        <p className="description-text">
                            Choose to support us without a reward if you simply believe in our project.
                            As a backer, you will be signed up to recieve product updates via email
                        </p>
                    </div>

                    {cards.map(card => <div key={card.title} className="modal-input"
                        style={selectedPledge == card.title ? { borderColor: "hsl(176, 50%, 47%)" } : null
                            || card.stock == 0 ? { opacity: 0.4 } : null}>
                        <div className="pledgeRadio-flex-row">
                            {card.stock > 0 ? <input type="radio"
                                onChange={handleSelectedPledge}
                                name="pledges"
                                id={card.title}
                                value={card.title}

                            /> : null}
                            <div className="title-pledge-group">
                                <label style={{ fontWeight: 700 }} htmlFor={card.title}>{card.title}</label>
                                <p className="pledge-text">{card.pledge}</p>
                            </div>
                        </div>

                        <p className="description-text">{card.description}</p>

                        <div className="stock-group">
                            <p className="stock-left">{card.stock}</p>
                            <span> left</span>
                        </div>

                        {selectedPledge == card.title ? <div
                            className="pledgeform-container">
                            <p>Enter your pledge</p>

                            <div className="pledge-input-group">
                                <input type="number"
                                    onChange={handlePledgeValue}
                                    placeholder="$"
                                    className="pledge-input"
                                    value={pledge} />
                                <button onClick={closeModal}
                                    type="button"
                                    className="continue-button">
                                    Continue
                                </button>
                            </div>
                        </div> : null}

                    </div>)}
                </form >
            </div >
        </>
    );
}

export default PledgeModal