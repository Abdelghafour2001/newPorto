import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
<div className='about__me-image'>
<img src={ME} alt="aboutme" />
</div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small>1 Year working</small>
            </article>
            <article className='about__card'>
              <FiUsers/>
              <h5>Clients</h5>
              <small>1 client in settat</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary/>
              <h5>Projects</h5>
              <small>Dont know, wont bother</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
<a href="#contact" className='btn btn-primary'>Talk to Me</a>
        </div>
      </div>
    </section>
  )
}

export default About