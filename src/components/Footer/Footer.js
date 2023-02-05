import "./Footer.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} /> 
                <div>
                    <p>Flat no.544, Kanishka Apartment, C&D-Block</p>
                    <p>Shalimar Bagh, Delhi - 110088, India</p>
                </div>
                </div>
                <div className="phone">
                <h4><a href="callto:+918076427841"><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />+91-8076427841</a></h4>
                </div>
                <div className="email">
                <h4><a href="mailto:robinsn05@gmail.com"><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} />robinsn05@gmail.com</a></h4>  
                </div>
            </div>

            <div className="right">
                <h4>About me</h4>
                <p>I am a dynamic professional with technical proficiency in web development technologies - HTML & CSS, Javascript and React.js</p>
                <div className="social">
                <FaFacebook size={30} style={{ color:"#fff", marginRight: "1rem" }} />  
                <a href="https://github.com/R0b1n-0510"><FaGithub size={30} style={{ color:"#fff", marginRight: "1rem" }} /></a>  
                <a href="https://www.linkedin.com/in/the-robinsingh"><FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem" }} /></a>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer