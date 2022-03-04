import React from 'react'
import logo from '../../images/OLX_New_Logo.png'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    const backBtn2 = () => {
        navigate('/dashboard')
    }
    return (
        <div>
            <div className='2Nav' style={{ boxShadow: '0px 0px 5px lightgrey', backgroundColor: '#F8F9FA', padding: '10px', position: 'sticky', top: '0px', position: 'fixed', width: '100%', zIndex: '100000' }}>
                <img style={{ width: '30px' }} src={back} alt="" onClick={backBtn2} />
                <img style={{ width: '70px', marginLeft: '10px' }} src={logo} alt="" />
            </div>
            <br />
            <h1 className='App' style={{marginTop: '50px'}}>Profile Page</h1>
        </div>
    )
}
