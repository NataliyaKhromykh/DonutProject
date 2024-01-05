
import map from './map.png';

function Contacts() {
    return(
        <div>
        <div className="footerBox">
            <div>
                <h1 className='footerh1'>Contact Our Team:</h1>
                <p>+1 (555) 777-99-00;</p>
                <p>Orange Street 17,</p>
                <p>Orlando, FL, USA</p>
                <p className='info'>Instagram</p>
                <p className='info'>What's App</p>
            </div>
            <div>
                <h1 className='footerh1'>Open Hours</h1>
                <p>Mon - Fri:</p>
                <p>7am - 7pm</p>
                <p>Sat - Sun:
                <p>7am - 5pm</p>
                </p>
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