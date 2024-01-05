import logo from './logo.png';
import cart from './cart.png';
import { useState } from 'react';
import Modal from './Components/Cart/Modal';
import Cart from './Components/Cart/Cart';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './redux/cartSlice';
import ModalTwo from './ModalTwo';



function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [twoIsOpen, setTwoIsOpen] = useState(false);
    const totalQuantity = useSelector(getTotalQuantity);

    return (<div className='headerAllComponents'>

        <div className='logoComponents'>
            <div>
            <img src={logo} width="45px" alt='logo'/>
            </div>
            <div className='logoName'>
                <div>
                <p>Happy</p>
                </div>
                <div className='donutWord'>
                <h3>Donuts</h3>
                </div>
            </div>
</div>
<div className='headerItems'>
            <p className='choose'>Products</p>
            <p className='choose'>Contacts</p>
            <div>
            <p onClick={() => setTwoIsOpen(true)} className='choose'>Our Story</p>
            {twoIsOpen &&
                <ModalTwo setTwoIsOpen={setTwoIsOpen}>
                </ModalTwo>}
            </div>
            <button onClick={() => setIsOpen(true)} className='myCartButton'>
         <div>My cart </div><div><img src={cart} width="30px" alt='cart'/></div><span className='cartNumber'>{totalQuantity}</span></button>
         {isOpen && 
         <Modal setIsOpen={setIsOpen}>
         <Cart setIsOpen={setIsOpen}/>
         </Modal>}
        </div>

    </div>
)

}
export default Header;





