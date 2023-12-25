import Filter from "./Filter";

function AllCategories(){
    return (
        <div className="categoryLine">
            <h1>Choices choices choices...</h1>
            <div className="categoryNames">
            {['All', 'Sweet donuts', 'Savory donuts', 'Ice Cream']
            .map(category => <Filter category={category}/>)}
            </div>
        
        </div>
    )
}
export default AllCategories;