import logoMasterCraft from './assets/images/logo-mastercraft.svg'
import bookmarksvg from './assets/images/icon-bookmark.svg'
import PledgeModal from "./PldgeModal";
import React, { useContext, useState } from 'react';
import { cardsMapContext } from './CrowdfundMain';
import { createPortal } from 'react-dom';

function Product() {
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
                    <button className='backproject-button' aria-label='back project button'
                        onClick={() => setIsPledgeModalOpen(true)}>Back this project</button>

                    <button onClick={() => !bookmark ? setBookmark(true) : setBookmark(false)} className='bookmare-button'
                        aria-label='bookmark button'>
                        <img className='bookmark-image' src={bookmarksvg} alt="" />
                        <span aria-checked={bookmark ? "true" : "false"}>{bookmark ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                </div>
            </div>

            {isPledgeModalOpen && createPortal(
                <div className="modal-container">
                    <PledgeModal cards={cards} closeModal={closeModal} />
                </div>,

                document.body,
            )}
        </>

    );
}

export default Product