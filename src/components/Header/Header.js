import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import useModalData from '../../hooks/useModalData';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';
import { useEffect } from 'react';


const Header = () => {
    const { modalShow, setModalShow, signUp, setSignUp } = useModalData();
    const { user } = useAuth();

    const history = useHistory();
    const location = useLocation();

    //Showing a message if user tries to REGISTER STORE without authenticating him/her. 
    //Using the modal count to avoid showing modal multiple times on refresh/reload
    useEffect(() => {
        for (let i = 0; i < location.modalCount; i++) {
            if (!user.email && (location?.state?.from?.pathname) === '/register-store') {
                swal("Login / Sign Up", "Please login to register your store", "warning");
            }
        }
    }, [location])

    return (
        // Website Top Navigation Bar
        <Navbar className="shadow-lg pt-lg-3" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold pe-1" href="/">
                    MakeMy<span className="text-success">Complaint</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavLink className="text-decoration-none ms-lg-2 me-lg-3" exact to="/"
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
                    {
                        user?.email
                            ?
                            <Nav className="ms-auto d-flex align-items-center mt-1 mt-lg-0">
                                <Button onClick={() => {
                                    history.push('/register-store')
                                }} className="me-lg-3" variant="outline-success">Register your store <FontAwesomeIcon icon={faStore} />
                                </Button>
                                <Button onClick={() => history.push('/dashboard')} className="mt-2 mt-lg-0 rounded-pill" variant="dark">Dashboard <FontAwesomeIcon icon={faSignInAlt} /></Button>
                            </Nav>
                            :
                            <Nav className="ms-auto d-flex align-items-center mt-1 mt-lg-0">
                                <Button onClick={() => history.push('/register-store')} className="me-lg-3" variant="outline-success">Register your store <FontAwesomeIcon icon={faStore} />
                                </Button>
                                <Button onClick={() => setModalShow(true)} className="mt-2 mt-lg-0" variant="dark">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                            </Nav>
                    }

                    <Modal
                        show={modalShow}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >

                        <Modal.Body>
                            {
                                signUp
                                    ?
                                    <SignUp
                                        setModalShow={setModalShow}
                                        setSignUp={setSignUp}
                                    ></SignUp>
                                    :
                                    <Login
                                        setModalShow={setModalShow}
                                        setSignUp={setSignUp}
                                    ></Login>
                            }
                        </Modal.Body>

                    </Modal>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;