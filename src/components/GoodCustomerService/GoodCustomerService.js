import React from 'react';
import Store from '../Store/Store';
import './GoodCustomerService.css';


const GoodCustomerService = ({ stores }) => {
    return (
        <div className="mb-5">
            <h4 className="fw-bold mb-4">Popular Stores For Good Customer Service</h4>
            <div className="col-md-10 mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    stores.map(store => <Store
                        store={store}
                    ></Store>)
                }
            </div>
        </div>
    );
};

export default GoodCustomerService;