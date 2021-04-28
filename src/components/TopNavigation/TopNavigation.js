import React from 'react';
import {Container, Nav, Navbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import loggAdalat from '../../img/logo-adalat.png';
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        <>
            <Navbar className="navBackground" sticky="top" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto"><img src={loggAdalat} alt=""/></Nav>
                        <Nav>
                            <Link exact activeStyle={{color:'red'}} className="navItem" to="/">Home</Link>
                            <Link  className="navItem" to="/noMatch">About</Link>
                            <Link  className="navItem" to="/noMatch">Services</Link>
                            <Link  className="navItem" to="/admin">Dashboard</Link>
                            <Link  className="navItem" to="/noMatch">Testimonial</Link>
                            <Link  className="navItem" to="/noMatch">Contact</Link>
                            <Link  className="navItem" to="/login"><button className="btn btn-custom">Login</button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default TopNavigation;