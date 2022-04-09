import React from 'react';
import { useHistory } from 'react-router-dom';

const Store = ({ store }) => {
    const { _id, name, image, location, reviews } = store;
    const history = useHistory();
    return (
        <div className="col">
            <div className="card h-100 rounded-3" onClick={() => {
                history.push(`/store/${_id}`)
            }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body pb-2">
                    <h5 className="card-title text-start fw-bold mb-1">{name}</h5>
                    <small className="card-text d-flex align-items-center justify-content-between">
                        <span>
                            {location}
                        </span>
                        <span>
                            {reviews}+ reviews
                        </span>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Store;