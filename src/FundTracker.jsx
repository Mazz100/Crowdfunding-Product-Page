

function FundTracker() {
    return (
        <>
            <div className="fund-container">
                <ul>
                    <li>
                        <span className="fund-remain">$89,914</span>
                    </li>
                    <li>
                        <span className="fund-total">of $100,000 backed</span>
                    </li>

                    <div className="line"></div>

                    <li>
                        <span className="fund-remain">5,007</span>
                    </li>
                    <li>
                        <span className="fund-total">total backers</span>
                    </li>

                    <div className="line"></div>

                    <li>
                        <span className="fund-remain">56</span>
                    </li>
                    <li>
                        <span className="fund-total">days left</span>
                    </li>
                </ul>

                
            </div>
        </>
    );
}

export default FundTracker