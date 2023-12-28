import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import './style.css';
// import { useState } from "react";

function Cart() {
    // const [isOpen, setIsOpen] = useState(true);
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
return(
        <div className="modal_content">
        {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
        <div className="totalPrice"><h3>TOTAL: ${totalPrice}</h3>
        <button className="payButton">I'm ready to pay</button>
        </div>

        {/* <button onClick={() => setIsOpen(false)}>Close</button> */}

        </div>)

}

export default Cart;