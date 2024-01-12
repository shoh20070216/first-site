import React from 'react'
import './All2.css'
import chiz from '../../imgs/2.png'
import chef from '../../imgs/1.png'
import chef1 from '../../imgs/3.png'

function KebebBody() {
  return (
    <div>
                  <div className="text">
                <div className="body5">
                    <img src={chiz} alt="" />
                    <div className="text_position">
                        <p>TRYIT TODAY</p>
                        <h1>MOST POPULAR BANNER</h1>
                    </div>
                </div>
                <div className="body3">
                    <div className="body4">
                        <img src={chef} alt="" />
                        <div className="text_position">
                            <p>TRYIT TODAY</p>
                            <h1>MORE FUN MORE TASTE</h1>
                        </div>
                    </div>
                    <div className="body4">
                        <img src={chef1} alt="" />
                        <div className="text_position">
                            <p>TRYIT TODAY</p>
                            <h1>FRESH & CHILI</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text1">
                <button>ALWAYS TASTY BURGER</button>
            </div>
    </div>
  )
}

export default KebebBody
