import React from 'react'
import styles from './styles/Landing.module.css'
import About from './Components/About.js'
import Footer from './Components/Footer.js'
import Nav from './Components/Nav.js'

const Landing = () => {
  return (
    <div>
        <Nav/>
      <About/>
      <Footer/>
      
    </div>
  )
}

export default Landing
