import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import Information from '../Information/Information';
import GoodCustomerService from '../GoodCustomerService/GoodCustomerService';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Information></Information>
                <GoodCustomerService></GoodCustomerService>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;