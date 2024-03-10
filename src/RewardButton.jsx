import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import PledgeModal from "./PldgeModal";

function RewardButton({ cards, stock }) {
    const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

    function closeModal() {
        setIsPledgeModalOpen(false);
    }

    return (
        <>
            <button className={stock > 0 ? 'reward-button' : 'out-of-stock-button'}
                onClick={stock != 0 ? () => setIsPledgeModalOpen(true) : null}
                aria-label="reward button"
                aria-hidden='false'>
                {stock > 0 ? `Select Reward` : `Out of Stock`}
            </button>

            {isPledgeModalOpen && createPortal(
                <div className="modal-container">
                    <PledgeModal cards={cards} closeModal={closeModal} />
                </div>,

                document.body,
            )}
        </>
    )
}

export default RewardButton