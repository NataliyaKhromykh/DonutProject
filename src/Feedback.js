import React from "react";
import Review from "./Review";


function Feedback() {
    return (
        <div className="feedbackMain">
        <div>
                <div className="feedbackText">
                    <p>Our Happy Customers</p>
                </div>
                <Review/>
        </div>
        </div>
    )
}
export default Feedback;