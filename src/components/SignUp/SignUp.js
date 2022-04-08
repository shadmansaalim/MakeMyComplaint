import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { useHistory } from 'react-router';

const SignUp = ({ setModalShow, setSignUp }) => {
    const [signUpData, setSignUpData] = useState({});
    const { registerUser } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignUpData = { ...signUpData };
        newSignUpData[field] = value;
        setSignUpData(newSignUpData);
    }

    const handleSignUpSubmit = e => {
        if (signUpData.password !== signUpData.password2) {
            swal("Passwords doesn't match!", "Please check password and then try again", "error");
        }
        else {
            setModalShow(false);
            registerUser(signUpData.name, signUpData.email, signUpData.password, history);
            e.target.reset();
        }

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
                    <form onSubmit={handleSignUpSubmit}>

                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3">
                            <h4 className="mb-0 signup-text order-2 order-lg-1">Create your account today</h4>
                            <h5 className="mb-0 fw-bold order-1 order-lg-2 mb-2 mb-lg-0">
                                MakeMy<span className="mb-0 text-success">Complaint</span>
                            </h5>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                onBlur={handleOnBlur}
                                name="name"
                                type="text" className="form-control" id="floatingSignUpName" />
                            <label htmlFor="floatingSignUpName">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                onBlur={handleOnBlur}
                                name="email"
                                type="email" className="form-control" id="floatingSignUpEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingSignUpEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                onBlur={handleOnBlur}
                                name="password"
                                type="password" className="form-control" id="floatingSignUpPassword1" placeholder="Password" />
                            <label htmlFor="floatingSignUpPassword1">Password</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                onBlur={handleOnBlur}
                                name="password2"
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
    );
};

export default SignUp;