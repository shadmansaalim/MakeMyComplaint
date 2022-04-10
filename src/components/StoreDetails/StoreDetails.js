import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './StoreDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScaleBalanced, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Description from '../Description/Description';




const StoreDetails = () => {
    const { id } = useParams();
    const [store, setStore] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/store/${id}`)
            .then(res => res.json())
            .then(data => setStore(data));
    }, [])

    const bgStyle = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${store.cover}')`,
        backgroundSize: '100% 100%',
        width: '100%',
        height: '500px'
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
                            <button className="btn btn-lg btn-dark ms-3 me-3">Make a complaint <FontAwesomeIcon icon={faScaleBalanced} /></button>
                            <a target="_blank" href={store.website} className="btn btn-lg btn-success">Visit Store <FontAwesomeIcon icon={faArrowTrendUp} /></a>
                        </div>
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