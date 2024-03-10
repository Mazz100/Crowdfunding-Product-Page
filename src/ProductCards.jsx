import React, { useState, useEffect, createContext } from "react";
import RewardButton from "./RewardButton";


function ProductCards() {


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
                    <RewardButton cards={cards} stock={card.stock}/>
                </div>
            </div>)}

        </div >
    );
}

export default ProductCards