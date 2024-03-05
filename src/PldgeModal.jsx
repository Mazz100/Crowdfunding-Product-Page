import React, { useState } from "react"
import closeIcon from './assets/images/icon-close-modal.svg'


function PledgeModal({ cards, closeModal }) {
    const [selectedPledge, setSelectedPledge] = useState('');


    const pledges = [
        {
            value: "Pledge with no reward",
            description: "Choose to support us without a reward if you simply blieve in our project. As a backer, you will be signed up to recieve product updates via email",
        },
        {
            value: "Bamboo Stand",
            pledge: "Pledge $25 or more",
            description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            stock: 101
        },
        {
            value: "Black Edition Stand",
            pledge: "Pledge $75 or more",
            description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 64
        },
        {
            value: "Mahogany Special Edition",
            pledge: "Pledge $200 or more",
            description: "  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 0
        },
    ]


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
                    {pledges.map(pledges => <div key={pledges.value} className="modal-input">
                        <div className="pledgeRadio-flex-row">
                            <input type="radio" name="pledges" />
                            <div>
                                <label style={{ fontWeight: 700 }} htmlFor={pledges.value}>{pledges.value}</label>
                                <p className="pledge-text">{pledges.pledge}</p>
                            </div>
                        </div>

                        <p className="description-text">{pledges.description}</p>

                        <div className="stock-group">
                            {pledges.stock || pledges.stock == 0 ? <p className="stock-left">{pledges.stock}</p> : null}
                            {pledges.stock || pledges.stock == 0 ? <span> left</span> : null}
                        </div>

                    </div>)}
                </form>
            </div>
        </>
    );
}

export default PledgeModal