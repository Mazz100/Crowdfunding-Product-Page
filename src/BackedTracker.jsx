import React, { useState, useEffect, useContext } from "react";
import { backedContext } from "./CrowdfundMain";
import { totalBackersContext } from "./CrowdfundMain";

function BackedTracker() {
    const [targetBacked, setTargetBacked] = useState(100000);
    const [backed, setBacked] = useContext(backedContext);
    const [totalBacker, setTotalBackers] = useContext(totalBackersContext);

    const progressbarWidth = { width: (`${(backed / targetBacked) * 100}%`) };


    return (

        <div className="backed-container">
            <ul>
                <li>
                    <p className="backed">${backed.toLocaleString()}</p>
                    <p className="backed-total">of ${targetBacked.toLocaleString()} backed</p>
                </li>

                <div className="line"></div>

                <li>
                    <p className="backers">{totalBacker.toLocaleString()}</p>
                    <p className="backers-total">total backers</p>
                </li>

                <div className="line"></div>

                <li>
                    <p className="backed-days">56</p>
                    <p className="backed-days-total">days left</p>
                </li>
            </ul>

            <div className="progressbar-container">
                <div className="progressbar-BG">
                    <div style={backed >= targetBacked ? { width: (`100%`) } : progressbarWidth}
                        className="progressbar-filling"
                    >
                    </div>
                </div>
            </div>

        </div >
    );
}

export default BackedTracker
