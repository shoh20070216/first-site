import React from 'react'
import './All1.css'
import gellery from '../../imgs/10.png'
import gellery1 from '../../imgs/11.png'
import gellery2 from '../../imgs/12.png'
import gellery3 from '../../imgs/13.png'
function BurgerBody3() {
    return (
        <div>
            <div className="gallery_12">
                <h1>GALLERY</h1>
                <div className="galery">
                    <div className="galery1">
                        <img src={gellery} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery1} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery2} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery3} alt="" />
                    </div>
                </div>
                <div className="galery">
                    <div className="galery1">
                        <img src={gellery2} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery3} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery} alt="" />
                    </div>
                    <div className="galery1">
                        <img src={gellery1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerBody3
