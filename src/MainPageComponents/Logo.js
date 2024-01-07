import logo from './../Assets/logo.png';
import './../App.css';

function Logo(){
    return(
<div className='logoComponents'>
    <div>
    <img className='logoDonut' src={logo} alt='logo'/>
    </div>
    <div className='logoName'>
        <div>
        <p>Happy</p>
        </div>
        <div className='donutWord'>
        <h3>Donuts</h3>
        </div>
    </div>
</div>
    )
}
export default Logo;