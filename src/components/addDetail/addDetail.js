import React from 'react';
import logo from '../../images/OLX_New_Logo.png'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom';

export default function AddDetail(props) {
    const navigate = useNavigate()
    const backBtn2 = () => {
        navigate('/dashboard')
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
                            <img src={logo} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={logo} className="d-block w-100" alt="..." />
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
                        <h1 style={{ fontWeight: 'bolder' }}>50,000</h1>
                        <h5 style={{ marginTop: '-13px' }}>Iphone X</h5>
                        <h5 style={{ marginTop: '-8px' }}>Mobile Phone</h5>
                        <p>Mon Feb 10 2022</p>
                    </div>
                    <div className='des' style={{ padding: '10px', border: 'solid 2px lightgrey', borderRadius: '5px' }}>
                        <h2 style={{ fontWeight: 'bolder' }}>Description</h2>
                        <p>Liquid Retina HD display · 15.5 cm / 6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology ·</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
