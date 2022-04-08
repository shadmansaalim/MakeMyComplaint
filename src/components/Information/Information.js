import React from 'react';
import './Information.css';


const Information = () => {
    return (
        <div className="mb-5">
            <div className="col-md-10 mx-auto row">
                <div className="text-start col-xl-6">
                    <div className="mb-5">
                        <h3 className="fw-bold">Making a complaint just got easier</h3>
                        <p>No more asking around when it comes to make a complaint. MakeMyComplaint is the place for sharing your buying experience and resolving it.</p>
                    </div>
                    <div>
                        <div className="mb-3">
                            <span className="d-flex align-items-center mb-2">
                                <span className="fs-3">🏬</span><h5 className="fw-bold mb-0 ms-2">Find a store</h5>
                            </span>
                            <p>We've registered over 1,000 stores across Australia. Search for the store you are looking for and get started.</p>
                        </div>
                        <div className="mb-3">
                            <span className="d-flex align-items-center mb-2">
                                <span className="fs-3">😕</span><h5 className="fw-bold mb-0 ms-2">Make a complaint</h5>
                            </span>
                            <p>Share your buying experience with us and we will forward it to the manager.</p>
                        </div>
                        <div>
                            <span className="d-flex align-items-center mb-2">
                                <span className="fs-3">🌎</span><h5 className="fw-bold mb-0 ms-2">Help the consumer community</h5>
                            </span>
                            <p>Your feedback will help other consumers to know how good are the stores at handling complaints.</p>
                        </div>
                    </div>
                </div>
                <div className="shadow p-4 rounded-3 col-xl-6 mt-4 mt-xl-0">
                    <ul id="progressbar">
                        <li className="active" id="account"></li>
                        <li id="personal"></li>
                        <li id="payment"></li>
                        <li id="confirm"></li>
                    </ul>

                    <div className="text-start col-xl-8">
                        <div className="mb-4">
                            <h5 className="fw-bold">Provide <span className="text-success me-2">Receipt ID</span>    <span className="fs-3">🧾</span></h5>
                            <p>Providing the receipt id will help us to track your item.</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold">Provide <span className="text-success me-2">Purchase Date</span><span className="fs-3">📅</span></h5>
                            <p><p>Providing the purchase date will help us to check whether you are able to make a complaint.</p></p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold">Provide <span className="text-success me-2">Item Name</span><span className="fs-3">📦</span></h5>
                            <p>Providing the item name will help us to look for that item.</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fw-bold">Provide <span className="text-success me-2">Complaint Description</span><span className="fs-3">✍️</span></h5>
                            <p>Providing a detailed complaint description will help us to evaluate the case.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Information;