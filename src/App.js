import After from './After';
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filters/AllCategories';
import Contacts from './Contacts';
import Feedback from './Feedback';
// import Header from './Header';
// import MainPage from './MainPage';
import MainPicture from './mainPicture.png'

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
    <img className='logoDonut' src={logo} alt='logo'/>
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


<Link className='link' to='/#products_section'><p className='choose'>Products</p></Link>
<Link className='link' to='/#contacts_section'><p className='choose'>Contacts</p></Link>






    <div>
    <p onClick={() => setTwoIsOpen(true)} className='choose'>Our Story</p>
    {twoIsOpen &&
        <ModalTwo setTwoIsOpen={setTwoIsOpen}>
        </ModalTwo>}
    </div>
    <button onClick={() => setIsOpen(true)} className='myCartButton'>
 <div>My cart </div><div><img className='logoCart' src={cart}  alt='cart'/><span className='cartNumber'>{totalQuantity}</span></div></button>
 {isOpen && 
 <Modal setIsOpen={setIsOpen}>
 <Cart setIsOpen={setIsOpen}/>
 </Modal>}
</div>

</div>
<div className='mainPageContainer'>
            <div className='mainTextContainer'>
            <h2>Grab some more of these</h2>
            <h1 className='LoveDonuts'>Happy Donuts!</h1>
            <p className='textAfter'>Huge Collection of savory and sweet Donuts <br/> with our without Ice Cream</p>
            <div>
            <Link className='link' to='/#products_section'><button className='myCartButton order'>
                    Order Now
                </button></Link>
            </div>
            </div>
            <div className='mainPicContainer'>
            <img className='mainPicture' src={MainPicture} alt='mainpic'/>
            </div>
        </div>
    </div>

      <After/>
      <section id='products_section'>
      <AllCategories/>
      </section>
      <Dishes/>


      <Feedback/>
      <section id='contacts_section'>
      <Contacts/>
      </section>

    </div>
  );
}

export default App;
