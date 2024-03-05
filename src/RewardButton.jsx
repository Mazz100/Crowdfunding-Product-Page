import React, { useRef, useState } from "react"
import { createPortal } from "react-dom"
import PledgeModal from "./PldgeModal";

function RewardButton({ cards }) {
    const [pledgeModal, setPledgeModal] = useState(false);
    const modalRef = useRef(null);

    function closeModal(){
        setPledgeModal(false);
    }

    return (
        <>
            <button className={cards.stock > 0 ? 'reward-button' : 'out-of-stock-button'}
                onClick={() => setPledgeModal(true)}
                aria-label="reward button"
                aria-expanded='false'>
                {cards.stock > 0 ? `Select Reward` : `Out of Stock`}
            </button>

            {pledgeModal && createPortal(
                <div className="modal-container">
                    <PledgeModal cards={cards} closeModal={closeModal} />
                </div>,
                document.body,
            )}
        </>
    )
}

export default RewardButton