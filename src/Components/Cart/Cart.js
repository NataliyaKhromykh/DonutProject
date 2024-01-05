import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalQuantity } from "../../redux/cartSlice";
import './style.css';

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalQuantity = useSelector(getTotalQuantity)
return(
        <div className="modal_content">
                <div><h3>Your bag: <span>{totalQuantity}</span> item(s)</h3></div>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        <div className="totalPrice"><h3>TOTAL: ${totalPrice}</h3>
        <button className="payButton">I'm ready to pay</button>
        </div>

        </div>)

}

export default Cart;