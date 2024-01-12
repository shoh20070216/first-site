import React from 'react'
import './All1.css'
import hamburger from '../../imgs/menu_1.png'
import hamburger1 from '../../imgs/menu_2.png'
import hamburger2 from '../../imgs/menu_3.png'

function BurgerBody1() {
    return (
        <div>
            <div className="menu">
                <div className="enjoy_12">
                    <h1>CHOOSE & ENJOY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                </div>
                <div className="hamburger1_12">
                    <div className="hamburger_12">
                        <img style={{ width: '330px,', marginBottom: '30px' }} src={hamburger} alt="" />
                        <h1>HAMBURGER1</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.</p>
                        <button>ORDER NOW</button>
                    </div>
                    <div className="hamburger2_12">
                        <img src={hamburger1} alt="" />
                        <h1>HAMBURGER2</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.</p>
                        <button>ORDER NOW</button>
                    </div>
                    <div className="hamburger_12">
                        <img src={hamburger2} alt="" />
                        <h1>HAMBURGER3</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, repudiandae.</p>
                        <button>ORDER NOW</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BurgerBody1
