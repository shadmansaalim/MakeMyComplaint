import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import Information from '../Information/Information';
import GoodCustomerService from '../GoodCustomerService/GoodCustomerService';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Container>
                <Information></Information>
                <GoodCustomerService></GoodCustomerService>
            </Container>
        </>
    );
};

export default Home;