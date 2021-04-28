import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviewsData, setReviewsData] = useState([]);
    
    useEffect(() => {
       fetch('https://agile-springs-09657.herokuapp.com/reviews')
       .then(res => res.json())
       .then(data => setReviewsData(data))
    }, [])
    return (
        <div className="container">
            <div className="col-md-6 col-sm-12  text-center m-auto my-5">
                <h1>Testimonial</h1>
                <p>Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.</p>
            </div>
            <div className="row">
            {
               reviewsData.map(reviewInfo => <ReviewCard reviewInfo ={reviewInfo}></ReviewCard>)
           }
            </div>
           
        </div>
    );
};

export default Review;