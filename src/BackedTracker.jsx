import React, { useState, useEffect, useContext } from "react";
import { backedContext } from "./CrowdfundMain";
import { totalBackersContext } from "./CrowdfundMain";

function BackedTracker() {
    const [targetBacked, setTargetBacked] = useState(100000);
    const [backed, setBacked] = useContext(backedContext);
    const [totalBacker, setTotalBackers] = useContext(totalBackersContext);

    const progressbarWidth = { width: (`${(backed / targetBacked) * 100}%`) };


    return (
        <>
            <div className="backed-container">
                <ul>
                    <div>
                        <li>
                            <span className="backed">${backed.toLocaleString()}</span>
                        </li>
                        <li>
                            <span className="backed-total">of ${targetBacked.toLocaleString()} backed</span>
                        </li>
                    </div>

                    <div className="line"></div>
                    <div>
                        <li>
                            <span className="backers">{totalBacker.toLocaleString()}</span>
                        </li>
                        <li>
                            <span className="backers-total">total backers</span>
                        </li>
                    </div>
                    <div className="line"></div>

                    <div>
                        <li>
                            <span className="backed-days">56</span>
                        </li>
                        <li>
                            <span className="backed-days-total">days left</span>
                        </li>
                    </div>
                </ul>

                <div className="progressbar-container">
                    <div className="progressbar-BG">
                        <div style={backed >= targetBacked ? { width: (`100%`) } : progressbarWidth}
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
