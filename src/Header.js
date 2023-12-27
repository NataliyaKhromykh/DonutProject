import logo from './logo.png';
import cart from './cart.png';
import React from 'react';
import {
BrowserRouter as Router,
 Routes,
 Route,
 Link
} from "react-router-dom";
import CartPage from './Components/Cart/CartPage'


function Header() {

    return <Router>

    <nav className='headerAllComponents'>

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
            <Link to="/cartpage">
         <button className='myCartButton'>
        <div>My cart </div><div><img src={cart} width="30px" alt='cart'/></div>
        </button>
        </Link>
        </div>
    </nav>
    <Routes>
        <Route path='/cartpage' element={<CartPage/>}/>
    </Routes>
    </Router>

}
export default Header;





