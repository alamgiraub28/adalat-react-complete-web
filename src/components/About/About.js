import React from 'react';
import aboutPic from '../../img/about-pic.png';
import './About.css';

const About = () => {
    return (
        <div className="container shadow px-0 ps-5 aboutContainer bg-light">
            <div className="row aboutus-containe d-flex justify-content-center align-items-center">
                <div className="col-md-6 col-sm-12 my-5 px-5">
                    <h2 className="pb-3">ABOUT <span className="text-custom fw-bold">ADALAT</span></h2>
                    <p>Turned it up should no valley cousin he. Speaking numerous ask did
                    horrible packages set. Ashamed herself has distant can studiednes
                    Led therefore its middleton perpetual fulfilled provision frankness.
                    Small he drawn after among every three number of</p>
                    <p>
                        <span className="text-custom">✔ </span>  Expert Layer<br />
                        <span className="text-custom">✔ </span>  Quick Customer Service<br />
                        <span className="text-custom">✔ </span>  Fast Support<br />
                        <span className="text-custom">✔ </span>  Free Cost Counciling<br />
                    </p>
                    <button className="btn btn-custom mt-3">Read More</button>
                </div>
                <div className="col-md-6 col-sm-12 text-end "><img className="img-fluid" src={aboutPic} alt="" /></div>
            </div>
        </div>
    );
};

export default About;