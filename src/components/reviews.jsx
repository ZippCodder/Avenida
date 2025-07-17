import React from "react";
import "../../public/styles/styles.css";
import "../../public/styles/reviews.css";
import ReviewProfile1 from "/public/images/photos/review-profile-1.png";
import ReviewProfile2 from "/public/images/photos/review-profile-2.png";
import ReviewProfile3 from "/public/images/photos/review-profile-3.png";

export default function Reviews() {
 return (
   <section className="reviews">
    <h2 className="reviews__heading">A few words from Our Satisfied Clients!</h2>
    <div className="review">
     <h3 className="review__name">Stephanie Davies</h3><img className="review__profile" src={ReviewProfile1}></img>
     <q className="review__quote">Centro was a huge help, landed my first full-time job in my feild after I graduated, couldn't be happier!</q>
     <div className="review__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><p>- 3</p></div>
    </div> 
    <div className="review">
     <h3 className="review__name">Dante Willis</h3><img className="review__profile" src={ReviewProfile2}></img>
     <q className="review__quote">Centro helped me finally get the position I was hoping for after months of job-searching. Definitely a life-saver.</q>
     <div className="review__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><p>- 3</p></div>
    </div> 
    <div className="review">
     <h3 className="review__name">David Ibarra</h3><img className="review__profile" src={ReviewProfile3}></img>
     <q className="review__quote">Managed to get referred after a friend recommended I give Centro a try so it was worth the investment!</q>
     <div className="review__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><p>- 2.8</p></div>
    </div> 
   </section>
 )
}
