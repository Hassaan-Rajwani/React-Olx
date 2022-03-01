import React, { useState } from 'react';
import logo from '../../images/OLX_New_Logo.png'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAdDetails } from '../config/firebase';

export default function AddDetail(props) {
    const [posts, setPosts] = useState([])
    const params = useParams()
    console.log('params --->', params.adId)
    useEffect(async () => {
        const data = await getAdDetails(params.adId)
        setPosts(data)
        console.log('data --->', data)
    },[])
    

    const navigate = useNavigate()
    const backBtn2 = () => {
        navigate('/dashboard')
    }
    if(posts.length === 0){
        return(<div><h1 style={{textAlign: 'center'}}>Loading....</h1></div>)
    }
    return (
        <div>
            <div className='2Nav' style={{ boxShadow: '0px 0px 5px lightgrey', backgroundColor: '#F8F9FA', padding: '10px', position: 'sticky', top: '0px' }}>
                <img style={{ width: '30px' }} src={back} alt="" onClick={backBtn2} />
                <img style={{ width: '70px', marginLeft: '10px' }} src={logo} alt="" />
            </div>
            <br />
            <h2 style={{ textAlign: 'center' }}>Product Detail</h2>
            <div className='detail' style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div id="carouselExampleControlsNoTouching" className="carousel slide caro" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={posts.image} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={posts.image[1]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={posts.image} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='price2' style={{ border: 'solid 2px lightgrey', borderRadius: '5px', height: '150px' }}>
                    <div className='malomaat' style={{ padding: '10px' }}>
                        <h1 style={{ fontWeight: 'bolder' }}>{posts.price}</h1>
                        <h5 style={{ marginTop: '-13px' }}>{posts.title}</h5>
                        <h5 style={{ marginTop: '-8px' }}>{posts.category}</h5>
                        <p>Mon Feb 10 2022</p>
                    </div>
                    <div className='des' style={{marginTop: '25px', padding: '10px', border: 'solid 2px lightgrey', borderRadius: '5px' }}>
                        <h2 style={{ fontWeight: 'bolder' }}>Description</h2>
                        <p>{posts.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
