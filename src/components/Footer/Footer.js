import React, { Fragment } from 'react';
import { Col, Container, Row, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseDamage, faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faCcVisa, faCcMastercard, faCcPaypal, faCcStripe} from "@fortawesome/free-brands-svg-icons";
import  logo from '../../img/logo-adalat.png';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <Fragment>
            <Container fluid={true} className="footerBg">
                <Container>
                    <Row>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="mt-5"> <img src={logo} alt=""/> </h1>
                            <p className="tagTitle">Increasing my knowledge in <br/> computer science
                                fields  and <br/> new technologies especially, <br/> web development and <br/> web
                                Design field.</p>
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">My Account</h1>
                            <Link className="footerDes" to="/noMatch">My Account</Link> <br />
                            <Link className="footerDes" to="/login">Login/Register</Link> <br />
                            <Link className="footerDes" to="/noMatch">Cart</Link> <br />
                            <Link className="footerDes" to="/noMatch">Wishlist</Link> <br />
                            <Link className="footerDes" to="/noMatch">Order History</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Support</h1>
                            <Link className="footerDes" to="/noMatch">How To Shop</Link> <br />
                            <Link className="footerDes" to="/noMatch">Payment</Link> <br />
                            <Link className="footerDes" to="/noMatch">Returns</Link> <br />
                            <Link className="footerDes" to="/noMatch">Delivery</Link> <br />
                            <Link className="footerDes" to="/noMatch">Privacy Policy</Link> <br />
                            <Link className="footerDes" to="/noMatch">Terms & Condition</Link> <br />
                        </Col>
                        <Col lg={3} md={4} sm={12} className="text-justify">
                            <h1 className="footerTitle">Address</h1>
                            <div className="footerAddress">
                                <p> <FontAwesomeIcon icon={faHouseDamage} /> 192 High court street, usa.</p>
                                <p> <FontAwesomeIcon icon={faEnvelope} /> contact@adalat.co</p>
                                <p> <FontAwesomeIcon icon={faMobileAlt} /> +88 1911044348</p>
                            </div>
                            <div className="iconList">
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcVisa} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcMastercard} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcPaypal} /></span>
                                <span className="footerIcon"><FontAwesomeIcon icon={faCcStripe} /></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="endBorder py-3 mt-5 text-center text-light">
                  <small>Copyright © 2021 Adalat. All Rights Reserved</small>
                </Container>
            </Container>
        </Fragment>
    );
};

export default Footer;