import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImg2 from '../components/HeroImg/HeroImg2'
import Form from '../components/Form/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Feel free to reach out to me" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact