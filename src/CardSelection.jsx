import React, { useState, useEffect } from "react";
import RewardButton from "./RewardButton";

function CardSelection() {

    const cards = [
        {
            title: "Bamboo Stand",
            pledge: "Pledge $25 or more",
            description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
            stock: 64
        },
        {
            title: "Black Edition Stand",
            pledge: "Pledge $75 or more",
            description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 101
        },
        {
            title: "Mahogany Special Edition",
            pledge: "Pledge $200 or more",
            description: "  You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
            stock: 0
        },
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

                {cards.map(cards => <div key={cards.title} className="cards">
                    <h4 className="reward-title">{cards.title}</h4>

                    <p className="pledge-text">{cards.pledge}</p>

                    <p className="description-text">{cards.description}</p>

                    <div className="desktop-flex-row">
                        <div className="stock-group">
                            <p className="stock-left">{cards.stock}</p>
                            <span>
                                left
                            </span>
                        </div>
                        <RewardButton cards={cards} />
                    </div>
                </div>)}
            </div>
        </>
    );
}

export default CardSelection