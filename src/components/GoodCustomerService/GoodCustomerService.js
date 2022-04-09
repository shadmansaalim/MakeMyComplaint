import React from 'react';
import Store from '../Store/Store';
import './GoodCustomerService.css';


const stores = [
    {
        name: 'Coles',
        image: 'https://img.taste.com.au/wYwIaYV7/taste/2020/05/coles-162248-2.jpg',
        location: 'Melbourne, Central',
        reviews: 341
    },
    {
        name: 'Woolworth',
        image: 'https://live-production.wcms.abc-cdn.net.au/84cb7b044ca037b558e8880aa46b03fc?impolicy=wcms_crop_resize&cropH=750&cropW=1000&xPos=0&yPos=0&width=862&height=647',
        location: 'Melbourne, Central',
        reviews: 341
    },
    {
        name: 'Big W',
        image: 'https://static.ffx.io/images/$zoom_0.5295%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_50/t_crop_custom/q_86%2Cf_auto/388ba1f2c8b099d9342fe5ffaaef8866da319903',
        location: 'Melbourne, Central',
        reviews: 341
    },
    {
        name: 'Seven Eleven',
        image: 'https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2019/11/07113858/capi_47e259b9379f662fe5c58bff517de712_d003bec9e2efbaa985b51308d81dd6e3.jpeg',
        location: 'Melbourne, Central',
        reviews: 341
    },
    {
        name: 'Ikea',
        image: 'https://cbsnews2.cbsistatic.com/hub/i/2022/02/19/f3160682-3a26-4893-a074-392f1d1b00e8/gettyimages-595281600.jpg',
        location: 'Melbourne, Central',
        reviews: 341
    },
    {
        name: 'Kmart',
        image: 'https://i.nextmedia.com.au/News/kmart.jpg',
        location: 'Melbourne, Central',
        reviews: 341
    },
];



const GoodCustomerService = () => {
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