import React from 'react';
import { useState } from 'react';
import { login } from '../../components/config/firebase';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [image, setImage] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const image1 = 'https://cdn-icons-png.flaticon.com/512/3898/3898675.png'
    const image2 = 'https://cdn-icons-png.flaticon.com/512/3898/3898681.png'
    const navigate = useNavigate()
    const onLogin = async () => {
        try {
            await login(email, password)
            alert('Successfully Logged In')
            navigate('/dashboard')
        }
        catch (error) {
            alert(error)
        }
    }
    const onSign = () => {
        navigate('/signUp')
    }
    return (
        <div className='App' style={{ width: '80%', margin: 'auto' }}>
            <h1>Login Page</h1>
            <br />
            <img style={{ width: 150 }} src={image ? image1 : image2} alt="" />
            <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputEmail1" className="form-label">Email address</label>
                <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={() => {setImage(true)}} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Write Email Here !' />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputPassword1" className="form-label">Password</label>
                <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={() => {setImage(false)}} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" id="exampleInputPassword1" placeholder='Write Password Here !' />
            </div>
            <button onClick={onLogin} type="submit" className="btn btn-success">Submit</button>
            <br />
            <br />
            <button onClick={onSign} type="submit" className="btn btn-primary">Don't Have Account</button>
        </div>
    )
}
