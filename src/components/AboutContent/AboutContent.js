import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"
import Img1 from "../../assets/five.jpg"
import Img2 from "../../assets/six.jpg"

const AboutContent = (props) => {
  return (
    <div className="about">
        <div className="left">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Img1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={Img2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
