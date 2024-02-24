import React, { useState, useEffect } from "react";

function CardSelection() {

    const [stock, setStock] = useState(0);
    const cards = [
        { id: 1, stock: 64 },
        { id: 2, stock: 101 },
        { id: 3, stock: 0 },
    ]

    return (
        <>
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

                <div className="cards">
                    <h4 className="reward-title">Bamboo Stand</h4>
                    <p className="pledge-text">Pledge $25 or more</p>

                    <p className="description-text">
                        You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                        you’ll be added to a special Backer member list.
                    </p>

                    <div className="stock-group">
                        <p className="stock-left">
                            101
                        </p>
                        <span>left</span>
                    </div>
                    <button className="reward-button" aria-label="reward button">
                        Select Reward
                    </button>
                </div>

                <div className="cards">
                    <h4 className="reward-title">Black Edition Stand</h4>
                    <p className="pledge-text">Pledge $75 or more</p>

                    <p className="description-text">
                        You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                        member list. Shipping is included.
                    </p>

                    <div className="stock-group">
                        <p className="stock-left">
                            64
                        </p>
                        <span>left</span>
                    </div>
                    <button className="reward-button" aria-label="reward button">
                        Select Reward
                    </button>
                </div>

                <div className="cards">
                    <h4 className="reward-title">Mahogany Special Edition</h4>
                    <p className="pledge-text">Pledge $200 or more</p>

                    <p className="description-text">
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                        to our Backer member list. Shipping is included.
                    </p>

                    <div className="stock-group">
                        <p className="stock-left">
                            0
                        </p>
                        <span>left</span>
                    </div>
                    <button className="reward-button" aria-label="reward button">
                        Select Reward
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardSelection