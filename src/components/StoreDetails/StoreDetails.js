import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './StoreDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Description from '../Description/Description';
import { Modal, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const StoreDetails = () => {
    const { id } = useParams();
    const [store, setStore] = useState({});
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    useEffect(() => {
        fetch(`https://pure-bastion-05518.herokuapp.com/store/${id}`)
            .then(res => res.json())
            .then(data => setStore(data));
    }, [])

    const bgStyle = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${store.cover}')`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '500px'
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const onSubmit = data => {
        data.store = store.name;
        data.managerEmail = store.email;
        data.customerName = user.displayName;
        data.customerEmail = user.email;

        fetch('https://pure-bastion-05518.herokuapp.com/complaint', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Complaint Sent To Store Manager", "Please wait until the manager gives an outcome", "success");
                    reset();
                    handleClose();

                }
            })
            .catch(error => {
                swal("Something Went Wrong", "Please try again", "error");
            })
    }

    return (
        <>
            {
                store.name && store.cover && store.logo
                    ?
                    <div className="mb-5 text-start">
                        <div style={bgStyle}></div>
                        <img src={store.logo} alt=""
                            className="ms-5 rounded-3 shadow"
                            width="130"
                            height="130"
                            style={{
                                marginTop: '-50px'
                            }}
                        />
                        <div className="my-3 d-flex justify-content-center align-items-center">
                            <button onClick={handleShow} className="btn btn-lg btn-dark ms-3 me-3">Make a complaint <FontAwesomeIcon icon={faScaleBalanced} /></button>
                            <a target="_blank" href={store.website} className="btn btn-lg btn-success">Visit Store <FontAwesomeIcon icon={faArrowTrendUp} /></a>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Please answer the following
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form className="col-12" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <div>
                                            <label className="register-form-label">Did you get the product or service that you asked for?</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question1" id="inlineRadio1" value="Yes"
                                                {...register("q1")}
                                                required />
                                            <label class="form-check-label" for="inlineRadio1" required>Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question1" id="inlineRadio2" value="No"   {...register("q1")}
                                                required />
                                            <label class="form-check-label" for="inlineRadio2" required>No</label>
                                        </div>

                                    </div>

                                    <div className="mt-3">
                                        <div>
                                            <label className="register-form-label">Is the product or service is faulty (not durable and defective) ?</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question2" id="inlineRadio3" value="Yes"
                                                {...register("q2")}
                                                required />
                                            <label class="form-check-label" for="inlineRadio3" required>Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question2" id="inlineRadio4" value="No"
                                                required
                                                {...register("q2")} />
                                            <label class="form-check-label" for="inlineRadio4" required>No</label>
                                        </div>

                                    </div>
                                    <div className="mt-3">
                                        <div>
                                            <label className="register-form-label">Is the product or service missing?</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question3" id="inlineRadio5" value="Yes"
                                                required
                                                {...register("q3")} />
                                            <label class="form-check-label" for="inlineRadio5" required>Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question3" id="inlineRadio6" value="No"
                                                required
                                                {...register("q3")} />
                                            <label class="form-check-label" for="inlineRadio6" required>No</label>
                                        </div>

                                    </div>
                                    <div className="mt-3">
                                        <div>
                                            <label className="register-form-label">Does it match the sample description or demonstration model?</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question4" id="inlineRadio7" value="Yes"
                                                required
                                                {...register("q4")} />
                                            <label class="form-check-label" for="inlineRadio7" required>Yes</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="question4" id="inlineRadio8" value="No"
                                                required
                                                {...register("q4")} />
                                            <label class="form-check-label" for="inlineRadio8" required>No</label>
                                        </div>

                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Receipt ID</label>
                                        </div>
                                        <div className="col-12">
                                            <input type="number"
                                                className="register-form-input" required placeholder="Receipt"
                                                required
                                                {...register("receipt")} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Purchase Date</label>
                                        </div>
                                        <div className="col-12">
                                            <input type="date"
                                                className="register-form-input" required placeholder="Date"
                                                required
                                                {...register("purchaseDate")} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Item Name</label>
                                        </div>
                                        <div className="col-12">
                                            <input type="text"
                                                className="register-form-input" required placeholder="Item Name"
                                                required
                                                {...register("itemName")} />
                                        </div>
                                    </div>


                                    <div className="row mt-3">
                                        <div className="col-12 mb-2">
                                            <label className="register-form-label">Customer Name</label>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text"
                                                defaultValue={user?.displayName?.split(' ')[0]}
                                                disabled
                                                className="register-form-input" placeholder="First"
                                                required
                                                style={{
                                                    cursor: 'not-allowed'
                                                }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6 mt-2 mt-sm-0">
                                            <input type="text"
                                                defaultValue={user?.displayName?.split(' ')[1]}
                                                disabled
                                                className="register-form-input" placeholder="Last"
                                                required
                                                style={{
                                                    cursor: 'not-allowed'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Customer Email</label>
                                        </div>
                                        <div className="col-12">
                                            <input type="email"
                                                defaultValue={user?.email}
                                                disabled
                                                className="register-form-input" required placeholder="Your Email"
                                                required
                                                style={{
                                                    cursor: 'not-allowed'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Phone</label>
                                        </div>
                                        <div className="col-12">
                                            <input type="number"
                                                className="register-form-input" required placeholder="Phone"
                                                required
                                                {...register("phone")} />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <label className="register-form-label">Complaint Description</label>
                                        </div>
                                        <div className="col-12">
                                            <textarea type="text"
                                                className="register-form-input" required placeholder="Complaint Description"
                                                required
                                                style={{ height: '80px' }}
                                                {...register("description")}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <button type="submit" id="btnSubmit" className="w-100 btn btn-success d-block mx-auto btn-submit">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </Modal.Body>
                        </Modal>





                        <Container className="my-5 col-11 col-md-9 col-lg-6 store-info mx-auto">
                            {
                                store?.description?.map(info => <Description
                                    info={info}
                                ></Description>)
                            }

                        </Container>
                    </div >
                    :
                    <div class="spinner d-flex align-items-center justify-content-center">
                        <div class="bounce1"></div>
                        <div class="bounce2"></div>
                        <div class="bounce3"></div>
                    </div>
            }
        </>
    );
};

export default StoreDetails;