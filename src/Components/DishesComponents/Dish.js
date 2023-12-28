import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";


const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div className="dishesComponents">
            <div className="dishCard">
            <div>
            <img className="dishImg" src={`./${dish.img}.jpg`} alt="dish"/>
            </div>
            <div>
            <h4>{dish.name}</h4>
            </div>
            <div className="dishPrice">
            <p>$ {dish.price}</p>
            </div>
            <div className="buttons">
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="addToCartButton" onClick={() => {dispatch(addItemToCart({dish, quantity}));
        }}>Add To Cart</button>
            </div>
            </div>
        </div>
    )
}
export default Dish;