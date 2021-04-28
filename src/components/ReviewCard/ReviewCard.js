import React from 'react';

const ReviewCard = ({reviewInfo}) => {
    return (
        <div className="col-md-4">
        <div className="border my-2 p-3 shadow rounded">
        <p className="text-center text-secondary">"{reviewInfo.description}"</p>
        <h2 className="text-center text-custom">{reviewInfo.name} <span className="fs-6  text-secondary">{reviewInfo.company}</span></h2>
        </div>
    </div>
    );
};

export default ReviewCard;