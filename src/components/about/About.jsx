import React from 'react'
import './about.css'
import foto from '../../assets/pfp.jpg'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
    <section id="about">
     <h5>Get to Know</h5>
        <h2>About Me</h2>
    
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={foto} alt="about-image" />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Swimming</h5>
          <small>8+ Years</small>
          </article>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Problem Solving</h5>
          <small>4+ Years</small>
          </article>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Helping *</h5>
          <small>3+ Years</small>
          </article>
        </div>
        <p>
        Hello my name is Juan Andres Montero, I've been swimming as a hobby and participated for competitions a few times in my life, Im currently studying in ITESO, an I've always been passionate about giving my 110% on each task given to me.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
    </div>
    </section>
  )
}

export default about