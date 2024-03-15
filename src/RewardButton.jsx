import { createPortal } from "react-dom"
import PledgeModal from "./PldgeModal";
import React, { useState } from "react"


function RewardButton({ cards, stock, title, completeState }) {
    const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

    function openModal() {
        if (stock > 0) {
            setIsPledgeModalOpen(true);
        }
    }

    function closeModal() {
        setIsPledgeModalOpen(false);
    }

    
    return (
        <>
            <button className={stock > 0 ? 'reward-button' : 'out-of-stock-button'}
                onClick={openModal}
                aria-label="reward button"
                aria-hidden={isPledgeModalOpen ? 'true' : 'false'}>
                {stock > 0 ? `Select Reward` : `Out of Stock`}
            </button>

            {isPledgeModalOpen && createPortal(
                <div className="modal-container">
                    <PledgeModal cards={cards} title={title} stock={stock}
                        closeModal={closeModal}
                        completeState={completeState} />
                </div>,

                document.body,
            )}
        </>
    )
}

export default RewardButton