import After from './After';
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filters/AllCategories';
import Contacts from './Contacts';
import Feedback from './Feedback';
// import Header from './Header';
import MainPage from './MainPage';

import logo from './logo.png';
import cart from './cart.png';
import { useState } from 'react';
import Modal from './Components/Cart/Modal';
import Cart from './Components/Cart/Cart';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './redux/cartSlice';
import ModalTwo from './ModalTwo';
import { HashLink as Link } from 'react-router-hash-link';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);
  return (
    <div className="App">
      <div className='mainFP'>
      {/* <Header/> */}
      <div className='headerAllComponents'>

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

<nav>
<Link to='/#products_section'><p className='choose'>Products</p></Link>
<Link to='/#contacts_section'><p className='choose'>Contacts</p></Link>
</nav>





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


      <MainPage/>
    </div>

      <After/>

      <AllCategories/>
<section id='products_section'>
      <Dishes/>
      </section>

      <Feedback/>
      <section id='contacts_section'>
      <Contacts/>
      </section>

    </div>
  );
}

export default App;
