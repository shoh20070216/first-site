import React from 'react'
import restourant from "../../imgs/res.jpg"
import logo from "../../imgs/burger.png"
import { LiaHamburgerSolid } from "react-icons/lia";
import Body1 from './Body1';

function Head() {
    return (
        <>
            <div>


                <div className="head">
                    <div className="im">
                        <img className='im_img' src={restourant} alt="" />
                    </div>
                    <div className="body">
                        <LiaHamburgerSolid style={{ fontSize: '110px', marginTop: '100px' }} />
                        <h1>FAST FOOD AND <br /> SHOX RESTAURANT</h1>
                        <p>Burger House - perfect template for any Restaurant, Cafe & Fast Food business. Looks  good on all types of screens devices and platforms. Documented well and very easy to  customize & does not require much knowledge of coding.</p>
                        <button>JOIN AS</button>
                        <div className="img_bottom">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Body1/>
            {/* <Leg1/> */}
        </>
    )
}

export default Head
