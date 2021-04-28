import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import memberOne from '../../img/testimonial-1.jpg'
import memberTwo from '../../img/testimonial-2.jpg'
import memberThree from '../../img/testimonial-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './OurTeam.css';

const teamData = [
    {
        image: memberOne,
        name: 'Robert Gibson',
        Designation: 'Senior Attorney',
        Description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in.',
    },
    {
        image: memberTwo,
        name: 'Steave Tikolo',
        Designation: 'Junior Attornery',
        Description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in.',
    },
    {
        image: memberThree,
        name: 'Tinna Sheets',
        Designation: 'Senior Attorney',
        Description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in.',
    }
]

const OurTeam = () => {
    return (
        <Container className="text-center p-5 mb-5" style={{ marginTop: '80px' }}>
            
            <h1 className="team-sub-title">Meet The Attorneys</h1>
            <Row>
                {
                    teamData.map(data =>
                        <Col lg={4} md={6} sm={12}>
                            <img className="team-img" src={data.image} alt="" />
                            <h4 className="mt-3">{data.name}</h4>
                            <h6>{data.Designation}</h6>
                            <p className="text-des">{data.Description}</p>
                            <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                            <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default OurTeam;