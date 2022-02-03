import React from 'react'
import './Header.css'
import logo from '../../img/logo_new.png'
import { ChevronRightRounded } from '@material-ui/icons'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <div className='pt-10 mx-3 md:mx-12 flex justify-between '>
        <img src={logo} alt='logo' />
        <Link to='/signin' className='header_sign_btn'>
          <button>Sign In</button>
        </Link>
      </div>
      <div className='header_uo'>
        <div className='header_content'>
          <p className='header_text'>
            Watch k1 the Ultimate musics from Inception to date
          </p>
          <form>
            <input
              type='email'
              className='header_input'
              placeholder='Email address'
            />
            <button className='header_btn'>
              <span className='mr-2'>Get Started</span>
              <ChevronRightRounded className='header_icon' fontSize='large' />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
