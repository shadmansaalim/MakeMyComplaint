import React from 'react';
import './Header.css';
import { Navbar, Container, Nav, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';




const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [signUp, setSignUp] = useState(false);


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
                        <NavLink className="text-decoration-none ms-lg-2 me-lg-3" exact to="/"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>Home</NavLink>
                        <NavLink className="text-decoration-none me-lg-3" exact to="/courses"
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
                        <NavLink className="text-decoration-none me-lg-3" exact to="/developer"
                            style={{ color: '#161c2d' }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "black"
                            }}>Contact</NavLink>
                    </Nav>
                    <Nav className="ms-auto d-flex align-items-center mt-1 mt-lg-0">
                        <Button className="me-lg-3" variant="outline-success">Register your store <FontAwesomeIcon icon={faStore} />
                        </Button>
                        <Button onClick={() => setModalShow(true)} className="mt-2 mt-lg-0" variant="dark">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                    </Nav>

                    <Modal
                        show={modalShow}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        style={{
                            zIndex: 100000000000000
                        }}
                    >

                        <Modal.Body>
                            {
                                signUp
                                    ?
                                    <section>
                                        <span aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 20,
                                                fontSize: 30,
                                                color: 'black',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setModalShow(false)}
                                        >&times;</span>
                                        <div className="container">
                                            <div className="offset-xl-1  p-5 rounded-3 mx-auto">
                                                <form>

                                                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3">
                                                        <h4 className="mb-0 signup-text order-2 order-lg-1">Create your account today</h4>
                                                        <h5 className="mb-0 fw-bold order-1 order-lg-2 mb-3 mb-lg-0">
                                                            MakeMy<span className="mb-0 text-success">Complaint</span>
                                                        </h5>
                                                    </div>

                                                    <div className="form-floating mb-3">
                                                        <input
                                                            name="name"
                                                            type="text" className="form-control" id="floatingSignUpName" />
                                                        <label htmlFor="floatingSignUpName">Name</label>
                                                    </div>

                                                    <div className="form-floating mb-3">
                                                        <input
                                                            name="email"
                                                            type="email" className="form-control" id="floatingSignUpEmail" placeholder="name@example.com" />
                                                        <label htmlFor="floatingSignUpEmail">Email address</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            name="password"
                                                            type="password" className="form-control" id="floatingSignUpPassword1" placeholder="Password" />
                                                        <label htmlFor="floatingSignUpPassword1">Password</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            name="password"
                                                            type="password" className="form-control" id="floatingSignUpPassword2" placeholder="Password" />
                                                        <label htmlFor="floatingSignUpPassword2">Confirm Password</label>
                                                    </div>

                                                    <div className="text-center text-lg-start mt-4 pt-2">
                                                        <Button type="submit" variant="success">Sign Up <FontAwesomeIcon icon={faSignInAlt} /></Button>
                                                        <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?
                                                            <span className="link-danger ms-1 text-decoration-underline"
                                                                style={{
                                                                    cursor: 'pointer'
                                                                }}
                                                                onClick={() => setSignUp(false)}
                                                            >Login </span>
                                                        </p>

                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                    </section>
                                    :
                                    <section>
                                        <span aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 20,
                                                fontSize: 30,
                                                color: 'black',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => setModalShow(false)}
                                        >&times;</span>
                                        <div className="container">
                                            <div className="offset-xl-1  p-5 rounded-3 mx-auto">
                                                <form>
                                                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                                        <button type="button" className="btn btn-outline-success rounded-circle mx-1">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </button>

                                                        <button type="button" className="btn btn-outline-success rounded-circle mx-1">
                                                            <i className="fab fa-google"></i>
                                                        </button>

                                                        <button type="button" className="btn btn-outline-success rounded-circle mx-1">
                                                            <i className="fab fa-twitter"></i>
                                                        </button>
                                                    </div>


                                                    <div className="divider d-flex align-items-center my-4">
                                                        <p className="text-center fw-bold mx-2 mb-0" style={{ color: 'rgb(69, 82, 110)' }}>OR</p>
                                                    </div>


                                                    <div className="form-floating mb-3">
                                                        <input
                                                            name="email"
                                                            type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com" />
                                                        <label htmlFor="floatingLoginEmail">Email address</label>
                                                    </div>
                                                    <div className="form-floating mb-4">
                                                        <input
                                                            name="password"
                                                            type="password" className="form-control" id="floatingLoginPassword" placeholder="Password" />
                                                        <label htmlFor="floatingLoginPassword">Password</label>
                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center">

                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                            <label className="form-check-label" htmlFor="form2Example3">
                                                                Remember me
                                                            </label>
                                                        </div>
                                                        <a href="#!" className="text-body">Forgot password?</a>
                                                    </div>

                                                    <div className="text-center text-lg-start mt-4 pt-2">
                                                        <Button type="submit" variant="dark">Login <FontAwesomeIcon icon={faSignInAlt} /></Button>
                                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                                            <span className="link-danger ms-1 text-decoration-underline"
                                                                style={{
                                                                    cursor: 'pointer'
                                                                }}
                                                                onClick={() => setSignUp(true)}
                                                            >Sign Up </span>
                                                        </p>

                                                    </div>

                                                </form>
                                            </div>

                                        </div>
                                    </section>
                            }
                        </Modal.Body>

                    </Modal>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;