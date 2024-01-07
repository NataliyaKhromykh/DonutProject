
import map from './map.png';

function Contacts() {
    return(
        <div>
        <div className="footerBox">
            <div className='contactAndHours'>
            <div>
                <h1 className='footerh1'>Contact Our Team:</h1>
                <p className='par'>+1 (555) 777-99-00;</p>
                <p className='par'>Orange Street 17,</p>
                <p className='par'>Orlando, FL, USA</p>
                <p className='info par'>Instagram</p>
                <p className='info par'>What's App</p>
            </div>
            <div>
                <h1 className='footerh1'>Open Hours</h1>
                <p className='par'>Mon - Fri:</p>
                <p className='par'>7am - 7pm</p>
                <p className='par'>Sat - Sun:</p>
                <p className='par'>7am - 5pm</p>
            </div>
            </div>
            <div>
                <h1 className='footerh1'>Get Directions</h1>
            <img className='map' src={map} alt='map'/>
            </div>
        </div>
        <div className='legal'>
        <p>Designed and developed by <a className='toMyPage' target='_blank' rel="noreferrer" href="https://nataliyakhromykh-webdeveloper.glitch.me/">Nataliya Khromykh</a> </p>
        <p>©️2024 All rights reserved. Website was developed for educational purposes and is not a real offer</p>
        </div>

        </div>
    )
}
export default Contacts;