import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/jujutsu1.jpg'
import IMG2 from '../../assets/jujutsu2.jpg'
import IMG3 from '../../assets/jujutsu3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='potfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG3} alt="im1"/>
          </div>
        
            <h3>Idk what to put here now</h3>  <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='potfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG2} alt="im1"/>
          </div>
         
            <h3>Idk what to put here now</h3> <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='potfolio__item'>
          <div className="portfolio__item-img">
            <img src={IMG1} alt="im1"/>
          </div>
         
            <h3>Idk what to put here now</h3> <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default Portfolio