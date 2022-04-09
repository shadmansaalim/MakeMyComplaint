import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Store from '../Store/Store';

// const stores = [
//     {
//         manager: 'Saalim Shadman',
//         email: 'shadmansaalim321@gmail.com',
//         phone: 123456789,
//         abn: 12398214,
//         name: 'Coles',
//         image: 'https://img.taste.com.au/wYwIaYV7/taste/2020/05/coles-162248-2.jpg',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'David Lee',
//         email: 'davidlee321@gmail.com',
//         phone: 123456431,
//         abn: 12385214,
//         name: 'Woolworth',
//         image: 'https://live-production.wcms.abc-cdn.net.au/84cb7b044ca037b558e8880aa46b03fc?impolicy=wcms_crop_resize&cropH=750&cropW=1000&xPos=0&yPos=0&width=862&height=647',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Ying Xi Li',
//         email: 'ying@gmail.com',
//         phone: 933492431,
//         abn: 54385214,
//         name: 'Big W',
//         image: 'https://static.ffx.io/images/$zoom_0.5295%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_50/t_crop_custom/q_86%2Cf_auto/388ba1f2c8b099d9342fe5ffaaef8866da319903',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Michael',
//         email: 'michael@gmail.com',
//         phone: 432192431,
//         abn: 59999214,
//         name: 'Seven Eleven',
//         image: 'https://www.realestate.com.au/blog/images/1280x720-fit,progressive/2019/11/07113858/capi_47e259b9379f662fe5c58bff517de712_d003bec9e2efbaa985b51308d81dd6e3.jpeg',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Steven',
//         email: 'steven@gmail.com',
//         phone: 998612431,
//         abn: 5123214,
//         name: 'Ikea',
//         image: 'https://cbsnews2.cbsistatic.com/hub/i/2022/02/19/f3160682-3a26-4893-a074-392f1d1b00e8/gettyimages-595281600.jpg',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Jonathan',
//         email: 'john123@gmail.com',
//         phone: 912442431,
//         abn: 54385434,
//         name: 'Kmart',
//         image: 'https://i.nextmedia.com.au/News/kmart.jpg',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     }
// ];


const Stores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/stores')
            .then(res => res.json())
            .then(data => setStores(data))
    }, [stores])
    return (
        <>
            {
                stores.length
                    ?
                    <div className="my-5">
                        <div className="col-md-10 mx-auto row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                stores.map(store => store.status === 'approved' &&
                                    <Store
                                        key={store._id}
                                        store={store}
                                    ></Store>)
                            }
                        </div>
                    </div>
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

export default Stores;