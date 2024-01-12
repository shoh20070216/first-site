import React from 'react'
import './All2.css'
import { LiaHamburgerSolid } from "react-icons/lia";
import icon from '../../imgs/hay.png'
import bur from '../../imgs/110.png'
import KebebBody from './KebebBody'
import KebabBody1 from './KebabBody1'
import KebabBody2 from './KebabBody2'
import KebabBody3 from './KebabBody3'
import KebabBody4 from './KebabBody4'
import KebabLeg from './KebabLeg';

function KebabHead() {
  return (
    <div>
      <div className="banner_conteiner">
        <div className="head_1">
          <div className="navbar">
            <div className="icon">
              <LiaHamburgerSolid style={{ fontSize: '70px' }} />
              <h1>BURGER HOUSE </h1>
            </div>
            <div className="nav">
              <div className="navbar1">
                <img className='img3' src={icon} alt="" />
                <p> Call for Delivery <a href="tel:+4 450 68 7474">+4 450 68 7474</a></p>
              </div>
              <div className="nav1">
                <a href="#">HOME</a>
                <a href="#">MENU</a>
                <a href="#">EVENTS</a>
                <a href="#">RESERVATION</a>
                <a href="#">GALLERY</a>
                <a href="#">CONTACT US</a>
              </div>

            </div>

          </div>
          <div className="head1">
            <div className="boz">
              <div className="box">
                <p>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</p>
              </div>
              <h1>SPECIALL </h1>
              <h2>BURGER</h2>
            </div>
            <img src={bur} alt="" />
          </div>
        </div>
      </div>
      <div className="burder">
        <KebebBody />
        <KebabBody1 />
        <KebabBody2 />
        <KebabBody3 />
        <KebabBody4 />
        <KebabLeg />
      </div>
    </div>
  )
}

export default KebabHead
