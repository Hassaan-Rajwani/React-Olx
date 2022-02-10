import React from 'react';
import Navbar from '../navbar/navbar';
import Backimage from '../backimg/backimage';
import Posts from '../posts/post';
import Sell from '../sell/sell';
import AddDetail from '../addDetail/addDetail';
export default function home(props) {
    return (
        <div>
            {props.state2 ? <AddDetail backBtn2={props.back2} /> : <div> {props.state ? <Sell backBtn={props.back} /> : <Navbar sell={props.sellBtn} adDetail={props.ad} />}</div>}
            {/* <Backimage /> */}
            {/* <div>
                <div className='parent'>
                    <h2>More on Mobile Phones</h2>
                    <div className='scroll'>
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                        <Posts
                            img={'https://media.wired.com/photos/6149204955f7b3aea723343d/master/pass/Gear-Review-Apple_iPhone-13-Pro_Colors_09142021.jpg'}
                            title={'Apple iPhone 13 Pro'}
                            price={'$1,000'}
                            address={'New York'}
                        />
                    </div>
                </div>
            </div> */}

            {/* ==== */}
            {/* Next */}
            {/* ==== */}
            <br />
            <br />
            {/* <div className='parent'>
                <h2>Fresh recommendations</h2>
                <div className='fresh'>
                    <div className='container'>
                        <div class="row">
                            <div class="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(1).jpeg?alt=media&token=62659e18-a342-4b99-8482-d6e6184fcac9'}
                                    title={'Apple iPhone 11'}
                                    price={'$800'}
                                    address={'New York'}
                                />
                            </div>
                            <div class="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2F2020-ktm-250-duke-left-side-eac4.png?alt=media&token=e3b3a938-c57b-4255-95b1-80d54dcf5a93'}
                                    title={'Kawasaki Hayabosa'}
                                    price={'$5,000'}
                                    address={'New York'}
                                />
                            </div>
                            <div class="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fsuzuki%20mehran.jpg?alt=media&token=6b490fe6-7313-42ae-b4b9-61b5cbdd58ed'}
                                    title={'Suzuki Mehran'}
                                    price={'$10,000'}
                                    address={'New York'}
                                />
                            </div>
                            <div class="col">
                                <Posts
                                    img={'https://firebasestorage.googleapis.com/v0/b/olx-sijeesh.appspot.com/o/image%2Fimages%20(5).jpeg?alt=media&token=40e772b9-ddb4-4729-be60-65aeafc1684b'}
                                    title={'Cannon 50mm'}
                                    price={'$300'}
                                    address={'New York'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
