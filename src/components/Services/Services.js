import React, {useEffect, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import ServicesDetail from "../ServicesDetail/ServicesDetail";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://agile-springs-09657.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container fluid={true} className="service-bg text-center p-5" style={{marginTop: '100px'}}>
                <Container>
                <div className="col-md-6 col-sm-12 text-center m-auto my-5">
                <h1>Our Services</h1>
                <p>Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet.</p>
            </div>
                    <Row>
                        {
                            services.map(service  => <ServicesDetail service={service} key={service._id}> </ServicesDetail>)
                        }
                    </Row>
                </Container>
            </Container>
    );
};

export default Services;