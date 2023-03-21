import "./HeroImg.css"
import React from 'react'
import IntroImg from "../../assets/four.jpg"
import { Link } from "react-router-dom"
import Resume from "../../assets/Resume.pdf"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
        <p>HI, I'M A WEB DEVELOPER</p>
        <h1>REACT DEVELOPER</h1>
        <div>
            {/* <a href="ROBIN's Resume-1.pdf" download="ROBIN's Resume-1.pdf" className="btn">Resume</a> */}
            <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn">Resume</a>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg
