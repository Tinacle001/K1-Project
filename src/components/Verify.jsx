import React from 'react'
import './welcome/welcome.css'
import logo from '../img/logo_new.png'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'
const PageTwo = () => {
  return (
    <>
      <div className='wrap'>
        <div className='welcome_logo md:mx-12 flex justify-between '>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='welcome flex justify-center align-middle flex-col p-9'>
          <div className='content'>
            <h1 className='content_header'>Welcome!</h1>
            <p className='welcome_text'>
              Congratulations! Your email has been verified successfully.
            </p>
            <p className='welcome_text_two'>
              You can now explore and enjoy K1 Music Empire
            </p>
            <button className='welcome_btn uppercase'>Enter</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageTwo
