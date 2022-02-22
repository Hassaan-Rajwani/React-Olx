import './App.css';
import Signup from './views/signup/signup';
import Login from './views/login/login';
import { register, seell, login } from './components/config/firebase'
import { useState } from 'react'
import AddDetail from './components/addDetail/addDetail';
import Sell from './components/sell/sell';
import Navbar from './components/navbar/navbar';
import img from './images/OLX_New_Logo.png'
import Posts from './components/posts/post'
import Router from './components/config/router';

function App(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setname] = useState('')
  const [sell, setSell] = useState(false)
  const [ad, setAd] = useState(false)
  const [image, setImage] = useState(true)
  const [index, setindex] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [categoory, setCategory] = useState('')

  // const onSign = () => {
  //   register(email, password, name)
  // }
  // const onLogin = () => {
  //   login(email, password)
  // }
  // const onSell = () => {
  //   seell(title, categoory, description, price)
  // }
  // const arrayObj = [
  //   {
  //     thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
  //     photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
  //     price: '90,000',
  //     title: 'Iphone X',
  //     description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
  //     location: 'Karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '190,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   }
  // ]
  // // RECOMENDED POST //
  // const arrayObj2 = [
  //   {
  //     thumnail: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
  //     photos: 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg',
  //     price: '90,000',
  //     title: 'Iphone X',
  //     description: "Iphone X Pta Approve 10/10 condition 512GB with Face Id ",
  //     location: 'Karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   },
  //   {
  //     thumnail: img,
  //     photos: img,
  //     price: '50,000',
  //     title: 'iphone x',
  //     description: "iphone x pta approve 10/10 condition 512GB with face id ",
  //     location: 'karachi'
  //   }
  // ]
  return (
    <div className="">
      <Router />
      {/* {ad ? <AddDetail backBtn2={() => { setAd(false) }} backImg={arrayObj[index]} />
        :
        <div> {sell ? <Sell backBtn={() => { setSell(false) }} sellTitle={(e) => { setTitle(e.target.value) }} sellDes={(e) => { setDescription(e.target.value) }} sellPrice={(e) => { setPrice(e.target.value) }} onClick={onSell} sellCategory={(e) => { setCategory(e.target.value) }} />
          :
          <div>
            <div>
              <Navbar sell={() => { setSell(true) }} />
              <div className='SCROLL'>
                <div className='parent'>
                  <h2>More on Mobile Phones</h2>
                  <div className='scroll'>
                    {arrayObj.map((item, indexx) => {
                      return (
                        <Posts
                          img={item.thumnail}
                          title={item.title}
                          price={item.price}
                          address={item.location}
                          onClick={() => { setAd(true) }}
                          postind={() => { setindex(indexx) }}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className='parent'>
              <h2>Fresh recommendations</h2>
              <div className='fresh'>
                <div className='container'>
                  <div className="row">
                    <div className="col">
                      {arrayObj2.map((item, indexx) => {
                        return (
                          <Posts
                            img={item.thumnail}
                            title={item.title}
                            price={item.price}
                            address={item.location}
                            onClick={() => { setAd(true) }}
                            postind={() => { setindex(indexx) }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        </div>
      } */}

      {/* <Signup
          img={image}
          emailFocus={() => setImage(true)} 
          passwordFocus={() => setImage(false)}
          email={(e) => setEmail(e.target.value)}
          password={(e) => { setPassword(e.target.value) }}
          name={(e) => { setname(e.target.value) }}
          onClick={onSign}
        /> */}

      {/* <div className='App'>
        <Login
          email={(e) => setEmail(e.target.value)}
          password={(e) => { setPassword(e.target.value) }}
          onClick={onLogin}          
        />
      </div> */}
    </div>
  );
}

export default App;