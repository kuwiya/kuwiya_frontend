import React from 'react'
import HeroSection from './_components/hero'
import { Navbar } from '../../components/ui'
import Form from './_components/form'
import FAQS from './_components/faqs'
import Contact from './_components/contact'

const HelpCenter = () => {
  return (
    <div>
        <Navbar bgBlack  />        
        <HeroSection />
        <Form />
        <FAQS />
        <Contact />
    </div>
  )
}

export default HelpCenter