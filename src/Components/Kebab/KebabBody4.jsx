import React from 'react'
import './All2.css'
import butle from '../../imgs/burger 1.png'
import butle1 from '../../imgs/bottle.png'

function KebabBody4() {
  return (
    <div>
                  <div className="beg_conteiner">
                <div className="beg0">
                    <div className="beg1">
                        <img src={butle} alt="" />
                        <div className="beg3">
                            <img src={butle1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="book">
                    <div className="book1">
                        <h3>RESERVATION</h3>
                        <h1>BOOK YOUR TABLE</h1>
                    </div>
                    <div className="input_form">
                        <div className="name">
                            <input type="text" placeholder='NAME' />
                            <input type="date" placeholder='DATE' />
                            <input type="number" placeholder='PEOPLE' />
                        </div>
                        <div className="name">
                            <input type="email" placeholder='EMAIL' />
                            <input type="time" placeholder='TIME' />
                            <button>FIND A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default KebabBody4
