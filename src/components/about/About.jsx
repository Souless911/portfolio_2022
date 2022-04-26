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
          <h5>Experience</h5>
          <small>3+ Years</small>
          </article>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years</small>
          </article>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, necessitatibus. Enim, animi amet, quam ipsam cum libero dolorem sapiente nemo, quis possimus illum quisquam est velit quod repudiandae veniam reiciendis!
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      </div>
    </div>
    </section>
  )
}

export default about