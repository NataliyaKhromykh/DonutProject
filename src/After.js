import fast from './fast.png';
import time from './time.png';
import fresh from './fresh.png';
import newitem from './new.png';

function After() {

    return(
        <div className='reasonsContainer'>
            <div className='reasonCard'>
                <div> <img src={time} width="60px" alt='time'/></div>
                <div><h3 className='reasonText'>we cook fast</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img src={fresh} width="60px" alt='fresh'/></div>
                <div><h3 className='reasonText'>only fresh ingredients</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img src={fast} width="60px" alt='fast'/></div>
                <div><h3 className='reasonText'>fast delivery</h3></div>
            </div>
            <div className='reasonCard'>
                <div> <img src={newitem} width="60px" alt='newitem'/></div>
                <div><h3 className='reasonText'>new donut every month</h3></div>
            </div>
        </div>
    )
}
export default After;