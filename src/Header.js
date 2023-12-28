import logo from './logo.png';
import cart from './cart.png';
import { useState } from 'react';
import Modal from './Components/Cart/Modal';
import Cart from './Components/Cart/Cart';



function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
            <p className='choose'>Our Story</p>
            <button onClick={() => setIsOpen(true)} className='myCartButton'>
         <div>My cart </div><div><img src={cart} width="30px" alt='cart'/></div></button>
         {isOpen && 
         <Modal setIsOpen={setIsOpen}>
         <Cart setIsOpen={setIsOpen}/>
         </Modal>}
        </div>

    </div>
)

}
export default Header;





