import React from 'react';
import './TopHeader.css';
const TopHeader = () => {
    return (
        <header className="bg-headerBanner">
    <div className="container">
        <div className="row d-flex justify-content-center align-items-center headerContent">
            <div className="content text-center col-7">
            <h1 className="text-light fw-bold">Professional Law Firm</h1>
            <p className="text-light">We are a leading law firm in country, with more 25 years of experience. We are representing
worlds largest business house working with biggest international law firms.</p>
<button className="btn btn-custom">CONTACT NOW</button>
            </div>
        </div>
    </div>
</header>
    );
};

export default TopHeader;