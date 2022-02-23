import React from 'react';
import logo from '../../images/OLX_New_Logo.png'
import back from '../../images/back.png'
import { useNavigate } from 'react-router-dom';
import { seell } from '../config/firebase';
import { useState } from 'react';

export default function Sell(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [categoory, setCategory] = useState('')
    const navigate = useNavigate()
    const backBtn = () => {
        navigate('/dashboard')
    }
    const onSell = () => {
        seell(title, categoory, description, price)
    }
    return (
        <div>
            <div className='2Nav' style={{ boxShadow: '0px 0px 5px lightgrey', backgroundColor: '#F8F9FA', padding: '10px' }}>
                <img style={{ width: '30px' }} src={back} alt="" onClick={backBtn} />
                <img style={{ width: '70px', marginLeft: '10px' }} src={logo} alt="" />
            </div>
            <br />
            <div className='adHeading'>
                <h4 style={{ textAlign: 'center', marginTop: '10px' }}>POST YOUR AD</h4>
            </div>
            <div className='App'>
                <form action="">
                    <input onChange={(e) => {setTitle(e.target.value)}} style={{ border: '1px solid black', fontWeight: 'bold', paddingLeft: '5px', width: '62%', height: '35px' }} type="text" placeholder='Titel' />
                    <select onChange={(e) => {setCategory(e.target.value)}} style={{ color: 'gray', fontWeight: 'bold', height: '35px' }} name="drop" id="">
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                    <input onChange={(e) => {setDescription(e.target.value)}} style={{ marginTop: '10px', fontWeight: 'bold', paddingLeft: '5px', width: '70%', height: '35px', border: '1px solid black' }} type="text" placeholder='Description' />
                    <br />
                    <input onChange={(e) => {setPrice(e.target.value)}} style={{ marginTop: '10px', fontWeight: 'bold', paddingLeft: '5px', width: '70%', height: '35px', border: '1px solid black' }} type="text" placeholder='Price' />
                    <input className='form-control' style={{ color: 'gray', fontWeight: 'bold', margin: 'auto', width: '70%', marginTop: '10px', border: '1px solid black' }} type="file" id="formFileMultiple" multiple />
                    <button onClick={onSell} style={{ marginTop: '10px', color: 'white' }} type="button" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}