

function FundTracker() {
    return (
        <>
            <div className="fund-container">
                <p>$89,914</p>
                <span>of $100,000 backed</span>

                <div className="line"></div>

                <p>5,007</p>
                <span>total backers</span>
                
                <div className="line"></div>

                <p>56</p>
                <span>days left</span>
            </div>

            <div className="progressbar-fund"></div>
        </>
    );
}

export default FundTracker