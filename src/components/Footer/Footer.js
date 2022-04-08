import React from 'react';

const Footer = () => {
    return (


        <footer
            className="text-center text-lg-start bg-dark"
        >
            <section className="bg-dark text-white p-5">
                <div className="container text-center text-md-start ">
                    <div className="row ">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h5 className="fw-bold"> MakeMy<span className="text-success">Complaint</span></h5>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                A platform where you can share your buying experience and can get quick solution of your problem.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold">Rules</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                <a href="#!" className="text-white">Terms & Condition</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Privacy Policies</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Customer FAQ</a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold">Stores</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>
                                <a href="#!" className="text-white">Register your store</a>
                            </p>
                            <p>
                                <a href="#!" className="text-white"></a>
                            </p>
                            <p>
                                <a href="#!" className="text-white">Become a case officer</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 className="text-uppercase fw-bold">Contacts
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px', backgroundColor: 'rgb(33, 37, 41)', height: '2px' }}
                            />
                            <p>shadmansaalim321@gmail.com</p>
                            <p>makemycomplaint@facebook.com</p>
                            <p>makemycomplaint@instagram.com</p>
                            <p>makemycomplaint@twitter.com</p>
                        </div>

                    </div>

                </div>
            </section>

            <div
                className="text-center text-white p-3 bg-success"
            >
                <small>© 2022 Copyright Application Developed by MakeMyComplaint Team</small>
            </div>

        </footer>
    );
};

export default Footer;