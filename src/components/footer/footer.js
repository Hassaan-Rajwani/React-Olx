import React from 'react'
import '../../../src/App.css';

export default function footer() {
    return (
        <div>
            <div className=" my-5 mainFooter">
                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ backgroundColor: '#ECEFF1' }}
                >
                    <div>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p style={{ fontWeight: 'bolder' }}>
                                        Try The Olx
                                        Buy, sell and find just about anything using the app on your mobile.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold">Products</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p style={{ fontWeight: 'bolder' }}>
                                        <a style={{ textDecoration: 'none' }} href="#!" className="text-dark">Car</a>
                                    </p>
                                    <p style={{ fontWeight: 'bolder' }}>
                                        <a style={{ textDecoration: 'none' }} href="#!" className="text-dark">Flats for rent</a>
                                    </p>
                                    <p style={{ fontWeight: 'bolder' }}>
                                        <a style={{ textDecoration: 'none' }} href="#!" className="text-dark">Mobile Phones</a>
                                    </p>
                                    <p style={{ fontWeight: 'bolder' }}>
                                        <a style={{ textDecoration: 'none' }} href="#!" className="text-dark">Jobs</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        className="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p style={{ fontWeight: 'bolder' }}><i className="fas fa-home mr-3"></i> Karachi,Pakistan</p>
                                    <p style={{ fontWeight: 'bolder' }}><i className="fas fa-envelope mr-3"></i> hassaanqadri258@gmail.com</p>
                                    <p style={{ fontWeight: 'bolder' }}><i className="fas fa-phone mr-3"></i> +92 3128741250</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div
                        className="text-center p-3"
                        style={{ width: '100%', backgroundColor: '#002F34', height: '60px', color: 'white' }}
                    >
                        © 2022 Copyright
                    </div>
                </footer>
            </div>
        </div>
    )
}
