import After from './MainPageComponents/After';
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filters/AllCategories';
import Contacts from './MainPageComponents/Contacts';
import Feedback from './MainPageComponents/Feedback';
import MainPicture from './Assets/mainPicture.png'
import cart from './Assets/cart.png';
import { useState } from 'react';
import ModalCart from './Components/Cart/ModalCart';
import Cart from './Components/Cart/Cart';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './redux/cartSlice';
import ModalStory from './MainPageComponents/ModalStory';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './MainPageComponents/Logo';


function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenStory, setIsOpenStory] = useState(false);
  const totalQuantity = useSelector(getTotalQuantity);
  return (
    <div className="App">
      <div className='mainFP'>

    <div className='headerAllComponents'>
<Logo/>
<div className='headerItems'>


<Link className='link' to='/#products_section'><p className='choose'>Products</p></Link>
<Link className='link' to='/#contacts_section'><p className='choose'>Contacts</p></Link>






    <div>
    <p onClick={() => setIsOpenStory(true)} className='choose'>Our Story</p>
    {isOpenStory &&
        <ModalStory setIsOpenStory={setIsOpenStory}>
        </ModalStory>}
    </div>
    <button onClick={() => setIsOpenCart(true)} className='myCartButton'>
 <div>My cart </div><div><img className='logoCart' src={cart}  alt='cart'/><span className='cartNumber'>{totalQuantity}</span></div></button>
 {isOpenCart && 
 <ModalCart setIsOpenCart={setIsOpenCart}>
 <Cart setIsOpenCart={setIsOpenCart}/>
 </ModalCart>}
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
      {/* <section id='products_section'> */}
      <AllCategories/>
      {/* </section> */}
      <Dishes/>


      <Feedback/>

      <Contacts/>

    </div>
  );
}

export default App;
