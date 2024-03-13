import React, { useState, useEffect, useContext } from "react";
import { backedContext } from "./CrowdfundMain";

function BackedTracker() {
    const [targetBacked, setTargetBacked] = useState(100000);
    const [backed, setBacked] = useContext(backedContext);
   
    const progressbarWidth = { width: (`${(backed / targetBacked) * 100}%`) };

    return (
        <>
            <div className="fund-container">
                <ul>
                    <div>
                        <li>
                            <span className="fund-remain">${backed.toLocaleString()}</span>
                        </li>
                        <li>
                            <span className="fund-total">of ${targetBacked.toLocaleString()} backed</span>
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
                        <div style={progressbarWidth}
                            className="progressbar-filling"
                            aria-label="backed progressbar">
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default BackedTracker
