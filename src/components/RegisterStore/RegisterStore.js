import React from 'react';
import './RegisterStore.css'
import registerStore from '../../images/registerStore.png';
import { Link } from 'react-router-dom';

const RegisterStore = () => {
    return (
        <div className="mb-5">
            <div className="bg-img d-flex justify-content-center align-items-center" >
            </div>
            <section className="mb-5" style={{
                marginTop: '-80px'
            }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-10 mt-4">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <h5 className="fw-bold mb-2">
                                        MakeMy<span className="mb-0 text-success">Complaint</span>
                                    </h5>
                                    <hr />
                                    <p className="text-center fw-bold">Register your store today and make it popular for customer service in the consumer community.</p>
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <section className="order-form text-start">
                                                <div className="row">
                                                    <form className="col-12">

                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <label className="order-form-label">Your Name</label>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <input type="text"
                                                                    className="order-form-input" placeholder="First" />
                                                            </div>
                                                            <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                                                <input type="text"
                                                                    className="order-form-input" placeholder="Last" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Store Name</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text"
                                                                    className="order-form-input" required placeholder="Store Name" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Your Email</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="email"
                                                                    className="order-form-input" required placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Phone</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="number"
                                                                    className="order-form-input" required placeholder="Phone" />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="order-form-label">ABN</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="number"
                                                                    className="order-form-input" required placeholder="Store ABN Number" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="order-form-label">Store Address</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text" className="order-form-input" placeholder="Store Address" />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" name="validation" id="validation" value="1" required />
                                                                    <label htmlFor="validation" className="form-check-label">I know what I need to know</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <button type="submit" id="btnSubmit" className="w-100 btn btn-success d-block mx-auto btn-submit">Register</button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>

                                            </section>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2 mx-auto">
                                            <img src={registerStore} className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegisterStore;