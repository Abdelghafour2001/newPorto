import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://Facebook.com' target="_blank" rel='noreferrer'><BsFacebook/></a>
        <a href='https://Github.com' target="_blank" rel='noreferrer'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials