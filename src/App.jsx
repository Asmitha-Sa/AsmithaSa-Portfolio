import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from "./components/About"
import Internships from "./components/Internships"
import Projects from "./components/Projects"
import Certificates from './components/Certificates'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import './index.css';


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Internships/>
    <Projects/>
    <Certificates/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App
