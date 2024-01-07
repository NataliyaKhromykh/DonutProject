import fast from './fast.png';
import time from './time.png';
import fresh from './fresh.png';
import newitem from './new.png';

function After() {

    return(
        <div className='reasonsContainer'>
            <div className='reasonCard'>
                <div> <img className='afterPic' src={time}  alt='time'/></div>
                <div><h3 className='reasonText'>we cook fast</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img className='afterPic' src={fresh}  alt='fresh'/></div>
                <div><h3 className='reasonText'>only fresh ingredients</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img className='afterPic' src={fast}  alt='fast'/></div>
                <div><h3 className='reasonText'>fast delivery</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img className='afterPic' src={newitem}  alt='newitem'/></div>
                <div><h3 className='reasonText'>new donut every month</h3></div>
            </div>
        </div>
    )
}
export default After;