import Filter from "./Filter";

function AllCategories(){
    return (
       <section id='products_section' className="categoryLine">
            <h1>Choices choices choices...</h1>
            <div className="categoryNames">
            {['All', 'Sweet donuts', 'Savory donuts', 'Ice Cream']
            .map(category => <Filter key={category}  category={category}/>)}
            </div>
        
        </section>
    )
}
export default AllCategories;