import './style.css';

const ModalCart = ( {setIsOpenCart, children} ) => {
    const closeModal = e => {
    if (e.target.classList.contains('overlay')) {
        setIsOpenCart(false)
    }
}
    return(
        <div className='modal'>
            <div className='overlay' onClick={closeModal}>
                {children}
                <span class="btn" onClick={()=> setIsOpenCart(false)}>&times;</span>
            </div>
        </div>
    )
}
export default ModalCart;