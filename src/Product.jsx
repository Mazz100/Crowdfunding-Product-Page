import logoMasterCraft from './assets/images/logo-mastercraft.svg'
import bookmark from './assets/images/icon-bookmark.svg'
function Product() {
    return (
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
                <button className='backproject-button' aria-label='back project button'>Back this project</button>
                <button className='bookmare-button' aria-label='bookmark button'>
                    <img src={bookmark} alt="" />
                </button>
            </div>
        </div>
    );
}

export default Product