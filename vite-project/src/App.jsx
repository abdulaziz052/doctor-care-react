import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Fixednavbat from './Fixednavbat'

function App() {

  return (
    <> 
    {/* <Fixednavbat/> */}
    <Header/>
     <Hero/>
     <Services/>
     <About/>
     <Contact/>
     <Footer/> 
    </>
  )
}

export default App
