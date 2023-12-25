import MainPicture from './mainPicture.png'
function MainPage() {
    return(
        <div className='mainPageContainer'>
            <div className='mainTextContainer'>
            <h2>Grab some more of these</h2>
            <h1 className='LoveDonuts'>Happy Donuts!</h1>
            <p className='textAfter'>Huge Collection of savory and sweet Donuts <br/> with our without IceCream</p>
            <div>
                <button className='myCartButton order'>
                    Order Now
                </button>
            </div>
            </div>
            <div className='mainPicContainer'>
            <img src={MainPicture} width="500px" alt='mainpic'/>
            </div>
        </div>

    )
}
export default MainPage;