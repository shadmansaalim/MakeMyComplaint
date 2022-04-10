import React from 'react';
import './RegisterStore.css'
import registerStore from '../../images/registerStore.png';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const RegisterStore = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.manager = user.displayName;
        data.email = user.email;
        data.status = "pending";
        data.reviews = 0;

        fetch('https://pure-bastion-05518.herokuapp.com/register-store', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Successfully Registered", "Please wait until an admin approves your store.", "success");
                    reset();

                }
            })
            .catch(error => {
                swal("Something Went Wrong", "Please try again", "error");
            })
    }


    return (
        <div className="mb-5">
            <div className="register-store-bg d-flex justify-content-center align-items-center" >
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
                                            <section className="register-form text-start">
                                                <div className="row">
                                                    <form className="col-12" onSubmit={handleSubmit(onSubmit)}>

                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <label className="register-form-label">Manager's Name</label>
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
                                                                <label className="register-form-label">Manager's Email</label>
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
                                                                <label className="register-form-label">Store Name</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text"
                                                                    className="register-form-input" required placeholder="Store Name"
                                                                    required
                                                                    {...register("name")} />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="register-form-label">ABN</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="number"
                                                                    className="register-form-input" required placeholder="Store ABN Number"
                                                                    required
                                                                    {...register("abn")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="register-form-label">Store Location</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text" className="register-form-input" placeholder="Store Location"
                                                                    required
                                                                    {...register("location")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-3">
                                                            <div className="col-12">
                                                                <label className="register-form-label">Store Image Link</label>
                                                            </div>
                                                            <div className="col-12">
                                                                <input type="text" className="register-form-input" placeholder="Image Link"
                                                                    required
                                                                    {...register("image")} />
                                                            </div>
                                                        </div>

                                                        <div className="row mt-4">
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