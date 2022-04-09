import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './StoreDetails.css';

/*
Coles - https://cooperoxley.com.au/wp-content/uploads/2016/10/co_gatewaycoles_009.jpg
Seven Eleven - https://www.c-store.com.au/wp-content/uploads/2022/02/Wodonga.jpg
Cha Time - https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/200210_Chatime_Melbourne_central_centre_assets_banner_image_1338x714px.jpg?ext=.jpg
Dior - https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/no-category.jpg
JB Hifi - https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/ElectronicsMusic.jpg
KFC - https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/Dining-Entertainment.jpg


https://i.ibb.co/4JRSM78/coles.png

https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/7-eleven_logo.svg/2110px-7-eleven_logo.svg.png

https://marketsquaregeelong.com.au/wp-content/uploads/2021/08/Logo.png

https://www.dior.com/couture/var/dior/storage/images/horizon/logo-dior/25334685-1-fre-FR/logo-dior_mobile_share.jpg

https://media.pagefly.io/file/get/jbhifilogobannerjpg-1537244611298.jpg

https://image.similarpng.com/very-thumbnail/2020/06/kfc-logo-free-download-PNG.png


*/

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

        </div >
    );
};

export default StoreDetails;