import './style.css';
import dataDonuts from '../../data/dataDonuts';
import deleteIcon from './deleteIcon.png'
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem({cartItem}) {
    const dishes = dataDonuts.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(
        <div  className="content">
            <div className='cartItemName'><p>{dishes.name}</p></div>
            <p>{cartItem.quantity}</p>
            <p>Price: ${dishes.price * cartItem.quantity}</p>
            <span className='deleteSpan' onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img src={deleteIcon} className='deleteIcon' alt='deleteIcon'/>
            </span>
        </div>
    );
}
export default CartItem;