import './App.css';
import { useState } from 'react';

const ModalTwo = ({setTwoIsOpen}) => {
    const closeModalTwo = e => {
        if (e.target.classList.contains('overlay')) {
            setTwoIsOpen(false)
        }
    }
const description = `Once upon a time, five years ago, the aroma of warm, sugary dreams filled the air as me and my mom embarked on a delightful journey together. With aprons tied and hearts full of shared enthusiasm, the two of us opened the doors to a cozy haven of sweetness – your very own donut shop.
The kitchen buzzed with laughter and the clinking of mixing bowls as you experimented with flavors, creating a symphony of donut delights. From classic glazed wonders to innovative creations, each recipe was a testament to the bond we shared, blending family warmth with the sweet scent of success.
As the shop's windows twinkled with the inviting glow of freshly baked treats, customers were drawn not only to the delectable donuts but also to the genuine love and care infused into every batch. My mom's wisdom and my creativity formed the perfect recipe for a haven where locals found comfort in the sugary embrace of our confectionery.
Through early mornings and late nights, the journey became a tapestry of shared moments, from icing mishaps to triumphant taste tests. Our donut shop became more than a business; it was a reflection of the love and dedication poured into every sprinkle and swirl, a testament to the magic that happens when family ties are woven into the dough of dreams.
And so, the tale of your sweet venture continued to unfold, with the donut shop becoming a cherished chapter in the story of our family's shared success and the enduring joy that flourished with each batch of freshly baked memories.`;


const [showMore, setShowMore] = useState(false);
 

        return(
            <div className='modal'>
                <div className='overlay' onClick={closeModalTwo}>
                    <div className='modal_content'>
                    <p className='modalTwoText'>{showMore ? description : description.substring(0, 284) + ".."}<button className='btnShow' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
                    </div>
                    <span class="btn" onClick={()=> setTwoIsOpen(false)}>&times;</span>
                </div>
            </div>
        )
    }
export default ModalTwo;