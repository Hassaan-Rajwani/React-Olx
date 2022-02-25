import React from 'react';
import { useState } from 'react';
import { register } from '../../components/config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setname] = useState('')
    const [image, setImage] = useState(true)
    const image1 = 'https://cdn-icons-png.flaticon.com/512/3898/3898675.png'
    const image2 = 'https://cdn-icons-png.flaticon.com/512/3898/3898681.png'
    const navigate = useNavigate()
    const onSign = async () => {
        try {
            await register(email, password, name)
            navigate('/login')
        }
        catch (error) {
            alert(error)
        }
    }
    const onReady = () => {
        navigate('/login')
    }
    return (
        <div className='App' style={{ width: '80%', margin: 'auto' }}>
            <h1>SignUp Page</h1>
            <br />
            <img style={{ width: 150 }} src={image ? image1 : image2} alt="" />
            <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputEmail1" className="form-label">Name</label>
                <br />
                <input type="text" onFocus={() => { setImage(true) }} onChange={(e) => { setname(e.target.value) }} style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} className="form-control" id="exampleInputPassword1" placeholder='Write Name Here !' />
            </div>
            <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputEmail1" className="form-label">Email address</label>
                <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={() => { setImage(true) }} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Write Email Here !' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputPassword1" className="form-label">Password</label>
                <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={() => { setImage(false) }} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder='Write Password Here !' />
            </div>
            <button onClick={onSign} type="submit" className="btn btn-success">Submit</button>
            <br />
            <br />
            <button onClick={onReady} type="submit" className="btn btn-primary">Already Have Account</button>
        <br />
        <br />
        <br />
        </div>
    )
}
