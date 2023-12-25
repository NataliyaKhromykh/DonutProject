import logo from './logo.png';
import Cart from './Components/Cart/Cart';

function Header() {
    return(<div className='headerAllComponents'>

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
        <Cart/>
        </div>
    </div>)

}
export default Header;