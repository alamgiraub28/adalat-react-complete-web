import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './Summary.css'

const Summary = () => {
    return (
        <div className="why-choose-bg py-5">
            <Container className="text-center py-4">
            <div className="col-md-6 col-sm-12  text-center m-auto my-5">
                <h1>Why Choose Us?</h1>
                <p>Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.</p>
            </div>
                <Row>
                    <Col lg={3} md={6} sm={12} >
                        <div className="bg-custom p-2 rounded">
                        <h1 className="planing-number">500+</h1>
                        <h5>Client Consultations</h5>
                        </div>
                       
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <div className="bg-custom p-2 rounded">
                        <h1 className="planing-number">95%</h1>
                        <h5>Successfull Case</h5>
                        </div>
                        
                        
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                    <div className="bg-custom p-2 rounded">
                    <h1 className="planing-number">35%</h1>
                        <h5>Case Dismissed</h5>
                    </div>
                        
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                    <div className="bg-custom p-2 rounded">
                    <h1 className="planing-number">04</h1>
                        <h5>Professinal Attorneys</h5>
                    </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Summary;