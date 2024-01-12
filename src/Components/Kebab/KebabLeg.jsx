import React from 'react'
import './All2.css'
import back from '../../imgs/fries.avif'
import { LiaHamburgerSolid } from "react-icons/lia";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";

function KebabLeg() {
  return (
    <div>
                  <div className="bed_conteiner">
                <div className="bed_conteiner1">
                    <img src={back} alt="" />
                </div>
                <div className="leag">
                    <div className="hose">
                        <div className="icon1">
                            <div className="icon2">
                                <LiaHamburgerSolid style={{ fontSize: '100px' }} />
                                <h1>BURGER HOUSE </h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="gmail1">
                            <div className="gmail">
                                <IoLocationSharp style={{ fontSize: '40px' }} />
                                <h1>Büyükdere Cad., 22A, Istanbul, Turkey</h1>
                            </div>
                            <div className="gmail">
                                <IoMdMail style={{ fontSize: '40px' }} />
                                <h1>info@companyname.com</h1>
                            </div>
                        </div>
                    </div>
                    <div className="hose1">
                        <div className="hose4">
                            <p>© Burger House 2023. All rights reserved.</p>
                        </div>
                        <div className="logo2">
                            <div className="logo1">
                                <IoLogoInstagram />
                            </div>
                            <div className="logo3">
                                <TiSocialFacebook />
                            </div>
                            <div className="logo4">
                                <IoLogoTwitter />
                            </div>
                            <div className="logo5">
                                <FaWhatsapp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default KebabLeg
