

function RewardButton({cards}) {
    return (
        <button className={cards.stock > 0 ? 'reward-button' : 'out-of-stock-button'} 
        aria-label="reward button"
        aria-expanded='false'>
            {cards.stock > 0 ? `Select Reward` : `Out of Stock`}
        </button>
    )
}

export default RewardButton