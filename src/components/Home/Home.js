import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import Information from '../Information/Information';
import GoodCustomerService from '../GoodCustomerService/GoodCustomerService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
const Home = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/stores')
            .then(res => res.json())
            .then(data => setStores(data));
    }, [])
    return (
        <>
            {
                stores.length
                    ?
                    <>
                        <Header></Header>
                        <Banner
                            stores={stores}
                        ></Banner>
                        <Container>
                            <Information></Information>
                            <GoodCustomerService
                                stores={stores}
                            ></GoodCustomerService>
                        </Container>
                        <Footer></Footer>
                    </>
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

export default Home;