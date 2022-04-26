import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/libro2.jpg'

const portfolio = () => {
  return (
    <section id='section'>
      <h5>Recent Work</h5>
      <h2> Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1}></img>
          </div>
          <h3> prueba</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1}></img>
          </div>
          <h3> portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default portfolio