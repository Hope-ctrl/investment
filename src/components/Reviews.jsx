

import { useState } from "react";
import { ReviewCard } from "./Cards";

const Reviews = ()=>{
    const [showReview, setShowReview] = useState(1)

const handleReview = ()=>{
        if(showReview < 4){
            setShowReview(showReview + 1)
        }else{
            setShowReview(1)
        }
}
 return(
    <div className="w-full h-[50vh] grid-cols-1 grid place-items-center transition-all duration-[0.5s] ease-in-out">
        {
            showReview == 1 && <ReviewCard name="simon toll" review="A very strong program. honest, professional, and very puntual with payments." location='Arizona' onclick = {handleReview}/>
        }
        {
            showReview == 2 && <ReviewCard name="jhon doe" review="A thoroughbred company with a first class package. A business unparalleled with many satisfied clients." location='Ohio' onclick = {handleReview}/>
        }
        {
            showReview == 3 && <ReviewCard name="Loren Sat" review="Living Wealth Investment consist of people with passion and above all experience in their field. A fantastic investment and all round service. Pleasure to be a client." location='New York' onclick = {handleReview}/>
        }
        {
            showReview == 4 && <ReviewCard name="Liana Brum" review="Support team will answer all my questions, help me operate the website and explain any ambiguities.!." location='Oklahoma' onclick = {handleReview}/>
        }
    </div>
 )
}

export default Reviews;