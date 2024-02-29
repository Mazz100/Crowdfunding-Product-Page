import React, { useState, useEffect } from "react";

function FundTracker() {
    const [targetFund, setTargetFund] = useState("100,000");
    const [currentFund, setCurrentFund] = useState("89,914");

    const progressbarWidth = { width: (`${(parseFloat(currentFund) / parseFloat(targetFund)) * 100}%`) };

    return (
        <>
            <div className="fund-container">
                <ul>
                    <div>
                        <li>
                            <span className="fund-remain">${currentFund}</span>
                        </li>
                        <li>
                            <span className="fund-total">of ${targetFund} backed</span>
                        </li>
                    </div>

                    <div className="line"></div>
                    <div>
                        <li>
                            <span className="fund-remain">5,007</span>
                        </li>
                        <li>
                            <span className="fund-total">total backers</span>
                        </li>
                    </div>
                    <div className="line"></div>

                    <div>
                        <li>
                            <span className="fund-remain">56</span>
                        </li>
                        <li>
                            <span className="fund-total">days left</span>
                        </li>
                    </div>
                </ul>

                <div className="progressbar-container">
                    <div className="progressbar-BG">
                        <div style={progressbarWidth} className="progressbar-filling"></div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default FundTracker