import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import ProfileDetails from './Pages/ProfileDetails';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ProfileDetails />
      <Contact />
      <Footer />
    </>
  )
}

export default App
