import React, {useState} from "react";
import feedback from "../data/dataFeedback";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import up from './../Assets/quotation-up-2.png';
import down from './../Assets/quotation-down.png';
import popup from './../Assets/popup.png';



const Review = () => {
    const [index,setIndex] = useState(0);
    const {name,image,text} = feedback[index];

    const checkNumber = (number) => {
        if(number > feedback.length -1){
            return 0;
        }
        if(number < 0) {
            return feedback.length -1;
        }
        return number;
    }
    const nextPerson = () =>{
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () =>{
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };


    return<div className="containerWArrows">
        <AiOutlineArrowLeft className="reviewArrow prevArrow" onClick={prevPerson}/>
        <article className="feedbackBox">
        <div className="img-container"> 
        <img src={image} alt={name} className="person-img"/>
        <h4 className='author'>{name}</h4>
        </div>
        <div className="text-container">  
        <span className="spanQuo up"><img className="quotationImg" src={up} alt="upquo"/></span>
        <p className='infoText'>{text}</p>
        <span className="spanQuo down"><img className="quotationImg" src={down} alt="downquo"/></span>
        </div>
        <span><img className="popup one" src={popup} alt="popupone"/></span>
        <span><img className="popup two" src={popup} alt="popuptwo"/></span>
        <span><img className="popup three" src={popup} alt="popupthree"/></span>
        <span><img className="popup four" src={popup} alt="popupfour"/></span>
        <span><img className="popup five" src={popup} alt="popupfive"/></span>
        <span><img className="popup six" src={popup} alt="popupsix"/></span>
        </article>
        <AiOutlineArrowRight className="reviewArrow nextArrow" onClick={nextPerson}/>
    </div>;
}
    

export default Review;