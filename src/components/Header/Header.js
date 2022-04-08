import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faStore } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        // Website Top Navigation Bar
        <Navbar className="shadow-lg pt-lg-3" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold pe-1" href="/home">
                    MakeMy<span className="text-success">Complaint</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavLink className="text-decoration-none ms-lg-2 me-lg-3" exact to="/homr"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>Home</NavLink>
                        <NavLink className="text-decoration-none me-lg-3" exact to="/stores"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>Stores</NavLink>
                        <NavLink className="text-decoration-none me-lg-3" exact to="/about"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>About</NavLink>
                        <NavLink className="text-decoration-none me-lg-3" exact to="/contact"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>Contact</NavLink>
                    </Nav>
                    <Nav className="ms-auto d-flex align-items-center mt-1 mt-lg-0">
                        <Button className="me-lg-3" variant="outline-success">Register your store <FontAwesomeIcon icon={faStore} />
                        </Button>
                        <Button className="mt-2 mt-lg-0" variant="dark">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;