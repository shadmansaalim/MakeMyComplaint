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
//         status: 'approved',
//         description: [
//             {
//                 title: 'History',
//                 content: "Discover the history of Coles, which began in 1914 with the opening of our first store in the Melbourne suburb of Collingwood."
//             },
//             {
//                 title: 'Businesses',
//                 content: "As one of Australia's leading retailers, Coles is committed to making life easier for customers. We deliver great value on your weekly grocery shop, as well as offering convenience shopping and fuel, great value credit cards and simple insurance options, affordable prepaid phone plans and an extensive network of wine and liquor stores."
//             },
//             {
//                 title: 'Brands exclusive to Coles',
//                 content: "Our customers are our focus, and we want to help Aussies live healthier and happier lives. We work hard to deliver products that provide the best quality and best value solutions, with a variety of brands to help you shop for any occasion."
//             },
//             {
//                 title: 'Sustainability at Coles',
//                 content: "At Coles we take our responsibility for managing our environmental and social impacts seriously. Our ambition is to be Australia’s most sustainable supermarket and we're always looking for opportunities to make a positive difference through sustainable products, sustainable environmental practices and sustainable communities."
//             },
//             {
//                 title: 'Supporting Aussie Producers',
//                 content: "As an Australian company, we want to support other Australian businesses to deliver great quality local products for our customers. That's why we have an Australian First Sourcing Policy, which means that we source Aussie grown fruit and veg wherever and whenever we can."
//             },
//             {
//                 title: 'Community',
//                 content: "Coles is passionate about supporting the communities we serve through partnerships, sponsorships and fundraising. From Geraldton in the west to Ocean Shores in the east, we're proud to help Australians lead healthier, happier lives by supporting national and local charities, sporting organisations, schools and hospitals."
//             },
//         ],
//         website: 'https://www.coles.com.au/'
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
//         status: 'approved',
//         description: [
//             {
//                 title: 'From Tree to Cup',
//                 content: "We are a bunch of people that are passionate about tea and want to let the world know how a cup of “Good Tea” is made. With nearly 20 years of industry experiences, we have poured our heart and soul into every step of the way. Chatime Tea Lab is consisted of world top-notch tea experts with the vision of redefining the benchmark of world bubble tea industry."
//             },
//             {
//                 title: 'Next Step',
//                 content: "As a pioneer of the industry, we carry the mission of making this world a better place with Tea. Throughout the years, we have been working with our contract tea farmers in Taiwan to produce the so-called 'Good Tea'. Chatime Tree To Cup maps out the exciting journey of the Chatime tea. From the tea farm to your nearest tea brewery, we aim to achieve 100% transparent in every step of the supply chain. In Chatime, we ain’t just make tea for a living, we strive to let more people know how 'Good Tea' is produced and all the stories behind to make this great project happen."
//             },
//         ],
//         website: 'https://chatime.com.au/'
//     },
//     {
//         manager: 'Ying Xi Li',
//         email: 'ying@gmail.com',
//         phone: 933492431,
//         abn: 54385214,
//         name: 'Diesel',
//         image: 'https://img.businessoffashion.com/resizer/goYMJDQB_TQ3sHSeK1toRlTHVVw=/1800x1350/filters:format(jpg):quality(70):focal(45x45:55x55)/cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/WGAGBBJWSZBRFEDKFU6X7FHAZM.jpg',
//         cover: 'https://www.melbournecentral.com.au/Upload/MelbourneCentral/Media/Store-Hero/no-category.jpg',
//         logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Diesel_logo.svg/1280px-Diesel_logo.svg.png',
//         location: 'Melbourne, Central',
//         reviews: 341,
//         status: 'approved',
//         description: [
//             {
//                 title: 'Diesel',
//                 content: "In 1978 Renzo Rosso started Diesel with the intention of creating the world’s most innovated denim. Amidst a worldwide oil crisis, during which diesel was considered to be an alternative fuel, Renzo liked the idea of his brand to be known as an alternative jeans brand, in contrast to the prevalent casual wear giants that had come before. Renzo intended to reach the entire world since the brand’s very inception, making the word “diesel,” an international term pronounced equally all over the world, the perfect name for his endeavor. Since its start, Diesel has used “For Successful Living” as a slogan for the brand’s DNA. Through a long and storied history of strong, ironic and playful campaigns, Diesel has become a leader in advertising as well as in fashion. Where the world zigged, Diesel zagged, and in the 35 years since its founding, the brand still embraces the same ethos. Diesel has over 5,000 points of sale worldwide with over 400 monobrand stores, 37 of those in the US. Between 1978 and 2012, the company has produced more than 2,000 different washes of denim."
//             },
//             {
//                 title: 'Community',
//                 content: 'Amidst a worldwide oil crisis, during which diesel was considered to be an alternative fuel, Renzo liked the idea of his brand to be known as an alternative jeans brand, in contrast to the prevalent casual wear giants that had come before. Renzo intended to reach the entire world since the brand’s very inception, making the word “diesel,” an international term pronounced equally all over the world, the perfect name for his endeavor.'
//             }
//         ],
//         website: 'https://au.diesel.com/'
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
//         status: 'approved',
//         description: [
//             {
//                 title: 'Seven Eleven',
//                 content: "We’re proud to be one of Australia’s largest private companies, with more than 700 stores located in neighbourhoods across Victoria, New South Wales, ACT, Queensland and Western Australia. Our business is made up of more than 450 small family-owned businesses. Approximately 8,800 people work under the 7-Eleven brand, either directly with 7-Eleven or through franchised stores. These teams serve an average of seven customers every second across Australia."
//             },
//             {
//                 title: 'Community Partners',
//                 content: "The 7-Eleven Good Cause program is designed to make a real difference in local communities by focusing on areas that have a strong connection to who we are, what we do and the communities we serve. We are committed to tackling food waste and supporting new Australians and youth mental health through partnerships with SecondBite, AMES Australia and ReachOut. We're also proud to partner with Simply Cups."
//             },
//             {
//                 title: 'Values and Culture',
//                 content: "Our people are at the core at everything we do. The efforts of our teams make the ordinary moments extraordinary for our customers and living our values is what enables us to succeed."
//             },
//             {
//                 title: 'Franchisees',
//                 content: "We’re lucky to work with hundreds of passionate franchisees who make our brand what it is. While our franchise offer helps families build their own businesses, as one of Australia's most iconic brands, each 7-Eleven store also plays an essential role within the local community."
//             },
//             {
//                 title: 'Leaders',
//                 content: "The 7-Eleven Board and senior leadership team set the organisation’s strategic direction and purpose, ensuring the company maintains its position as Australia’s first choice in convenience retailing"
//             },
//             {
//                 title: 'History',
//                 content: "Our founders, the Withers and Barlow families, have been in the grocery and grocery wholesale business dating back to 1919. In 1976, with an eye on emerging retail trends, they signed the area license agreement to bring the 7-Eleven brand to Australia, opening the first store in Oakleigh, Victoria in 1977."
//             },
//         ],
//         website: 'https://www.7eleven.com.au/'
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
//         status: 'approved',
//         description: [
//             {
//                 title: 'JB Hifi',
//                 content: "JB offer the world's leading brands of Computers, Tablets, TVs, Cameras, Hi-Fi, Speakers, Home Theatre, Portable Audio, the largest range of games, recorded music, DVD music, Blu-Ray and DVD movies and TV shows and stacks more all at cheap prices! Everything you're after is available in one of our stores or online. JB Hi-Fi has it all - best brands, huge range, cheapest prices, convenient locations, but most importantly genuine personal service from our experienced specialist staff."
//             },
//             {
//                 title: 'History',
//                 content: "JB Hi-Fi was established in 1974 by Mr. John Barbuto (JB), trading from a single store in East Keilor, Victoria. He had one simple philosophy: to deliver a specialist range of Hi-Fi and recorded music at Australia's lowest prices."
//             },
//             {
//                 title: 'Business',
//                 content: "The business was sold in 1983 and by 1999 another nine stores were opened. In July 2000 JB Hi-Fi was purchased by private equity bankers and senior management with the aim of taking the successful model nationally. In October 2003, JB Hi-Fi was floated on the Australian Stock Exchange. Now, maintaining Barbuto's original philosophy, JB is one of Australasia's fastest growing and largest retailer of home entertainment. In July 2004, JB bought the Queensland Clive Anthony chain of stores which sell consumer electronics, white goods, cooking appliances and air-conditioning. These locations have now been converted into JB Hi-Fi HOME stores, where you can find everything you love about JB plus more."
//             },
//             {
//                 title: 'Team',
//                 content: "We have over 6,000 members of the JB Hi-Fi team contributing to the program each week which is 76% of our staff nationally. We are a proud member of Workplace Giving Australia and are supporting their goal of reaching #1Mdonors."
//             },
//         ],
//         website: 'https://www.jbhifi.com.au/'
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
//         status: 'approved',
//         description: [
//             {
//                 title: 'KFC',
//                 content: "KFC landed in Australia in 1968 with our first restaurant in Guildford, Sydney NSW. That was a time when long hair, flower crowns and lava lamps were still totally groovy, dude. Today we serve over 2 million customers a week across 650+ restaurants. And even after all these years, the original secret remains under lock and key in our headquarters in Kentucky, USA. And no, we'll never tell. Nice try."
//             },
//             {
//                 title: 'History',
//                 content: "It all began with the man, the myth, the legend himself. In 1930, in a humble service station in Corbin, Kentucky, 40-year old Harland Sanders began feeding hungry travellers. Sanders spent the next nine years (now that's dedication) perfecting his secret blend of 11 herbs and spices, as well as the basic cooking technique we still use today. There are now over 20,000 KFC outlets in more than 125 countries and territories around the world. Not bad, eh?"
//             },
//         ],
//         website: 'https://www.kfc.com.au/'
//     }
// ];


const Stores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch('https://pure-bastion-05518.herokuapp.com/stores')
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