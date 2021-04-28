import React from 'react';
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import './ServicesDetail.css';

const ServicesDetail = (props) => {
    const {title, price, description, image, _id} = props.service;
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div className="service-card p-4 m-2">
                <img className="imgCustom" src={image} alt="" />
                    <h4 className="mt-2">{title}</h4>
                    <p>{description}</p>
                    <h4>${price}</h4>
                    <Link to={"/book/" + _id} ><Button className="btn-custom" >Get Service</Button></Link>
                </div>
            </Col>
        </>
    );
};

export default ServicesDetail;