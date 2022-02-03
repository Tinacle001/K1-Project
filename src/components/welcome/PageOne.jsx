import React from 'react'
import './welcome.css'
import logo from '../../img/logo_new.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const PageOne = () => {
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
              Thanks for signing up! We just need you to verify your email
              address to complete setting up your account.
            </p>
            <Link to='/verify'>
              <button className='welcome_btn'>Verify My Email</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PageOne
