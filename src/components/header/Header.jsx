import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ham.png'
import leme from '../../assets/probando.png'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Juan Montero</h1>
        <h5 className="text-light">Intern Software developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={leme} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header