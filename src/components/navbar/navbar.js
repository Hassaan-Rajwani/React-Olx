import React from 'react';
import logo from '../../images/OLX_New_Logo.png'
import avatar from '../../images/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'
import Backimage from '../backimg/backimage';
import Posts from '../posts/post';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAds } from '../config/firebase';
import Footer from '../footer/footer';
import { useSelector } from 'react-redux';

export default function Navbar(props) {
    const [ads, setAds] = useState([])
    
    const navigate = useNavigate()
    useEffect(async () => {
        const tempAds = await getAds()
        setAds(tempAds)
    }, [])
    
    const user = useSelector(state => state.user)
    console.log(user)
    
    const arrayObj = [
        {
            thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            price: '90,000',
            title: 'Iphone X',
            description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
            location: 'Karachi'
        },
        {
            thumnail: 'http://incpak.com/wp-content/uploads/2019/10/72481874_541995879945592_3986073729108017152_n.jpg',
            photos: 'http://incpak.com/wp-content/uploads/2019/10/72481874_541995879945592_3986073729108017152_n.jpg',
            price: '190,000',
            title: 'Honda 125',
            description: "10/10 condition 125cc",
            location: 'Karachi'
        },
        {
            thumnail: 'https://i.ytimg.com/vi/MnrHyu9UcXU/maxresdefault.jpg',
            photos: 'https://i.ytimg.com/vi/MnrHyu9UcXU/maxresdefault.jpg',
            price: '790,000',
            title: 'Mehran Car',
            description: "10/10 condition",
            location: 'Karachi'
        },
        {
            thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            price: '90,000',
            title: 'Iphone X',
            description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
            location: 'Karachi'
        },
        {
            thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            price: '90,000',
            title: 'Iphone X',
            description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
            location: 'Karachi'
        },
        {
            thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
            price: '90,000',
            title: 'Iphone X',
            description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
            location: 'Karachi'
        }
    ]
    const sellOpt = () => {
        navigate('/sellpage')
    }
    const onProfile = () => {
        navigate('/profile')
    }
    if (ads.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: '100px', height: '100px' }} className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <nav style={{ boxShadow: '0px 0px 5px lightgrey', position: 'fixed', top: '0px', zIndex: '1000', width: '100%' }} className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img style={{ width: '70px' }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <select style={{ fontWeight: 'bold', paddingLeft: '40px', width: '250px', borderRadius: '5px' }} className="nav-link dropdown-toggle mx-3 select" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <option value="">Karachi, Sindh</option>
                                    <option value="">Peshawar</option>
                                    <option value="">Lahore</option>
                                    <option value="">Quetta</option>
                                    <option value="">Hyderabad</option>
                                    <option value="">Larkana</option>
                                </select>
                            </li>
                            <li style={{ display: 'flex' }} className="nav-item naaaav1">
                                <input style={{ fontWeight: 'bold', width: '700px' }} className="form-control me-2 formm" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
                                <button className='btnn'></button>
                            </li>
                            <li onClick={onProfile} className='nav-item naaaav2'>
                                <img style={{ width: '50px', marginLeft: '40px', cursor: 'pointer' }} src={avatar} alt="" />
                            </li>
                            <li className="po nav-item">
                                <a style={{ cursor: 'pointer', backgroundColor: 'white' }} onClick={sellOpt} className="nav-link sell">SELL</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul style={{ marginTop: '85px' }} className='ul'>
                <button type="button" className="cate btn btn2 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <li className="li-chg">ALL CATEGORIES</li>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ALL CATEGORIES</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Mobile Phones</p>
                                <p>Cars</p>
                                <p>Motercycle</p>
                                <p>Mobile Phones</p>
                                <p>Houses</p>
                                <p>Tv-Video-Audio</p>
                                <p>Land &amp; Plots</p>
                                <p>Machines</p>
                                <p>Spare Parts</p>
                                <p>Jobs</p>
                                <p>FM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <li className='li li-1'>Mobile Phones</li>
                <li className='li li-2'>Cars</li>
                <li className='li li-3'>Motercycle</li>
                <li className='li li-4'>Houses</li>
                <li className='li ot'>Tv-Video-Audio</li>
                <li className='li ot'>Tablets</li>
                <li className='li ot'>Land &amp; Plots</li>
            </ul>

            <Backimage />

            {/* scroll bar */}
            {/* <div className='SCROLL'>
                <div className='parent'>
                    <h2>More on Mobile Phones</h2>
                    <div className='scroll'>
                        {arrayObj.map((item, indexx) => {
                            return (
                                <Posts
                                    img={item.thumnail}
                                    title={item.title}
                                    price={item.price}
                                    address={item.location}
                                    // onClick={() => { setAd(true) }}
                                    // postind={() => { setindex(indexx) }}
                                />
                            )
                        })}
                    </div>
                </div>
            </div> */}
            {/* <div> */}
            <div className='parent'>
                <h2>Fresh recommendations</h2>
                <div className='fresh'>
                    <div className='container'>
                        <div className="row">
                            <div className="col">
                                {ads.map((item) => {
                                    return (
                                        <Posts
                                            img={item.image[0]}
                                            title={item.title}
                                            price={item.price}
                                            address={item.location}
                                            onClick={() => navigate(`/adDetail/${item.id}`)}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1>{user.user.email}</h1>
            <br />
            <br />
            <Footer />
            {/* <div className='parent'>
                    <h2>More on Mobile Phones</h2>
                    <div className='scroll'> */}
            {/* <Posts
                            // img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            img={props.obj}
                            title={'Apple iPhone 143 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                            onClick={props.adDetail}
                        /> */}
            {/* </div>
                </div>
            </div> */}

            {/* recommendations */}
            {/* <div className='parent'>
                <h2>Fresh recommendations</h2>
                <div className='fresh'>
                    <div className='container'>
                        <div className="row">
                            <div className="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(1).jpeg?alt=media&token=62659e18-a342-4b99-8482-d6e6184fcac9'}
                                    title={'Apple iPhone 11'}
                                    price={'$800'}
                                    address={'New York'}
                                    onClick={props.adDetail}
                                />
                            </div>
                            <div className="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2F2020-ktm-250-duke-left-side-eac4.png?alt=media&token=e3b3a938-c57b-4255-95b1-80d54dcf5a93'}
                                    title={'Kawasaki Hayabosa'}
                                    price={'$5,000'}
                                    address={'New York'}
                                    onClick={props.adDetail}
                                />
                            </div>
                            <div className="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fsuzuki%20mehran.jpg?alt=media&token=6b490fe6-7313-42ae-b4b9-61b5cbdd58ed'}
                                    title={'Suzuki Mehran'}
                                    price={'$10,000'}
                                    address={'New York'}
                                    onClick={props.adDetail}
                                />
                            </div>
                            <div className="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(5).jpeg?alt=media&token=40e772b9-ddb4-4729-be60-65aeafc1684b'}
                                    title={'Cannon 50mm'}
                                    price={'$300'}
                                    address={'New York'}
                                    onClick={props.adDetail}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}




// AGR OPER WALA KAAM NA CHALE TW YE WALA CODE USE KRNA HE
// =======================================================
// import React from 'react';
// import logo from '../../images/OLX_New_Logo.png'
// import Backimage from '../backimg/backimage';
// import Posts from '../posts/post';
// import img from '../../images/OLX_New_Logo.png'
// import AddDetail from '../addDetail/addDetail';
// import { useNavigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getAds } from '../config/firebase';
// import { getAdDetails } from '../config/firebase';

// function tempData(tempAd) {
//     return tempAd
// }
// export default function Navbar(props) {
//     const [ad, setAd] = useState(false)
//     const [index, setindex] = useState()
//     const [ads, setAds] = useState([])

//     const navigate = useNavigate()
//     useEffect(async () => {
//         const tempAds = await getAds()
//         setAds(tempAds)
//     }, [])

//     const postOpen = async (item) => {
//         navigate(`/adDetail/${item.id}`)
//         var temp = item.id
//         setindex(temp)
//         console.log(temp)
//         const tempAd = await getAdDetails(temp)
//         tempData(tempAd)
//         console.log(tempAd)
//     }
//     const arrayObj = [
//         {
//             thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             price: '90,000',
//             title: 'Iphone X',
//             description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
//             location: 'Karachi'
//         },
//         {
//             thumnail: 'http://incpak.com/wp-content/uploads/2019/10/72481874_541995879945592_3986073729108017152_n.jpg',
//             photos: 'http://incpak.com/wp-content/uploads/2019/10/72481874_541995879945592_3986073729108017152_n.jpg',
//             price: '190,000',
//             title: 'Honda 125',
//             description: "10/10 condition 125cc",
//             location: 'Karachi'
//         },
//         {
//             thumnail: 'https://i.ytimg.com/vi/MnrHyu9UcXU/maxresdefault.jpg',
//             photos: 'https://i.ytimg.com/vi/MnrHyu9UcXU/maxresdefault.jpg',
//             price: '790,000',
//             title: 'Mehran Car',
//             description: "10/10 condition",
//             location: 'Karachi'
//         },
//         {
//             thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             price: '90,000',
//             title: 'Iphone X',
//             description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
//             location: 'Karachi'
//         },
//         {
//             thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             price: '90,000',
//             title: 'Iphone X',
//             description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
//             location: 'Karachi'
//         },
//         {
//             thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
//             price: '90,000',
//             title: 'Iphone X',
//             description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
//             location: 'Karachi'
//         }
//     ]
//     const sellOpt = () => {
//         navigate('/sellpage')
//     }
//     return (
//         <div>
//             <nav style={{ boxShadow: '0px 0px 5px lightgrey', position: 'fixed', top: '0px', zIndex: '1000', width: '100%' }} className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">
//                     <img style={{ width: '70px' }} src={logo} alt="" />
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item dropdown">
//                                 <select style={{ fontWeight: 'bold', paddingLeft: '40px', width: '250px', borderRadius: '5px' }} className="nav-link dropdown-toggle mx-3 select" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     <option value="">Karachi, Sindh</option>
//                                     <option value="">Peshawar</option>
//                                     <option value="">Lahore</option>
//                                     <option value="">Quetta</option>
//                                     <option value="">Hyderabad</option>
//                                     <option value="">Larkana</option>
//                                 </select>
//                             </li>
//                             <li style={{ display: 'flex' }} className="nav-item">
//                                 <input style={{ fontWeight: 'bold', width: '800px' }} className="form-control me-2 formm" type="search" placeholder="Find Cars, Mobile Phones and more..." aria-label="Search" />
//                                 <button className='btnn'></button>
//                             </li>
//                             <li className="po nav-item">
//                                 <a style={{ cursor: 'pointer', backgroundColor: 'white' }} onClick={sellOpt} className="nav-link sell">SELL</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             <ul style={{ marginTop: '85px' }} className='ul'>
//                 <button type="button" className="cate btn btn2 " data-bs-toggle="modal" data-bs-target="#exampleModal">
//                     <li className="li-chg">ALL CATEGORIES</li>
//                 </button>
//                 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title" id="exampleModalLabel">ALL CATEGORIES</h5>
//                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Mobile Phones</p>
//                                 <p>Cars</p>
//                                 <p>Motercycle</p>
//                                 <p>Mobile Phones</p>
//                                 <p>Houses</p>
//                                 <p>Tv-Video-Audio</p>
//                                 <p>Land &amp; Plots</p>
//                                 <p>Machines</p>
//                                 <p>Spare Parts</p>
//                                 <p>Jobs</p>
//                                 <p>FM</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <li className='li li-1'>Mobile Phones</li>
//                 <li className='li li-2'>Cars</li>
//                 <li className='li li-3'>Motercycle</li>
//                 <li className='li li-4'>Houses</li>
//                 <li className='li ot'>Tv-Video-Audio</li>
//                 <li className='li ot'>Tablets</li>
//                 <li className='li ot'>Land &amp; Plots</li>
//             </ul>
//             {/* Asal kaam yahaan tak he he  */}
//             {/* ye navbar ko sticky krme k lie kia he  */}

//             <Backimage />

//             {/* scroll bar */}
//             <div className='SCROLL'>
//                 <div className='parent'>
//                     <h2>More on Mobile Phones</h2>
//                     <div className='scroll'>
//                         {arrayObj.map((item, indexx) => {
//                             return (
//                                 <Posts
//                                     img={item.thumnail}
//                                     title={item.title}
//                                     price={item.price}
//                                     address={item.location}
//                                     // onClick={() => { setAd(true) }}
//                                     // postind={() => { setindex(indexx) }}
//                                 />
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             {/* <div> */}
//             <div className='parent'>
//                 <h2>Fresh recommendations</h2>
//                 <div className='fresh'>
//                     <div className='container'>
//                         <div className="row">
//                             <div className="col">
//                                 {ads.map((item, indexx) => {
//                                     return (
//                                         <Posts
//                                             img={item.thumnail}
//                                             title={item.title}
//                                             price={item.price}
//                                             address={item.location}
//                                             onClick={() => {postOpen(item)}}
//                                             // onClick={() => { setAd(true) }}
//                                             // postind={() => { setindex(indexx) }}
//                                         />
//                                         )
//                                     })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className='parent'>
//                     <h2>More on Mobile Phones</h2>
//                     <div className='scroll'> */}
//             {/* <Posts
//                             // img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             img={props.obj}
//                             title={'Apple iPhone 143 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         />
//                         <Posts
//                             img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             title={'Apple iPhone 13 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         />
//                         <Posts
//                             img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             title={'Apple iPhone 13 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         />
//                         <Posts
//                             img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             title={'Apple iPhone 13 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         />
//                         <Posts
//                             img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             title={'Apple iPhone 13 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         />
//                         <Posts
//                             img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
//                             title={'Apple iPhone 13 Pro'}
//                             price={'$1,000'}
//                             address={'New York'}
//                             onClick={props.adDetail}
//                         /> */}
//             {/* </div>
//                 </div>
//             </div> */}

//             {/* recommendations */}
//             {/* <div className='parent'>
//                 <h2>Fresh recommendations</h2>
//                 <div className='fresh'>
//                     <div className='container'>
//                         <div className="row">
//                             <div className="col">
//                                 <Posts
//                                     img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(1).jpeg?alt=media&token=62659e18-a342-4b99-8482-d6e6184fcac9'}
//                                     title={'Apple iPhone 11'}
//                                     price={'$800'}
//                                     address={'New York'}
//                                     onClick={props.adDetail}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <Posts
//                                     img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2F2020-ktm-250-duke-left-side-eac4.png?alt=media&token=e3b3a938-c57b-4255-95b1-80d54dcf5a93'}
//                                     title={'Kawasaki Hayabosa'}
//                                     price={'$5,000'}
//                                     address={'New York'}
//                                     onClick={props.adDetail}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <Posts
//                                     img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fsuzuki%20mehran.jpg?alt=media&token=6b490fe6-7313-42ae-b4b9-61b5cbdd58ed'}
//                                     title={'Suzuki Mehran'}
//                                     price={'$10,000'}
//                                     address={'New York'}
//                                     onClick={props.adDetail}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <Posts
//                                     img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(5).jpeg?alt=media&token=40e772b9-ddb4-4729-be60-65aeafc1684b'}
//                                     title={'Cannon 50mm'}
//                                     price={'$300'}
//                                     address={'New York'}
//                                     onClick={props.adDetail}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     )
// }
// export {
//     tempData
// }