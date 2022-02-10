import './App.css';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import { register, login } from './components/config/firebase'
import { useState } from 'react'
import Home from './components/home/home';
import AddDetail from './components/addDetail/addDetail';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sell, setSell] = useState(false)
  const [ad, setAd] = useState(false)
  const [image, setImage] = useState(true)

  const onSign = () => {
    register(email, password)
  }
  const onLogin = () => {
    login(email, password)
  }
  return (
    <div className="">
      <Home
        state={sell}
        sellBtn={() => { setSell(true) }}
        back={() => { setSell(false) }}
        state2={ad}
        ad={() => { setAd(true) }}
        back2={() => { setAd(false) }}
      />
      {/* <Signup
        img={image}
        emailFocus={() => setImage(true)}
        passwordFocus = {() => setImage(false)}
        email={(e) => setEmail(e.target.value)}
        password={(e) => { setPassword(e.target.value) }}
        onClick={onSign}
      /> */}

      {/* <Login
      email={(e) => setEmail(e.target.value)}
      password={(e) => { setPassword(e.target.value) }}
      onClick={onLogin}
      /> */}
    </div>
  );
}

export default App;
