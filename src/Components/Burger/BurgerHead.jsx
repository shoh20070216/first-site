import React from 'react'
import './All1.css'
import { LiaHamburgerSolid } from "react-icons/lia";
import icon from '../../imgs/hay.png'
import bur from '../../imgs/burger.png'
import BurgeBody from './BurgeBody';
import BurgerBody1 from './BurgerBody1';
import BurgerBody2 from './BurgerBody2';
import BurgerBody3 from './BurgerBody3';
import BurgerBody4 from './BurgerBody4';
import BurgerLeg from './BurgerLeg';
function BurgerHead() {
  return (
    <div>
      <div className="banner_conteiner">
        <div className="head_12">
          <div className="navbar_12">
            <div className="icon_12">
              <LiaHamburgerSolid style={{ fontSize: '70px' }} />
              <h1>BURGER HOUSE </h1>
            </div>
            <div className="nav">
              <div className="navbar1_2">
                <img className='img3' src={icon} alt="" />
                <p> Call for Delivery <a href="tel:+4 450 68 7474">+4 450 68 7474</a></p>
              </div>
              <div className="nav1_2">
                <a href="#">HOME</a>
                <a href="#">MENU</a>
                <a href="#">EVENTS</a>
                <a href="#">RESERVATION</a>
                <a href="#">GALLERY</a>
                <a href="#">CONTACT US</a>
              </div>

            </div>

          </div>
          <div className="head1_2">
            <div className="boz_12">
              <div className="box_12">
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
        <BurgeBody />
        <BurgerBody1 />
        <BurgerBody2 />
        <BurgerBody3 />
        <BurgerBody4 />
        <BurgerLeg />
      </div>
    </div>
  )
}

export default BurgerHead
