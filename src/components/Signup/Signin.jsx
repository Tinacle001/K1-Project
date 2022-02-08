import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo_new.png'
import './Signup.css'
import Footer from '../Footer/Footer'
const Signin = () => {
  return (
    <>
      <div className='signup'>
        <div className='logo pt-2 mx-12 flex justify-between '>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='signup_container'>
          <div className='signup_box '>
            <p className='signup_text mb-7 text-center'>
              Sign In to K1 MUSIC EMPIRE.
            </p>
            <form>
              <input
                type='text'
                className='signup_input'
                placeholder='adebola234@yahoo.com'
              />
              <input
                type='password'
                className='signup_input'
                placeholder='password'
              />
              <Link to='/welcome'>
                <button className='signup_btn'>Sign In</button>
              </Link>
            </form>
          </div>
          {/* end signup box */}
          <div className='extra'>
            <div className='extraone flex justify-between mb-6'>
              <label class='md:w-2/3 block text-gray-500 font-bold'>
                <input className='mr-2' type='checkbox' />
                <span className='text-sm captcha'>Remember Me</span>
              </label>
              <p className='captcha'>Need Help?</p>
            </div>
            <div className='extratwo flex justify-between mb-4'>
              <p className='text-gray-500 captcha'>New to K1 Music Empire?</p>
              <Link to='/signup'>
                <button>Sign Up</button>
              </Link>
            </div>
            <p className='captcha'>
              This page is protected by Google reCAPTCHA to ensure you’re not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin
