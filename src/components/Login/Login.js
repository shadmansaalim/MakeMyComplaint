import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ setModalShow, setSignUp }) => {
    const { loginUser, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const [loginData, setLoginData] = useState({});
    const [signInEmail, setSignInEmail] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        setModalShow(false);
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (
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
                    <form onSubmit={handleLoginSubmit}>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button type="button" className="btn btn-outline-success rounded-circle mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button
                                onClick={() => {
                                    setModalShow(false);
                                    signInWithGoogle(location, history);
                                }}
                                type="button" className="btn btn-outline-success rounded-circle mx-1">
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
                                onBlur={handleOnBlur}
                                name="email"
                                type="email" className="form-control" id="floatingLoginEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingLoginEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                onBlur={handleOnBlur}
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
    );
};

export default Login;