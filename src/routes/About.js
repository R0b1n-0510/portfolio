import React from 'react'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg/HeroImg2'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT." text="I'm a front-end developer" />
      <AboutContent heading="Who Am I" text="I am a dynamic professional with technical proficiency in web development technologies - HTML & CSS, Javascript and React.js. I have worked on more than 5 projects based on HTML, CSS, JavaScript and react.js and currently working on an E-commerce website based on MERN stack, I am currently learning backend - Node.js and MongoDB"/>
      <Footer />
    </div>
  )
}

export default About