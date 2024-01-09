import Dish from "./Dish";
import dataDonuts from "../../data/dataDonuts";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";


function Dishes(){
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="donutsLine">
            {dataDonuts
            .filter(dish => {
                if (selectedCategory === 'All') return true;
                return selectedCategory === dish.category;
            }
            )
            .map(dish => <Dish key={dish.id} dish={dish}/>)}
        </div>
    )
}
export default Dishes;