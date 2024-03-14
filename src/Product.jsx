import logoMasterCraft from './assets/images/logo-mastercraft.svg'
import PledgeModal from "./PldgeModal";
import React, { useContext, useState } from 'react';
import { cardsMapContext } from './CrowdfundMain';
import { createPortal } from 'react-dom';

function Product({ completeState, completeCondition }) {
    const [bookmark, setBookmark] = useState(false);
    const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
    const cards = useContext(cardsMapContext);

    function closeModal() {
        setIsPledgeModalOpen(false);
    }


    return (
        <>
            <div className="mastercraft-container">
                <div className='mastercraft-logo'>
                    <img src={logoMasterCraft} alt="mastercraft logo" />
                </div>

                <div className='product-content'>
                    <h1 className='product-header'>
                        Mastercraft Bamboo Monitor Riser
                    </h1>
                    <p className='product-description'>
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                    </p>
                </div>

                <div className='back-project'>
                    <button className='backproject-button'
                        aria-label='back project button'
                        aria-hidden={isPledgeModalOpen ? "true" : "false"}
                        onClick={() => setIsPledgeModalOpen(true)}>Back this project
                    </button>

                    <button onClick={() => !bookmark ? setBookmark(true) : setBookmark(false)}
                        className='bookmare-button'
                        aria-label='bookmark button'
                    >

                        <svg className='bookmark-image' width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd"><circle fill={bookmark ? '#147b74' : "#2F2F2F"} cx="28" cy="28" r="28" />
                                <path fill={bookmark ? '#FFF' : "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z" /></g></svg>

                        <span
                            style={bookmark ? { color: '#147b74' } : null} >{bookmark ? 'Bookmarked' : 'Bookmark'}
                        </span>
                    </button>
                </div>
            </div >

            {isPledgeModalOpen && createPortal(
                <div className="modal-container">
                    <PledgeModal cards={cards} defaultTitle={cards.title}
                        closeModal={closeModal} completeState={completeState} />
                </div>,

                document.body,
            )
            }
        </>

    );
}

export default Product