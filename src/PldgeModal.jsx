import React, { useContext, useEffect, useState } from "react"
import closeIcon from './assets/images/icon-close-modal.svg'
import { backedContext } from "./CrowdfundMain";
import { totalBackersContext } from "./CrowdfundMain";

function PledgeModal({ cards, title, closeModal, completeState }) {
    const [selectedPledge, setSelectedPledge] = useState(title);
    const [pledge, setPledge] = useState('');
    console.log(selectedPledge);

    //backed and totalBacker state reference by context
    const [totalBacker, setTotalBackers] = useContext(totalBackersContext);
    const [backed, setBacked] = useContext(backedContext);

    //Prevent symbols on number input
    const exceptThisSymbols = ['e', 'E', '+', '-'];

    function handleSelectedPledge(event) {
        setSelectedPledge(event.target.value);

    }
    function handlePledgeValue(event) {
        setPledge(event.target.value);

        if (pledge.length >= 4) {
            setPledge('');
        }
    }

    function addPledge() {
        //Extracting card titles and checking minimum pledge required
        const minimumPledge = cards.map(card => card.title);
        const addedPledge = backed + parseFloat(pledge);

        if (pledge !== '' && pledge !== 0 &&
            selectedPledge == minimumPledge[0] && pledge >= 25 ||
            selectedPledge == minimumPledge[1] && pledge >= 75) {

            //show complete modal
            completeState();
            setBacked(addedPledge);

            //Updater function to modify or manipulate a state hook
            setTotalBackers(b => b + 1);
            closeModal();
        }
        else {
            alert(`Please insert a minimum pledge!`);
        }
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
                    <div className="modal-input"
                        style=
                        {{
                            borderColor: selectedPledge === "Pledge with no reward" ? "hsl(176, 50%, 47%)" : null
                        }}>
                        <div className="pledgeRadio-flex-row">
                            <input type="radio"
                                name="pledges"
                                id="Pledge with no reward"
                                value="Pledge with no reward"
                                onChange={handleSelectedPledge}
                         
                            />
                            <div>
                                <label className="pledge-label" htmlFor="Pledge with no reward">Pledge with no reward</label>
                            </div>
                        </div>
                        <p className="description-text">
                            Choose to support us without a reward if you simply believe in our project.
                            As a backer, you will be signed up to recieve product updates via email
                        </p>
                        {/*No pledge confirm*/}
                        {selectedPledge == "Pledge with no reward" ?
                            <div className="pledgeform-container" style={{ marginTop: '1em' }}>
                                <button
                                    onClick={() => {
                                        completeState();
                                        closeModal();
                                        setTotalBackers(b => b + 1);
                                    }}
                                    type="button"
                                    className="continue-button"
                                    style={{
                                        marginTop: '1em',
                                    }}>
                                    Continue
                                </button>
                            </div> : null}
                    </div>

                    {cards.map(card => <div key={card.title} className="modal-input"
                        style=
                        {{
                            borderColor: selectedPledge === card.title ? { borderColor: "hsl(176, 50%, 47%)" } : null,
                            opacity: card.stock === 0 ? 0.4 : null
                        }}>
                        <div className="pledgeRadio-flex-row">
                            {card.stock > 0 && <input type="radio"
                                onChange={handleSelectedPledge}
                                name="pledges"
                                id={card.title}
                                value={card.title}
                                checked={title == selectedPledge}

                            />}
                            <div className="title-pledge-group">
                                <label className="pledge-label" htmlFor={card.title}>{card.title}</label>
                                <p className="pledge-text">{card.pledge}</p>
                            </div>
                        </div>

                        <p className="description-text">{card.description}</p>

                        <div className="stock-group">
                            <p className="stock-left">{card.stock}</p>
                            <span> left</span>
                        </div>

                        {/*Pledge entry form*/}
                        {selectedPledge === card.title ?
                            <div className="pledgeform-container">
                                <p>Enter your pledge</p>

                                <div className="pledge-input-group">
                                    <input type="number"
                                        onChange={handlePledgeValue}
                                        onKeyDown={e => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                                        placeholder="$"
                                        className="pledge-input"
                                        value={pledge} />
                                    <button onClick={addPledge}
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