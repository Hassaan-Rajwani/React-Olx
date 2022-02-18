import React from 'react';

export default function signup(props) {
    const image1 = 'https://cdn-icons-png.flaticon.com/512/3898/3898675.png'
    const image2 = 'https://cdn-icons-png.flaticon.com/512/3898/3898681.png'
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <h1>SignUp Page</h1>
            <br />
            <img style={{ width: 150 }} src={props.img ? image1 : image2} alt="" />
                <div className="mb-3">
                <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputEmail1" className="form-label">Name</label>
                <br />
                <input type="text" onChange={props.name} style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} className="form-control" id="exampleInputPassword1" placeholder='Write Name Here !' />
                </div>
                <div className="mb-3">
                    <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputEmail1" className="form-label">Email address</label>
                    <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={props.emailFocus} onChange={props.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Write Email Here !' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label style={{ fontSize: '20px', fontWeight: 'bold' }} for="exampleInputPassword1" className="form-label">Password</label>
                    <input style={{ border: 'solid 3px lightgrey', fontWeight: 'bold', fontSize: '20px' }} onFocus={props.passwordFocus} onChange={props.password} type="password" className="form-control" id="exampleInputPassword1" placeholder='Write Password Here !' />
                </div>
                <button onClick={props.onClick} type="submit" className="btn btn-primary">Submit</button>
        </div>
    )
}
