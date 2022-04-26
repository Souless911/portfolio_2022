import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Testimonial from './components/testimonial/testimonial'
import Nav from './components/nav/nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/portfolio'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App