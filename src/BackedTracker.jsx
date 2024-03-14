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
                    <li>
                        <span className="backed">${backed.toLocaleString()}</span>
                    </li>
                    <li>
                        <span className="backed-total">of ${targetBacked.toLocaleString()} backed</span>
                    </li>
                </li>

                <div className="line"></div>

                <li>
                    <li>
                        <span className="backers">{totalBacker.toLocaleString()}</span>
                    </li>
                    <li>
                        <span className="backers-total">total backers</span>
                    </li>
                </li>


                <div className="line"></div>

                <li>
                    <li>
                        <span className="backed-days">56</span>
                    </li>
                    <li>
                        <span className="backed-days-total">days left</span>
                    </li>
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
