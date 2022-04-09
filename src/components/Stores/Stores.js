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
//         cover: 'https://cooperoxley.com.au/wp-content/uploads/2016/10/co_gatewaycoles_009.jpg',
//         logo: 'https://i.ibb.co/4JRSM78/coles.png',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'David Lee',
//         email: 'davidlee321@gmail.com',
//         phone: 123456431,
//         abn: 12385214,
//         name: 'Cha Time',
//         image: 'https://lh3.googleusercontent.com/p/AF1QipNbdLP8KODnpwh01w-9GbhywTIcQRwHVbxoJzSR=s1600-w400',
//         cover: 'https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/200210_Chatime_Melbourne_central_centre_assets_banner_image_1338x714px.jpg?ext=.jpg',
//         logo: 'https://marketsquaregeelong.com.au/wp-content/uploads/2021/08/Logo.png',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Ying Xi Li',
//         email: 'ying@gmail.com',
//         phone: 933492431,
//         abn: 54385214,
//         name: 'Dior',
//         image: 'https://pmdl.com.au/wp-content/uploads/2020/06/2417-DiorMelbourne_Feature.jpg',
//         cover: 'https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/no-category.jpg',
//         logo: 'https://www.dior.com/couture/var/dior/storage/images/horizon/logo-dior/25334685-1-fre-FR/logo-dior_mobile_share.jpg',
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
//         cover: 'https://www.c-store.com.au/wp-content/uploads/2022/02/Wodonga.jpg',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/2110px-7-eleven_logo.svg.png',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Steven',
//         email: 'steven@gmail.com',
//         phone: 998612431,
//         abn: 5123214,
//         name: 'JB Hifi',
//         image: 'https://static.ffx.io/images/$zoom_0.2627%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_189/t_crop_custom/q_86%2Cf_auto/0d996dd6031ffc42ad2ee2f1d86fa61324321748',
//         cover: 'https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/ElectronicsMusic.jpg',
//         logo: 'https://media.pagefly.io/file/get/jbhifilogobannerjpg-1537244611298.jpg',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved'
//     },
//     {
//         manager: 'Jonathan',
//         email: 'john123@gmail.com',
//         phone: 912442431,
//         abn: 54385434,
//         name: 'KFC',
//         image: 'https://www.realcommercial.com.au/blog/wp-content/uploads/2019/08/KFC-MENTONE.jpg',
//         cover: 'https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/Dining-Entertainment.jpg',
//         logo: 'https://image.similarpng.com/very-thumbnail/2020/06/kfc-logo-free-download-PNG.png',
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