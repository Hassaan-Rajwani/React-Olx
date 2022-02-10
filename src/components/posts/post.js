import React from 'react';

export default function post(props) {
    return (
        <div onClick={props.onClick} style={{ display: 'inline-block' }}>
            <div className='one'>
                <div style={{marginTop: '50px'}} className="card">
                    <img style={{height: '200px'}} src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div style={{display: 'flex', justifyContent: 'space-between', height: '25px'}}>
                        <p className="card-text">{props.title}</p>
                        <img style={{width: '25px'}} src={'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'} alt="" />
                        </div>
                        <h4 className='price'>{props.price}</h4>
                        <p className='address'>{props.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
