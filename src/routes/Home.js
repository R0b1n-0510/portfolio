import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImg from '../components/HeroImg/HeroImg'
import Footer from '../components/Footer/Footer'
import Work from '../components/Work/Work'
import AboutContent from '../components/AboutContent/AboutContent'
import Certificates from '../components/Certificates/Certificates'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <AboutContent heading="About me" text="I am a dynamic professional with technical proficiency in web development technologies - HTML & CSS, Javascript and React.js" />
      <Work />
      <Certificates />
      <Footer />
    </div>
  )
}

export default Home