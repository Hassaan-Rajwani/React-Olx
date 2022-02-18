import React from 'react';

export default function login(props) {
    return (
        <div style={{ width: '80%', margin: 'auto' }}>
            <h1>Login Page</h1>
            <br />
            {/* <img style={{ width: 150 }} src={props.img ? image1 : image2} alt="" /> */}
            {/* <form> */}
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
            {/* </form> */}
        </div>
    )
}
